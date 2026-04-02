"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLeague } from "@/Context/LeagueContext";
import type { SelectLeague } from "@/Context/LeagueContext";
import { teamTheme } from "@/Utils/teamTheme";
import { Player } from "../TeamSelection/page";
import randomPlayerList from "@/Helper/randomPlayerList";
import { stadiumNames } from "@/DB/Player";

type Role = "Batter" | "Bowler" | "WK" | "AR";
type PlayerRole = "overall" | "batting" | "bowling";

const roleImages: Record<Role, string> = {
  Batter: "/batting_image.jpg",
  Bowler: "/bowling_image.jpg",
  WK: "/wicket_keeper_image.jpg",
  AR: "/allrounder_image.jpg",
};

const PlayingXIBuilder = () => {
  const { selectTeam, playingXI, setPlayingXI, randomTeam, setRandomTeam } =
    useLeague() as SelectLeague;

  const [storedTeamName, setStoredTeamName] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [showCardPlayer, setShowCardPlayer] = useState<Player | null>(null);
  const [randomOpponent, setRandomOpponent] = useState<Player | null>(null);

  const [originalTeamPoint, setOriginalTeamPoint] = useState(0);
  const [randomTeamPoint, setRandomTeamPoint] = useState(0);
  const [winStatus, setWinStatus] = useState<string | null>("");
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);
  const [selectedRole, setSelectedRole] = useState<string | null>("");
  const [roundWinner, setRoundWinner] = useState<string | null>(null);

  const [currentMatch, setCurrentMatch] = useState(0);
  const [isEliminated, setIsEliminated] = useState(false);
  const [matchWon, setMatchWon] = useState(false);
  const [matchMode, setMatchMode] = useState<string | null>(null);

  const [openMatchStatus, setOpenMatchStatus] = useState(false);
  const [showMatchIntro, setShowMatchIntro] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | number | null>(null);
  const router = useRouter();

  const TOURNAMENTMODE = "knockout";
  const maxMatches = matchMode === TOURNAMENTMODE ? 3 : 5;

  const stepLabels = ["1", "2", "3", "4", "5"];

  const matchSteps = stepLabels.slice(0, maxMatches);

  useEffect(() => {
    const storedTeam = localStorage.getItem("SelectTeam");
    if (storedTeam) {
      setStoredTeamName(storedTeam);
    }

    const savedMatch = localStorage.getItem("currentMatch");
    if (savedMatch) {
      setCurrentMatch(Number(savedMatch));
    }

    const mode = localStorage.getItem("gameMode");
    setMatchMode(mode);
  }, []);

  useEffect(() => {
    const storedPlayingXI = localStorage.getItem("playingXI");

    if (storedPlayingXI) {
      setPlayingXI(JSON.parse(storedPlayingXI));
    }
    const teamId = JSON.parse(localStorage.getItem("AvailableTeamId") || "0");
    setRandomTeam(randomPlayerList(teamId));

    setShowMatchIntro(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("currentMatch", String(currentMatch));

    setTimeout(() => {
      if (currentMatch === maxMatches) setMatchWon(true);
    }, 3000);
  }, [currentMatch]);

  const finalTeam = selectTeam || storedTeamName;
  const cardTheme = teamTheme[finalTeam];

  const matchStadium = stadiumNames[finalTeam];
  console.log(matchStadium);

  const resetGame = () => {
    setTimeout(() => {
      setOriginalTeamPoint(0);
      setRandomTeamPoint(0);
      setWinStatus("");
      setSelectedPlayers([]);
      setSelectedRole("");
      setRoundWinner("");
      setRandomOpponent(null);
      if (currentMatch != maxMatches - 1) setShowMatchIntro(true);
      const teamId = JSON.parse(localStorage.getItem("AvailableTeamId") || "0");
      setRandomTeam(randomPlayerList(teamId));
    }, 3000);
  };

  const handleSelectedRole = (playerValue: number, role: PlayerRole) => {
    if (!randomTeam?.players?.length) return;
    const randomNum = Math.floor(Math.random() * randomTeam.players.length);
    const opponent = randomTeam.players[randomNum];
    setRandomOpponent(opponent);
    const opponentValue = opponent[role];

    if (opponentValue > playerValue) {
      setRoundWinner("randomPlayer");

      setRandomTeamPoint((prev) => {
        const newScore = prev + 1;

        if (newScore === 5) {
          setWinStatus("Opponent Wins 🏆");
          setTimeout(() => {
            localStorage.removeItem("currentMatch");
            localStorage.removeItem("playingXI");
            setIsEliminated(true);
          }, 3000);
          //localStorage.removeItem("currentMatch");
        }

        return newScore;
      });
    } else if (opponentValue < playerValue) {
      setRoundWinner("originalPlayer");

      setOriginalTeamPoint((prev) => prev + 1);
      if (originalTeamPoint + 1 === 5) {
        setWinStatus("You Win 🎉");

        if (currentMatch < maxMatches) {
          setCurrentMatch((prevMatch) => prevMatch + 1);
          console.log("Increment");
        }

        if (currentMatch != maxMatches - 1) resetGame();
      }
    }

    timerRef.current = setTimeout(() => {
      setShowCard(false);
      setSelectedRole("");
      setRoundWinner("");
    }, 3000);

    setSelectedRole(role);
  };

  if (!randomTeam) return;
  const opponentTheme = teamTheme[randomTeam?.name];

  const isSelected =
    showCardPlayer && selectedPlayers.includes(showCardPlayer.id);

  return (
    <main
      className="w-full min-h-full overflow-y-auto p-4 flex flex-col gap-5 relative"
      style={{ backgroundImage: "url('/Cricket.jpg')" }}
    >
      <div className="flex gap-x-5">
        <div className="w-[50%] space-y-3">
          <div className="flex gap-5 h-[7%] items-center">
            <header className="text-[25px] font-semibold text-white">
              {finalTeam} Playing XI
            </header>
            <img
              src={cardTheme?.logo}
              alt={finalTeam}
              className="w-10 h-10 object-cover
              drop-shadow-lg
              rounded-[50%]
              transition-transform duration-300
              hover:scale-130"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {playingXI?.map((player, index) => (
              <div
                key={index}
                onClick={() => {
                  if (selectedPlayers.includes(player!.id)) return;
                  setShowCard(true);
                  setRandomOpponent(null);
                  setShowCardPlayer(player);
                }}
                className={`${player && selectedPlayers.includes(player.id) ? "hover:cursor-no-drop bg-gray-300/70" : `${cardTheme?.card} hover:cursor-pointer hover:-translate-y-1 duration-100`}   select-none border border-gray-300 flex flex-col items-center justify-between p-5 lg:p-10 rounded-lg  text-center   shadow-lg  gap-y-3`}
              >
                <span className="text-md font-semibold text-gray-800">
                  {player?.name}
                </span>

                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-[15px] font-semibold">
                  {player?.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[50%] space-y-3">
          <div className="flex gap-5 h-[7%] items-center">
            <div className="w-full flex gap-x-5 h-full items-center">
              <header className="text-[25px] font-semibold text-white">
                {randomTeam?.name} Playing XI
              </header>
              <img
                src={randomTeam?.logo}
                alt={randomTeam?.name}
                className="w-10 h-10 object-cover
                drop-shadow-lg
                rounded-[50%]
                transition-transform duration-300
                hover:scale-130"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {randomTeam?.players.map((player, index) => (
              <div
                key={index}
                className={`${opponentTheme.card} border border-gray-300 flex flex-col items-center justify-between p-5 lg:p-10 rounded-lg  text-center   shadow-lg gap-y-3`}
              >
                <span className="text-md font-semibold text-gray-800">
                  {player?.name}
                </span>

                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-[15px] font-semibold">
                  {player?.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openMatchStatus && (
        <div className="absolute left-[25%] bottom-0 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] bg-gray-200 min-h-[80px] md:min-h-[100px] p-3 md:p-4 rounded-lg shadow-lg flex items-center">
          <div className="w-full flex flex-wrap items-center justify-center gap-3 md:gap-4 relative">
            {matchSteps.map((items, index) => {
              const isActive = index < currentMatch;
              const isCurrent = index === currentMatch;
              return (
                <div key={index} className="flex items-center">
                  <div
                    className={`
                    w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-green-500 text-white shadow-lg shadow-green-400/50"
                        : isCurrent
                          ? "bg-linear-to-r from-blue-500 to-indigo-500 text-white"
                          : "bg-gray-300 text-gray-800"
                    }
                    `}
                  >
                    {isActive ? "✓" : index + 1}
                  </div>

                  {index !== matchSteps.length - 1 && (
                    <div
                      className={`w-20 h-1 mx-2 
                      ${index < currentMatch - 1 ? "bg-green-500" : "bg-gray-300"}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <span
            className="absolute top-2 right-2 hover:cursor-pointer"
            onClick={() => setOpenMatchStatus(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="h-8 w-8"
            >
              <path
                fill="rgb(255, 0, 0)"
                d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C221.6 240.4 221.6 255.6 231 264.9L286 319.9L231 374.9C221.6 384.3 221.6 399.5 231 408.8C240.4 418.1 255.6 418.2 264.9 408.8L319.9 353.8L374.9 408.8C384.3 418.2 399.5 418.2 408.8 408.8C418.1 399.4 418.2 384.2 408.8 374.9L353.8 319.9L408.8 264.9C418.2 255.5 418.2 240.3 408.8 231C399.4 221.7 384.2 221.6 374.9 231L319.9 286L264.9 231C255.5 221.6 240.3 221.6 231 231z"
              />
            </svg>
          </span>
        </div>
      )}

      {showCard && showCardPlayer && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="w-[95%] sm:w-[80%] md:w-[70%] h-[90%] md:h-[70%] flex justify-center items-center px-2 md:px-4 bg-[#03224a] rounded-2xl">
            <div className="w-full h-full md:h-[90%] bg-[url('/scoreCardbackground.jpg')] bg-cover border-2 border-[#546780] rounded-xl shadow-lg relative flex flex-col gap-3 md:gap-5 p-3 md:p-6 overflow-y-auto">
              <span
                className="absolute top-1 right-1 cursor-pointer"
                onClick={() => {
                  setShowCard(false);
                  setSelectedRole("");
                  clearTimeout(timerRef.current as number);
                  setRoundWinner("");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="rgb(255, 0, 0)"
                    d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C221.6 240.4 221.6 255.6 231 264.9L286 319.9L231 374.9C221.6 384.3 221.6 399.5 231 408.8C240.4 418.1 255.6 418.2 264.9 408.8L319.9 353.8L374.9 408.8C384.3 418.2 399.5 418.2 408.8 408.8C418.1 399.4 418.2 384.2 408.8 374.9L353.8 319.9L408.8 264.9C418.2 255.5 418.2 240.3 408.8 231C399.4 221.7 384.2 221.6 374.9 231L319.9 286L264.9 231C255.5 221.6 240.3 221.6 231 231z"
                  />
                </svg>
              </span>

              <div className="w-full h-full flex flex-col md:flex-row gap-5">
                <div
                  className={`w-full md:w-[35%] border-2 bg-[#19274d] border-[#3f76b0] rounded-lg p-3 flex flex-col justify-between 
                  ${roundWinner === "originalPlayer" && "bg-blue-500"}`}
                >
                  <div className="text-center">
                    <h1 className="text-lg text-white font-semibold">
                      {showCardPlayer?.name}
                    </h1>
                    <p className="text-white font-semibold">
                      {showCardPlayer?.role}
                    </p>
                  </div>

                  <div className="flex justify-center items-center my-3">
                    <img
                      src={roleImages[showCardPlayer.role as Role]}
                      alt={showCardPlayer?.role}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-3 mt-3 text-sm">
                    <div
                      className={`flex justify-between px-4 py-2 rounded-full hover:cursor-pointer ${
                        selectedRole === "overall"
                          ? "bg-green-500 text-white"
                          : "bg-green-200 text-black"
                      }`}
                      onClick={() => {
                        if (isSelected) return;
                        handleSelectedRole(showCardPlayer?.overall, "overall");
                        setSelectedPlayers((prev) =>
                          showCardPlayer ? [...prev, showCardPlayer.id] : prev,
                        );
                      }}
                    >
                      <span>Overall</span>
                      <span>{showCardPlayer?.overall}%</span>
                    </div>

                    <div
                      className={`flex justify-between px-4 py-2 rounded-full hover:cursor-pointer ${
                        selectedRole === "batting"
                          ? "bg-blue-500 text-white"
                          : "bg-blue-200 text-black"
                      }`}
                      onClick={() => {
                        if (isSelected) return;
                        handleSelectedRole(showCardPlayer?.batting, "batting");
                        setSelectedPlayers((prev) =>
                          showCardPlayer ? [...prev, showCardPlayer.id] : prev,
                        );
                      }}
                    >
                      <span>Batting</span>
                      <span>{showCardPlayer?.batting}%</span>
                    </div>

                    <div
                      className={`flex justify-between px-4 py-2 rounded-full hover:cursor-pointer ${
                        selectedRole === "bowling"
                          ? "bg-red-500 text-white"
                          : "bg-red-200 text-black"
                      }`}
                      onClick={() => {
                        if (isSelected) return;
                        handleSelectedRole(showCardPlayer?.bowling, "bowling");
                        setSelectedPlayers((prev) =>
                          showCardPlayer ? [...prev, showCardPlayer.id] : prev,
                        );
                      }}
                    >
                      <span>Bowling</span>
                      <span>{showCardPlayer?.bowling}%</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[30%] flex flex-col items-center justify-center">
                  <h1 className="text-2xl md:text-[35px] text-white text-center w-[75%] border-2 p-2 rounded-4xl font-semibold">
                    {originalTeamPoint} : {randomTeamPoint}
                  </h1>
                  <span>
                    <svg
                      width="120"
                      height="80"
                      viewBox="0 0 120 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 15 L70 15 L50 65 L10 65 Z"
                        fill="#FF3B30"
                        style={{
                          filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
                        }}
                      />{" "}
                      <path
                        d="M75 15 L110 15 L110 65 L55 65 Z"
                        fill="#007AFF"
                        style={{
                          filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
                        }}
                      />{" "}
                      <text
                        x="60"
                        y="52"
                        textAnchor="middle"
                        fontFamily="Impact, sans-serif"
                        fontSize="34"
                        fill="white"
                        fontStyle="italic"
                        style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}
                      >
                        {" "}
                        VS{" "}
                      </text>{" "}
                    </svg>{" "}
                  </span>
                </div>

                <div
                  className={`w-full md:w-[35%] border-2 border-[#3f76b0] rounded-lg p-3 bg-[#19274d]
                      ${roundWinner === "randomPlayer" && "bg-blue-500"}`}
                >
                  {randomOpponent ? (
                    <div className="text-center h-full flex flex-col justify-between">
                      <div>
                        <h1 className="text-lg text-white font-semibold">
                          {randomOpponent?.name}
                        </h1>
                        <p className="text-white">{randomOpponent?.role}</p>
                      </div>

                      <div className="flex justify-center items-center my-3">
                        <img
                          src={roleImages[randomOpponent.role as Role]}
                          alt={randomOpponent?.role}
                          className="w-20 h-20 md:w-24 md:h-24 object-cover"
                        />
                      </div>

                      <div className="flex flex-col gap-3 mt-3 text-sm">
                        <div
                          className={`flex justify-between px-4 py-2 rounded-full ${
                            selectedRole === "overall"
                              ? "bg-green-500 text-white"
                              : "bg-green-200 text-black"
                          }`}
                        >
                          <span>Overall</span>
                          <span>{randomOpponent?.overall}%</span>
                        </div>

                        <div
                          className={`flex justify-between px-4 py-2 rounded-full ${
                            selectedRole === "batting"
                              ? "bg-blue-500 text-white"
                              : "bg-blue-200 text-black"
                          }`}
                        >
                          <span>Batting</span>
                          <span>{randomOpponent?.batting}%</span>
                        </div>

                        <div
                          className={`flex justify-between px-4 py-2 rounded-full ${
                            selectedRole === "bowling"
                              ? "bg-red-500 text-white"
                              : "bg-red-200 text-black"
                          }`}
                        >
                          <span>Bowling</span>
                          <span>{randomOpponent?.bowling}%</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full justify-center items-center">
                      <h1 className="font-light text-white">
                        Choose role to see opponent
                      </h1>
                    </div>
                  )}
                </div>
              </div>

              {winStatus && (
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[20px] text-white">
                    {winStatus} {currentMatch}/{maxMatches}
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {isEliminated && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="w-[90%] sm:w-[70%] md:w-[50%] bg-[#03224a] rounded-2xl p-6 flex flex-col items-center gap-6 text-center shadow-2xl">
            <h1 className="text-2xl md:text-3xl font-bold text-red-400">
              ❌ You are Knocked Out
            </h1>

            <p className="text-white text-lg">
              Matches Won:{" "}
              <span className="font-semibold text-yellow-400">
                {currentMatch}
              </span>
            </p>

            <button
              onClick={() => {
                router.push("/SelectMode");
              }}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition duration-200"
            >
              Restart Tournament to Play Again
            </button>
          </div>
        </div>
      )}
      {matchWon && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div
            className="w-[90%] sm:w-[70%] md:w-[50%]
                  relative overflow-hidden rounded-2xl p-6"
          >
            <div className="aspect-video w-full relative">
              <iframe
                className="scale-125 absolute top-1/2 left-1/2  w-full h-full -translate-x-1/2 -translate-y-1/2  z-0 pointer-events-none"
                src="https://www.youtube.com/embed/cNo5hxw2l_E?autoplay=1&mute=1&loop=1&playlist=cNo5hxw2l_E&controls=0"
                allow="autoplay"
                title="Background stadium video"
                aria-hidden="true"
              />

              <div className="absolute z-20 flex flex-col justify-center w-full items-center h-full gap-6 text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-green-400">
                  🎉 Match Won!
                </h1>

                <p className="text-white font-semibold tracking-wider text-2xl font-[Orbitron]">
                  Match -- {currentMatch}/{maxMatches}
                </p>

                <button
                  className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl hover:cursor-pointer"
                  onClick={() => {
                    setMatchWon(false);
                    localStorage.removeItem("currentMatch");
                    localStorage.removeItem("playingXI");
                    localStorage.removeItem("gameMode");
                    router.push("/SelectMode");
                  }}
                >
                  Play Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showMatchIntro && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-[#03224a] text-white px-8 py-6 rounded-2xl text-center shadow-2xl w-[90%] md:w-[40%]">
            <h1 className="text-[30px] font-semibold">
              🏏Match {currentMatch + 1}
            </h1>

            <div className="flex justify-around">
              <div className="flex items-center">
                <img
                  src={cardTheme?.logo}
                  alt={finalTeam}
                  className="w-25 h-25 object-cover
                  drop-shadow-lg
                  rounded-[50%]
                  transition-transform duration-300
                  hover:scale-130"
                />
              </div>
              <div>
                <h2 className="text-xl text-gray-300 mt-2">{finalTeam}</h2>
                <span className="flex justify-center">
                  <svg
                    width="120"
                    height="80"
                    viewBox="0 0 120 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 15 L70 15 L50 65 L10 65 Z"
                      fill="#FF3B30"
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
                      }}
                    />
                    <path
                      d="M75 15 L110 15 L110 65 L55 65 Z"
                      fill="#007AFF"
                      style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
                      }}
                    />
                    <text
                      x="60"
                      y="52"
                      textAnchor="middle"
                      fontFamily="Impact, sans-serif"
                      fontSize="34"
                      fill="white"
                      fontStyle="italic"
                      style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.3)" }}
                    >
                      VS
                    </text>
                  </svg>
                </span>
                <h2 className="text-xl text-gray-300 mt-2">
                  {randomTeam.name}
                </h2>
                <p className="mt-3 text-gray-300">{matchStadium}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={randomTeam?.logo}
                  alt={randomTeam?.name}
                  className="w-25 h-25 object-cover
                  drop-shadow-lg
                  rounded-[50%]
                  transition-transform duration-300
                  hover:scale-130"
                />
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowMatchIntro(false)}
                className="mt-5 px-6 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg font-semibold hover:cursor-pointer"
              >
                Start Match
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-1">
        <div
          className="text-white w-[25%] md:w-[10%] text-center py-4 font-semibold bg-blue-800  hover:cursor-pointer border border-gray-300 rounded-xl select-none flex justify-center items-center"
          onClick={() => setOpenMatchStatus(true)}
        >
          Match Status
        </div>
      </div>
    </main>
  );
};

export default PlayingXIBuilder;

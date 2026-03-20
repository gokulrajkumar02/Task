"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SelectLeague, useLeague } from "@/Context/LeagueContext";
import { getInternationalTeamData, getIplTeamData } from "@/DB/Player";
import { Player } from "../TeamSelection/page";
import { teamTheme } from "@/Utils/teamTheme";
import checkPlayingXI from "@/Helper/checkPlayingXI";
import randomPlayerList from "@/Helper/randomPlayerList";

export type Team = {
  id: number;
  name: string;
  countryCode: string;
  logo: string;
  players: Player[];
};

const PlayerCard = () => {
  const { selectLeague, selectTeam, playingXI, setPlayingXI, setRandomTeam } =
    useLeague() as SelectLeague;

  const [availablePlayers, setAvailablePlayers] = useState<Team | null>();
  const [dragPlayer, setDragPlayer] = useState<Player | null>(null);
  const [storedTeamName, setStoredTeamName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedTeam = localStorage.getItem("SelectTeam");
    if (storedTeam) {
      setStoredTeamName(storedTeam);
    }
    setPlayingXI(new Array(11).fill(null));
  }, []);
  const finalTeam = selectTeam || storedTeamName;
  const cardTheme = teamTheme[finalTeam];

  const LEAGUE = "International";

  useEffect(() => {
    const league =
      selectLeague || localStorage.getItem("SelectLeague") || LEAGUE;

    const teamName = selectTeam || finalTeam;

    const team =
      league === LEAGUE
        ? getInternationalTeamData(teamName)
        : getIplTeamData(teamName);

    if (team) {
      setAvailablePlayers(team);
      localStorage.setItem("AvailableTeamId",JSON.stringify(team.id))
      // console.log(team);
    }
  }, [selectTeam, selectLeague, storedTeamName]);

  const handleDragStart = (player: Player) => {
    setDragPlayer(player);
  };

  const handleDrop = (index: number) => {
    const checkPlayer =
      !dragPlayer || playingXI.find((player) => player?.id === dragPlayer.id);
    if (checkPlayer) return;

    const updatedXI = [...playingXI];
    updatedXI[index] = dragPlayer;
    setPlayingXI(updatedXI);
  };

  const removePlayer = (index: number) => {
    const player = playingXI[index];

    if (!player) return;

    const updatedXI = [...playingXI];
    updatedXI[index] = null;
    setPlayingXI(updatedXI);
  };

  const handleSubmit = () => {
    const checkPlayers = checkPlayingXI(playingXI);
    if (!checkPlayers) return;

    const randomTeam: Team | null = randomPlayerList(availablePlayers!.id);
    setRandomTeam(randomTeam);
    console.log(randomTeam);

    localStorage.setItem("playingXI", JSON.stringify(playingXI));
    router.push("/PlayingXIBuilder");
  };


  const handleAutoFill = () => {
    const autoFillPlayers = availablePlayers?.players;
    const wk = autoFillPlayers?.filter((p) => p.role === "WK");
  const ar = autoFillPlayers?.filter((p) => p.role === "AR");
  const bat = autoFillPlayers?.filter((p) => p.role === "Batter");
  const bowl = autoFillPlayers?.filter((p) => p.role === "Bowler");

  const autoFillPlayingXI = [
    ...bat!.slice(0, 3),
    ...wk!.slice(0, 1),
    ...ar!.slice(0, 4),
    ...bowl!.slice(0, 3),
  ];
  setPlayingXI([...autoFillPlayingXI])

  }

  return (
    <div className="w-full min-h-full flex flex-col items-center bg-gray-300 p-2 md:p-6">
      <h1 className="text-3xl text-gray-800 mb-6">
        {selectTeam || finalTeam} Team Players
      </h1>
      <div className="w-full h-full flex gap-5">
        <div className="w-[60%] h-150 md:w-[30%] xl:w-[20%] bg-white overflow-auto shadow-lg hover:cursor-pointer scrollbar-hide">
          {availablePlayers?.players?.map((player, index) => (
            <div
              key={player.id}
              draggable
              onDragStart={() => handleDragStart(player)}
              className={`flex items-center gap-4
              px-2 py-3 border-b ${cardTheme?.border} 
              hover:bg-gray-200 transition`}
            >
              <div
                className="flex items-center justify-center w-[10%]
              rounded-full bg-gray-200
              text-sm font-bold text-gray-700"
              >
                {index + 1}
              </div>

              <div className="flex flex-col">
                <div className="font-semibold text-gray-800">{player.name}</div>

                <div className="text-sm text-blue-600">{player.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[70%] h-150 md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-2 overflow-auto bg-white/10 rounded-md">
          {playingXI.map((player, index) => (
            <div
              key={index}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              className={`select-none flex items-center justify-center flex-col ${cardTheme?.card} relative shadow-md border border-gray-200
              hover:shadow-xl hover:-translate-y-1 duration-200 rounded-md hover:cursor-pointer`}
            >
              {player ? (
                <>
                  <h1 className="text-md font-semibold text-gray-800 text-center">
                    {player.name}
                  </h1>

                  <span className="text-sm text-blue-600 font-medium">
                    {player.role}
                  </span>
                </>
              ) : (
                <span className="text-gray-600 text-sm font-medium p-6  ">
                  Slot {index + 1}
                </span>
              )}
              {player && (
                <span
                  className="absolute top-2 right-2 group-hover:opacity-100 transition hover:cursor-pointer hidden md:flex"
                  onClick={() => removePlayer(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:scale-110 transition"
                    viewBox="0 0 640 640"
                  >
                    <path
                      fill="rgb(211, 13, 13)"
                      d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C221.6 240.4 221.6 255.6 231 264.9L286 319.9L231 374.9C221.6 384.3 221.6 399.5 231 408.8C240.4 418.1 255.6 418.2 264.9 408.8L319.9 353.8L374.9 408.8C384.3 418.2 399.5 418.2 408.8 408.8C418.1 399.4 418.2 384.2 408.8 374.9L353.8 319.9L408.8 264.9C418.2 255.5 418.2 240.3 408.8 231C399.4 221.7 384.2 221.6 374.9 231L319.9 286L264.9 231C255.5 221.6 240.3 221.6 231 231z"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center gap-5">
        <button
        onClick={handleAutoFill}
          className={`bg-gray-700 text-white md:w-[10%] px-4 py-2 rounded-md hover:cursor-pointer`}
        >
          Auto Fill
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className={`${cardTheme?.primary} text-white md:w-[10%] px-4 py-2 rounded-md hover:cursor-pointer`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;

"use client";

import { internationalCricketData, iplCricketData } from "@/DB/Player";

const LEAGUE = "International";

const generateRandomNum = (id: number, selectLeague: string | null) => {
  let start = 0,
    end = 0;

  selectLeague === LEAGUE
    ? ((start = 1), (end = 8))
    : ((start = 9), (end = 18));

  let randomNum;

  do {
    randomNum = Math.floor(Math.random() * (end - start + 1)) + start;
  } while (randomNum === id);

  return randomNum;
};

const randomPlayerList = (id: number) => {
  const selectLeague =
    typeof window !== "undefined" ? localStorage.getItem("SelectLeague") : null;
  const randomTeamNumber = generateRandomNum(id, selectLeague);
  const team =
    selectLeague === LEAGUE ? internationalCricketData : iplCricketData;
  const randomTeam = team.find((team) => team.id === randomTeamNumber) || null;

  const players = randomTeam?.players;
  const wk = players?.filter((p) => p.role === "WK");
  const ar = players?.filter((p) => p.role === "AR");
  const bat = players?.filter((p) => p.role === "Batter");
  const bowl = players?.filter((p) => p.role === "Bowler");

  const generatedPlayingXI = [
    ...bat!.slice(0, 3),
    ...wk!.slice(0, 1),
    ...ar!.slice(0, 4),
    ...bowl!.slice(0, 3),
  ];
  if (!randomTeam) return null;
  return { ...randomTeam, players: generatedPlayingXI };
};

export default randomPlayerList;

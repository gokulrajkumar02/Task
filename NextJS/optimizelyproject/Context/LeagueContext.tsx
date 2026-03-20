"use client";
import { Team } from "@/app/PlayerCard/page";
import { Player } from "@/app/TeamSelection/page";
import { createContext, useContext, useState, useMemo} from "react";

export type SelectLeague = {
  selectTeam: string;
  selectLeague: string;
  playingXI: (Player | null)[];
  randomTeam : Team | null

  setSelectLeague: React.Dispatch<React.SetStateAction<string>>;
  setSelectTeam: React.Dispatch<React.SetStateAction<string>>;
  setPlayingXI: React.Dispatch<React.SetStateAction<(Player | null)[]>>;
  setRandomTeam : React.Dispatch<React.SetStateAction<Team | null>>;
};

const LeagueContext = createContext<SelectLeague | null>(null);

export function LeagueProvider({ children }: { children: React.ReactNode }) {
  
  const [selectLeague, setSelectLeague] = useState("");
  const [selectTeam, setSelectTeam] = useState("");
  const [playingXI, setPlayingXI] = useState<(Player | null)[]>(
    new Array(11).fill(null),
  );

  const [randomTeam,setRandomTeam] = useState<Team | null>(null)

  const value = useMemo(() => {
    return { selectLeague, setSelectLeague, selectTeam, setSelectTeam,playingXI ,setPlayingXI, randomTeam, setRandomTeam};
  }, [selectLeague, selectTeam,playingXI,randomTeam]);


  return (
    <LeagueContext.Provider value={value}>{children}</LeagueContext.Provider>
  );
}

export const useLeague = () => useContext(LeagueContext);

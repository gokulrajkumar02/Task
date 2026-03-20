"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLeague } from "@/Context/LeagueContext";
import type {SelectLeague} from "@/Context/LeagueContext"
import { internationalCricketData, iplCricketData} from "@/DB/Player"

export type Player = {
  id:number,
  name: string;
  role: string;
  overall: number;
  batting: number;
  bowling: number;
};

type Team = {
  name: string;
  countryCode: string;
  logo: string;
  players: Player[];
};

export enum LEAGUE {
  INTERNATIONAL = "International",
  IPL = "Ipl"
}

const TeamSelection = () => {
  const [teamData, setTeamData] = useState<Team[]>([]);
  const router = useRouter();
  const { selectLeague, selectTeam, setSelectTeam } = useLeague() as SelectLeague;

  useEffect(() => {
    if(selectTeam) localStorage.setItem("SelectTeam",selectTeam)
  },[selectTeam])


  useEffect(() => {
    const storedLeague = localStorage.getItem("SelectLeague")
    const league = selectLeague || storedLeague;

    if (league === LEAGUE.INTERNATIONAL) {
      setTeamData(internationalCricketData);
    } else {
      setTeamData(iplCricketData);
    }
  }, [selectLeague]);

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center
      bg-[url('/Cricket_image.jpg')] bg-cover bg-center overflow-scroll scrollbar-hide"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 w-[85%] py-10">
        {teamData.map((items, index) => (
          <div
            onClick={() => {
              setSelectTeam(items.name);
              router.push("/PlayerCard");
            }}
            key={index}
            className="group flex flex-col items-center justify-center
              bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 text-center
              border border-white/30
              transition-all duration-300
              hover:shadow-2xl hover:-translate-y-2 hover:scale-105
              hover:border-yellow-400
              cursor-pointer"
          >
            <img
              src={items.logo}
              alt={items.name}
              className="w-20 h-20 object-cover mb-4
              drop-shadow-lg
              rounded-lg
              transition-transform duration-300
              hover:scale-130"
            />

            <h2 className="font-bold text-gray-800 text-lg">{items.name}</h2>

            <div
              className="mt-2 px-3 py-1 text-xs font-bold
              bg-linear-to-r from-blue-500 to-indigo-600
              text-white rounded-full shadow"
            >
              {items.countryCode}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSelection;

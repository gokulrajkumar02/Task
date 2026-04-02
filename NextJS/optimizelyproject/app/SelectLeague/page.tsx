"use client";

import { useRouter } from "next/navigation";
import { useLeague } from "@/Context/LeagueContext";
import type { SelectLeague } from "@/Context/LeagueContext";
import { useEffect } from "react";

const leagues = [
  {
    name: "International",
    value: "International",
  },
  {
    name: "Indian Premier League",
    value: "IPL",
  },
];

const SelectLeague = () => {
  const { selectLeague,setSelectLeague } = useLeague() as SelectLeague;
  const router = useRouter();
  
  useEffect(() => {
    if(selectLeague)localStorage.setItem("SelectLeague",selectLeague)
  },[selectLeague])

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center gap-y-6
      bg-cover bg-center"
      style={{background :"url('/Cricket_Ground.jpg')"}}
    >
      <h1 className="text-white text-4xl font-bold z-10">Select League</h1>

      {leagues.map((league, index) => (
        <button
          key={index}
          className="z-10 w-[40%] md:w-[25%] lg:w-[12%] py-2
          bg-blue-700 text-white font-semibold rounded-lg
          border-2 border-blue-700
          hover:bg-blue-600 hover:scale-110
          transition-all duration-200 cursor-pointer"
          onClick={() => {
            setSelectLeague(league.value);
            router.push("/SelectMode");
          }}
        >
          {league.name}
        </button>
      ))}
    </div>
  );
};

export default SelectLeague;

"use client";
import { useRouter } from "next/navigation";

const leagueMode = [
  { name: "Knockout Mode", logo: "🥊", value: "knockout" },
  { name: "Championship Mode", logo: "🏆", value: "championship" },
];

const SelectMode = () => {
  const router = useRouter();

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center gap-y-6
        bg-cover bg-center"
      style={{ backgroundImage: "url('/mode_image.jpg')" }}
    >
      <h1 className="text-white text-4xl font-bold z-10">Select Mode</h1>

      {leagueMode.map((league, index) => (
        <button
          key={index}
          className="z-10 w-[40%] md:w-[25%] lg:w-[12%] py-2
          bg-blue-500 text-white font-semibold rounded-lg
          border-2 border-blue-700
          hover:bg-blue-600 hover:scale-110
          transition-all duration-200 cursor-pointer"
          onClick={() => {
            localStorage.setItem("gameMode", league.value);
            router.push("/TeamSelection");
          }}
        >
          {league.logo}
          {league.name}
        </button>
      ))}
    </div>
  );
};

export default SelectMode;

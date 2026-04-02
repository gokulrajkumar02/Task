"use client";
import { useRouter } from "next/navigation";

const buttons = [
  {
    text: "▶ Start Game",
    color: "bg-green-700 border-green-700 hover:bg-green-600",
    route: "/SelectLeague",
  },
  {
    text: "✖ Exit Game",
    color: "bg-red-700 border-red-700 hover:bg-red-600",
    route: "/Home",
  },
];

const CricFight = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-5  bg-cover bg-center"
    style={{ backgroundImage: "url('/Cricket_Ground.jpg')" }}
    >
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={`w-[35%] md:w-[25%] lg:w-[12%] py-2 
          text-white font-bold rounded-lg border-2
          hover:scale-130 hover:cursor-pointer
          transition-all duration-200
          ${btn.color}`}
          onClick={() => router.push(btn.route)}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
};

export default CricFight;

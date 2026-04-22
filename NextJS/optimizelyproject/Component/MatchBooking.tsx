"use client";

import { useRouter } from "next/navigation";
import { Match } from "@/DB/District";

type MatchBookingProps = {
  matches: Match[];
  status: string;
};

export const to12Hour = (time24h: string) => {
  const [h, m] = time24h.split(":").map(Number);
  const modifier = h >= 12 ? "PM" : "AM";
  const hours = h % 12 || 12;
  return `${hours}:${String(m).padStart(2, "0")} ${modifier}`;
};

const MatchBooking = ({ matches, status }: MatchBookingProps) => {
  const router = useRouter();

  const handleSelectMatch = (matchNo:number) => {
    router.push("/ipl/iplbooking")
    localStorage.setItem("SelectMatchNo",matchNo.toString())
  }

  return (
    <div className="w-full flex flex-col gap-5">
      {matches.map((match) => {
        const d = new Date(match.date);

        const normalTime = to12Hour(match.time);

        return (
          <div key={match.matchNumber} className=" w-full flex gap-2">
            <div className="flex flex-col h-20 items-center justify-center  bg-white border border-gray-200 rounded-xl px-3 py-2 w-14">
              <span className="text-xs text-gray-400 font-medium">
                {d.toLocaleDateString("en-US", { weekday: "short" })}{" "}
              </span>
              <span className="text-2xl font-bold text-gray-900 leading-tight">
                {d.getDate()}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {d.toLocaleDateString("en-US", { month: "short" })}
              </span>
            </div>

            <div className="box-border justify-between px-2 w-full flex flex-col lg:flex-row items-center gap-1 bg-white rounded-xl">
              <div className="flex justify-between items-center p-2 w-full lg:w-[40%]  bg-[#eaeaeb] m-2 rounded-lg">
                <img
                  src={match.team1.logo}
                  alt={match.team1.name}
                  className="h-10 w-10 object-cover"
                />
                <h1 className="font-semibold text-[15px] w-[60%] text-center">
                  {match.team1.name} vs {match.team2.name}
                </h1>
                <img
                  src={match.team2.logo}
                  alt={match.team2.name}
                  className="h-10 w-10 object-cover"
                />
              </div>

              <div className="flex flex-col w-full lg:w-[40%] text-center">
                <h1>
                  {match.venue.stadium},{match.venue.city}
                </h1>
                <span className="text-[14px] text-gray-500">
                  {normalTime} onwards
                </span>
              </div>
              <div className="w-full lg:w-[50%] mb-2 flex justify-end">
                {status == "OnSale" && (
                  <div className="w-full p-2 flex justify-between">
                    <div className="flex gap-1 items-center">
                      <img
                        src={
                          "https://b.zmtcdn.com/data/edition_assets/17393507702162.svg"
                        }
                        alt="sale is live"
                        className="h-2 w-2"
                      />
                      <h1>Sale is live</h1>
                    </div>
                    <button
                      className="text-white  bg-black px-5 md:px-10 py-3 rounded-xl hover:cursor-pointer"
                      onClick={() => handleSelectMatch(match.matchNumber)}
                    >
                      Book Now
                    </button>
                  </div>
                )}
                {status == "Upcoming" && (
                  <button
                    className="text-gray-600 bg-[#fafafa] py-3 border w-45 rounded-xl"
                    disabled
                  >
                    Coming Soon
                  </button>
                )}
                {status == "StartSoon" && (
                  <button
                    className="bg-[#fafafa] py-3 border w-45 rounded-xl font-semibold"
                    disabled
                  >
                    <h1>Notify me</h1>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchBooking;

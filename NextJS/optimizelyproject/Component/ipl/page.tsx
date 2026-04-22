"use client";

import { useState } from "react";
import IplTicket from "@/Component/IplTicket";
import { iplMatches, iplTeamsData } from "@/DB/District";
import { useRouter } from "next/navigation";

const IplPage = () => {
  const [openTeams, setOpenTeams] = useState(false);
  const router = useRouter();

  const handleClickTeam = (team: string) => {
    localStorage.setItem("SelectTeamDistrict", team);
    router.push("/ipl/eachteam");
  };

  return (
    <div className="w-full flex-col flex items-center">
      <div className="w-full lg:w-[70%] flex justify-between">
        <div className="flex gap-3 items-center p-2">
          <img
            src="https://media.insider.in/image/upload/c_crop,g_custom/v1774624723/vzmv78wkzjg2yb5ftyk4.png"
            alt="Ipl_logo"
            className="h-13 w-13 rounded-xl"
          />
          <h1 className="text-[16px] font-semibold">TATA IPL 2026</h1>
        </div>

        <div className="items-center hidden lg:flex">
          {iplTeamsData.map((items) => {
            return (
              <div
                key={items.id}
                className="p-2 flex border-r border-gray-300 gap-3 items-center hover:cursor-pointer"
                onClick={() => handleClickTeam(items.fullform)}
              >
                <img
                  src={items.image}
                  alt={items.label}
                  className="h-13 w-13 object-cover rounded-xl"
                />
                <h1 className="font-semibold">{items.label}</h1>
              </div>
            );
          })}
        </div>
        <div className="flex gap-5 lg:hidden items-center p-2">
          <h1
            className="hover:cursor-pointer text-[16px] font-semibold"
            onClick={() => setOpenTeams(!openTeams)}
          >
            Teams
          </h1>
          {openTeams ? (
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.72559 0.953719L1.11308 5.57902C0.962049 5.73056 0.962303 5.97591 1.11386 6.1272C1.26541 6.27837 1.51089 6.27798 1.66205 6.12642L6.00002 1.77643L10.338 6.12658C10.4891 6.27812 10.7345 6.27851 10.886 6.12736C10.962 6.05152 11 5.95216 11 5.85281C11 5.75371 10.9623 5.65474 10.8868 5.57904L6.27443 0.953719C6.20181 0.880731 6.10299 0.839774 6.00002 0.839774C5.89705 0.839774 5.79834 0.880848 5.72559 0.953719Z"
                fill="white"
                stroke="#131316"
              ></path>
            </svg>
          ) : (
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.27441 6.04628L10.8869 1.42098C11.038 1.26944 11.0377 1.02409 10.8861 0.872798C10.7346 0.721627 10.4891 0.722017 10.338 0.873579L5.99998 5.22357L1.66203 0.873421C1.51086 0.721879 1.26553 0.721488 1.11397 0.87264C1.03799 0.94848 1 1.04784 1 1.14719C1 1.24629 1.03773 1.34526 1.11318 1.42096L5.72557 6.04628C5.79819 6.11927 5.89701 6.16023 5.99998 6.16023C6.10295 6.16023 6.20166 6.11915 6.27441 6.04628Z"
                fill="white"
                stroke="#131316"
              ></path>
            </svg>
          )}
        </div>
      </div>
      {openTeams &&
        iplTeamsData.map((teams) => {
          return (
            <div className="w-full flex flex-col ml-5 my-2" key={teams.id}>
              <div
                className="flex items-center gap-5 hover:cursor-pointer hover:bg-[#eae5ff]"
                onClick={() => handleClickTeam(teams.fullform)}
              >
                <img
                  src={teams.image}
                  alt={teams.label}
                  className="w-12 h-12 object-cover rounded-xl"
                />
                <h1 className="text-[12px] font-semibold">
                  {teams.label} - {teams.fullform}
                </h1>
              </div>
            </div>
          );
        })}
      <div className="hidden md:block w-full">
        <img
          src="https://media.insider.in/image/upload/c_crop,g_custom/v1774013590/j6f2eofwpfzqwdgehsyj.png"
          alt="ipl_logo"
          className="w-full object-cover"
        />
      </div>
      <div className="block md:hidden w-full">
        <img
          src="https://media.insider.in/image/upload/c_crop,g_custom/v1774624723/vzmv78wkzjg2yb5ftyk4.png"
          alt="ipl_logo"
          className="w-full object-cover"
        />
      </div>

      <div className="w-full flex flex-col lg:justify-between lg:flex-row lg:w-[70%] p-5">
        <div className="flex gap-5 justify-center w-full">
          <img
            src="https://media.insider.in/image/upload/c_crop,g_custom/v1774013615/xdfz9gcgg5ffikddsoir.png"
            alt="ipl_logo"
            className="h-full w-30 md:w-25 object-cover rounded-xl"
          />
          <div className="font-semibold w-[50%] md:w-[70%] ">
            <h1 className="text-[25px] md:text-[30px]">TATA IPL 2026</h1>
            <span className="ttext-[20px] md:text-[30px]">Ultimate Cricket Battle Begins!</span>
          </div>
        </div>

        <div className="flex gap-5 items-center justify-center w-full">
          <div className="h-full hidden lg:border-r border-gray-300" />
          <div className="mt-5 w-full space-y-2 flex flex-col items-center">
            <hr className="w-full lg:hidden border border-gray-200 " />
            <h1 className="text-[18px] font-semibold">
              Exclusive ticketing partner for
            </h1>
            <div className="flex gap-5 mt-5 overflow-x-auto scrollbar-hide">
              {iplTeamsData.map((teams) => {
                return (
                  <div
                    key={teams.id}
                    className="pr-5 border-r border-gray-300 shrink-0 scrollbar-hide"
                  >
                    <img
                      src={teams.image}
                      alt={teams.label}
                      className="h-10 w-10 rounded-xl object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#eaeaeb] flex flex-col items-center">
        <IplTicket iplMatch={iplMatches} />
      </div>
    </div>
  );
};

export default IplPage;

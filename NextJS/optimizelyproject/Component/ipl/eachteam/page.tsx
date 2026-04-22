"use client";

import { useEffect, useState } from "react";
import IplTicket from "@/Component/IplTicket";
import { iplMatches, Match } from "@/DB/District";
import { categorizeMatches } from "@/Helper/categorizeMatches";

export const teamLogoMap: Record<string, string> = {
  "Royal Challengers Bengaluru":
    "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
  "Mumbai Indians":
    "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
  "Chennai Super Kings":
    "https://media.insider.in/image/upload/c_crop,g_custom/v1774001513/jqdcqpofxxqrhu2yujik.png",
  "Kolkata Knight Riders":
    "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
  "Rajasthan Royals":
    "https://media.insider.in/image/upload/c_crop,g_custom/v1774606760/vd5yreucasdmgfe02nst.png",
  "Sunrisers Hyderabad":
    "https://media.insider.in/image/upload/c_crop,g_custom/v1774443563/q3lw7wbuefoj3tjzlemu.png",
  "Gujarat Titans":
    "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
  "Punjab Kings":
    "https://media.insider.in/image/upload/c_crop,g_custom/v1774079908/zjhpc87yvrrywpc10gsf.png",
  "Delhi Capitals":
    "https://media.insider.in/image/upload/c_crop,g_custom/v1774078019/lkkpf0s4zdwbfru1lqcl.png",
  "Lucknow Super Giants":
    "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
};

const EachTeamPage = () => {
  const [selectTeam, setSelectTeam] = useState<string | null>("");
 const [teamData, setTeamData] = useState<Match[]>([]);
  useEffect(() => {
    const selectIplTeam = localStorage.getItem("SelectTeamDistrict");
    setSelectTeam(selectIplTeam);
    const now = new Date();

    if (!selectIplTeam) return;

    const selectTeamData = iplMatches.filter((match) => {
      const [hours, minutes] = match.time.split(":").map(Number);
      const matchDateTime = new Date(match.date + "T00:00:00");
      matchDateTime.setHours(hours, minutes, 0, 0);

      const isTeam =
        match.team1.name.toLowerCase() === selectIplTeam.toLowerCase();
      //   match.team2.name.toLowerCase() === selectIplTeam.toLowerCase();

      const isUpcoming = matchDateTime > now;

      return isTeam && isUpcoming;
    });

    setTeamData(selectTeamData);
    console.log(selectTeamData);
  }, []);

  const { ticketOnSale, upcoming, saleStartsSoon } = categorizeMatches(teamData);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-3 items-center p-2 w-[90%] md:w-[70%]">
        <div className="h-13 w-20 md:w-13 ">

        {selectTeam && (
          <img
          src={teamLogoMap[selectTeam]}
          alt="Ipl_logo"
          className="h-full w-full rounded-xl object-cover"
          />
        )}
        </div>
        <h1 className="text-[16px] font-semibold">{selectTeam}</h1>
        <span className="border-r-2 border-black p-1 h-[50%]" />
        <span className="font-semibold">TATA IPL 2026</span>
      </div>

      <div className="w-full">
        <div className="h-50 md:h-87.5">

        {selectTeam && (
          <img
          src={teamLogoMap[selectTeam]}
          alt={selectTeam}
          className="h-full w-full object-cover"
          />
        )}
        </div>
      </div>
      <div className="w-full lg:w-[70%] py-7 flex justify-between">
        <div className="flex gap-x-5 justify-center md:justify-start">
          <img
            src={teamData?.[0]?.team1.logo}
            alt={selectTeam || "Chennai Super Kings"}
            className="h-20 w-20"
          />
          <div className="space-y-2">
            <div className="flex">
              <h1 className="text-[20px] lg:text-[30px] font-extrabold">{selectTeam}</h1>
              <span className="border-r-2 border-black p-1" />
              <span className="font-extrabold ml-3 text-[20px] lg:text-[30px]">
                TATA IPL 2026
              </span>
            </div>
            <h2 className="font-semibold">{teamData?.[0]?.team1.short}</h2>
          </div>
        </div>
      </div>

     <div className="w-full bg-[#eaeaeb] flex flex-col items-center">
        <IplTicket iplMatch={teamData} />
      </div>
    </div>
  );
};

export default EachTeamPage;

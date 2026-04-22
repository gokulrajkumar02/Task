"use client";

import { Match } from "@/DB/District";
import MatchBooking from "./MatchBooking";
import { categorizeMatches } from "@/Helper/categorizeMatches";

type IplTicketProps = {
  iplMatch: Match[];
};

const IplTicket = ({ iplMatch }: IplTicketProps) => {
  const { ticketOnSale, upcoming, saleStartsSoon } =
    categorizeMatches(iplMatch);
  return (
    <div className="w-[95%] md:w-[70%]">
      <div className="w-full flex flex-col gap-4 my-10">
        <h1 className="text-[20px] font-semibold">Ticket On sale</h1>
        {ticketOnSale.length > 0 ? (
          <MatchBooking matches={ticketOnSale} status={"OnSale"} />
        ) : (
          <span className="w-full text-center text-[20px] font-semibold">
            No Matches on this week
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-4 my-10">
        <h1 className="text-[20px] font-semibold">Upcoming</h1>
        {upcoming.length > 0 ? (
          <MatchBooking matches={upcoming} status={"Upcoming"} />
        ) : (
          <span className="w-full text-center text-[20px] font-semibold">
            No Upcoming Matches
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-4 my-10">
        <h1 className="text-[20px] font-semibold">Sale starts soon</h1>
        {saleStartsSoon.length >0  ? (
          <MatchBooking matches={saleStartsSoon} status={"StartSoon"} />
        ) : (
          <span className="w-full text-center text-[20px] font-semibold">
            No Start Soon Matches
          </span>
        )}
      </div>
    </div>
  );
};

export default IplTicket;

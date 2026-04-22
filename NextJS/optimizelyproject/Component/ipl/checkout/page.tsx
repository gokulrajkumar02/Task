"use client";

import { useEffect, useState } from "react";
import { to12Hour } from "@/Component/MatchBooking";
import { iplMatches, Match, ticketAreas } from "@/DB/District";
import { useRouter } from "next/navigation";
import { useDistrict } from "@/Context/DistrictContext";

const CheckOutPage = () => {
  const [selectMatch, setSelectMatch] = useState<Match>();
  
  const [showTicket, setShowTicket] = useState<Record<number, boolean>>({});
  const { iplTicketCount, setIplTicketCount } = useDistrict();

  const router = useRouter();

  useEffect(() => {
    const selectMatchId = localStorage.getItem("SelectMatchNo");

    const matchData = iplMatches.find(
      (match) => match.matchNumber === Number(selectMatchId),
    );

    setIplTicketCount([])
    setSelectMatch(matchData);
  }, []);

  if (!selectMatch) return;
  const date = new Date(selectMatch?.date);
  const normalTiming = to12Hour(selectMatch.time);

  const incrementSeatCount = (id: number) => {
    setIplTicketCount((prev) => {
      const current = prev[id] || 0;
      if (current >= 10) return prev;
      return { ...prev, [id]: current + 1 };
    });
    setShowTicket((prev) => ({ ...prev, [id]: true }));
  };

  const decrementSeatCount = (id: number) => {
    setIplTicketCount((prev) => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      if (current === 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: current - 1 };
    });

    setShowTicket((prev) => ({
      ...prev,
      [id]: (iplTicketCount[id] || 0) > 1,
    }));
  };

  const isAnyTicketSelected = Object.values(showTicket).some((val) => val);

  const totalTickets = Object.values(iplTicketCount).reduce(
    (sum, count) => sum + count,
    0,
  );

  const totalPrice = ticketAreas.reduce((sum, ticket) => {
    return sum + (iplTicketCount[ticket.id] || 0) * ticket.price;
  }, 0);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="mx-2 md:w-[50%] mt-10 flex flex-col items-center">
        <div className="w-full space-y-2 flex-col flex">
          <div className="text-[20px] md:text-[30px] font-semibold text-center">
            <h1>TATA IPL 2026: Match {selectMatch?.matchNumber}</h1>
            <h1>
              {selectMatch?.team1?.name} vs {selectMatch?.team2?.name}
            </h1>
          </div>
          <div className="flex gap-2 justify-center text-[15px] text-center">
            <div className="text-[#7249fd] font-semibold">
              {date.toLocaleDateString("en-US", { weekday: "short" })}, &nbsp;
              {date.getDate()}
              {date.toLocaleDateString("en-US", { month: "short" })}, &nbsp;
              {normalTiming}
            </div>
            <span className="border-r-2 border-black" />
            <div className="text-gray-500">
              {selectMatch?.venue?.stadium}, {selectMatch?.venue?.city}
            </div>
          </div>
          <div className="mt-5 flex items-center w-full gap-2">
            <span className="text-[18px] font-semibold w-fit">
              CHOOSE TICKETS
            </span>
            <span className="border-t border-gray-200 flex-1" />
          </div>

          <div className="w-full p-2 mb-20 select-none">
            {ticketAreas.map((items) => {
              return (
                <div
                  key={items.id}
                  className="p-4 border border-gray-300 rounded-xl mt-5 space-y-3"
                >
                  <h1 className="text-[#242e44] font-semibold">{items.name}</h1>
                  <div className="flex justify-between items-center">
                    <span>₹{items.price}</span>
                    {showTicket[items.id] ? (
                      <div className="gap-3 flex justify-between items-center border border-gray-200 py-2 px-5 md:px-8 bg-black rounded-lg">
                        <svg
                          onClick={() => decrementSeatCount(items.id)}
                          className="hover:cursor-pointer w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"
                          />
                        </svg>
                        <span className="text-white text-[18px] select-none">
                          {iplTicketCount[items.id]}
                        </span>
                        <svg
                          onClick={() => incrementSeatCount(items.id)}
                          className="hover:cursor-pointer w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                        >
                          <path
                            fill="rgb(255,255,255)"
                            d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
                          />
                        </svg>
                      </div>
                    ) : (
                      <button
                        className="border border-gray-200 py-2 px-8 bg-[#f3f3f5] hover:cursor-pointer rounded-lg"
                        onClick={() => {
                          setShowTicket((prevShow) => ({
                            ...prevShow,
                            [items.id]: true,
                          }));
                          setIplTicketCount((prev) => ({
                            ...prev,
                            [items.id]: 1,
                          }));
                        }}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {isAnyTicketSelected && (
        <div className="select-none border-t bg-white w-full h-20 fixed bottom-0 shadow-xl p-3 flex justify-center">
          <div className="w-full md:w-[40%] flex justify-between">
            <div className="flex flex-col">
              <span className="font-semibold">₹{totalPrice}</span>
              <span className="text-gray-500 text-[14px]">
                {totalTickets} Ticket
              </span>
            </div>
            <button
              className="hover:cursor-pointer bg-[#0c172f] text-white px-7 py-3 rounded-xl font-semibold"
              onClick={() => router.push("/ipl/paymentdetailspage")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;

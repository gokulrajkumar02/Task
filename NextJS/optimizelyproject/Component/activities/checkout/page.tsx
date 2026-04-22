"use client";

import { useEffect, useState } from "react";
import { activityTickets } from "@/DB/District";
import { useDistrict } from "@/Context/DistrictContext";
import { useRouter } from "next/navigation";

const ActivityCheckOutPage = () => {
  const [showActivityTicket, setShowActivityTicket] = useState<
    Record<string, boolean>
  >({});
  const {
    activityTicketCount,
    setActivityTicketCount,
    setActivityDiscount,
    setIsActivityDiscountApplied,
  } = useDistrict();
  const router = useRouter();

  useEffect(() => {
    setActivityTicketCount({});
    setActivityDiscount(0);
    setIsActivityDiscountApplied(false);
  }, []);

  const incrementSeatCount = (id: string) => {
    setActivityTicketCount((prev) => {
      const current = prev[id] || 0;
      if (current >= 10) return prev;
      return { ...prev, [id]: current + 1 };
    });
    setShowActivityTicket((prev) => ({ ...prev, [id]: true }));
  };

  const decrementSeatCount = (id: string) => {
    setActivityTicketCount((prev) => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      if (current === 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: current - 1 };
    });

    setShowActivityTicket((prev) => ({
      ...prev,
      [id]: (activityTicketCount[id] || 0) > 1,
    }));
  };

  const isAnyTicketSelected = Object.values(showActivityTicket).some(
    (val) => val,
  );

  const totalTickets = Object.values(activityTicketCount).reduce(
    (sum, count) => sum + count,
    0,
  );

  const totalPrice = activityTickets.reduce((sum, ticket) => {
    return sum + (activityTicketCount[ticket.id] || 0) * ticket.discountedPrice;
  }, 0);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] md:w-[60%] lg:w-[40%] mt-7">
        <div className="flex items-center justify-between gap-5">
          <span className="text-[15px] md:text-[18px] font-semibold w-fit">
            CHOOSE TICKET
          </span>
          <span className="border-t border-gray-200 flex-1" />
        </div>

        <div className="flex flex-col gap-y-5 mt-5 mb-25">
          {activityTickets.map((ticket) => {
            return (
              <div
                key={ticket.id}
                className="border border-gray-300 p-3 rounded-xl flex flex-col gap-3"
              >
                <h1 className="font-semibold">
                  {ticket.title} | {ticket.duration}
                </h1>
                <div className="w-full flex justify-between items-center">
                  <div className="flex gap-x-1">
                    <span className="line-through text-gray-600">
                      ₹{ticket.originalPrice}
                    </span>
                    <span>₹{ticket.discountedPrice}</span>
                  </div>

                  <div>
                    {showActivityTicket[ticket.id] ? (
                      <div className="gap-3 flex justify-between items-center border border-gray-200 py-2 px-5 md:px-8 bg-black rounded-lg">
                        <svg
                          onClick={() => decrementSeatCount(ticket.id)}
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
                          {activityTicketCount[ticket.id]}
                        </span>
                        <svg
                          onClick={() => incrementSeatCount(ticket.id)}
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
                          setShowActivityTicket((prevShow) => ({
                            ...prevShow,
                            [ticket.id]: true,
                          }));
                          setActivityTicketCount((prev) => ({
                            ...prev,
                            [ticket.id]: 1,
                          }));
                        }}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
                <div className="border-t border-gray-300 w-full" />
                <div className="flex flex-col ml-5 text-[13px] text-gray-600">
                  {ticket?.features.map((discounts) => {
                    return <li key={discounts.id}>{discounts.text}</li>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isAnyTicketSelected && (
        <div className="select-none border-t bg-white w-full h-20 fixed bottom-0 shadow-xl p-3 flex justify-center">
          <div className="w-full md:w-[40%] flex justify-between items-center">
            <div className="flex flex-col">
              <span className="font-semibold">₹{totalPrice}</span>
              <span className="text-gray-500 text-[14px]">
                {totalTickets} Ticket
              </span>
            </div>
            <button
              className="hover:cursor-pointer bg-[#0c172f] text-white px-7 py-3 rounded-xl font-semibold"
              onClick={() => router.push("/activities/paymentdetailspage")}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityCheckOutPage;

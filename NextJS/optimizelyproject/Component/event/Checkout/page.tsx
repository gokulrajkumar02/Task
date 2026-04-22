"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { eventEachCategoryData } from "@/DB/District";
import { useDistrict } from "@/Context/DistrictContext";

const ChooseTicket = () => {

  const [selectEventDetails, setSelectEventDetails] = useState<any>(null);
  const [showTicketCount, setShowTicketCount] = useState<boolean>(false);

  const {ticketCount,setTicketCount,setIsDiscountApplied} = useDistrict()

  const router = useRouter();

  useEffect(() => {
    const selectEventId = localStorage.getItem("SelectItemId");

    const event = eventEachCategoryData
      .flatMap((cat) => cat.events)
      .find((event) => event.id === selectEventId);

    setSelectEventDetails(event || null);
    setTicketCount(1)
    setIsDiscountApplied(false)
    
  }, []);

  return (
    <div className="w-full mt-8 flex justify-center bg-[#f9f9fa] h-full">
      <div className="w-[80%] md:w-[40%]">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[20px] font-semibold">
            {selectEventDetails?.title}
          </h1>
          <div className="flex gap-2 text-gray-600">
            <span>{selectEventDetails?.date}</span>
            <span className="border-r-2 border-gray-400" />
            <span>{selectEventDetails?.venue}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-2">
          <span className="text-[18px] font-semibold w-fit">
            CHOOSE TICKETS
          </span>
          <span className="border-t border-gray-200 flex-1" />
        </div>
        <div className="w-full p-4 border border-gray-300 rounded-xl mt-5 space-y-3">
          <h1 className="text-[#242e44] font-semibold">Early Bird</h1>
          <div className="flex justify-between items-center">
            <span>₹{selectEventDetails?.price}</span>
            {showTicketCount ? (
              <div className="gap-3 flex justify-between items-center border border-gray-200 py-2 px-5 md:px-8 bg-black rounded-lg">
                <svg
                  onClick={() => {
                    if (ticketCount == 1) {
                      setShowTicketCount(false);
                      return;
                    }
                    setTicketCount(ticketCount - 1);
                  }}
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
                  {ticketCount}
                </span>
                <svg
                  onClick={() => {
                    if (ticketCount >= 10) return;
                    setTicketCount(ticketCount + 1);
                  }}
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
                onClick={() => setShowTicketCount(true)}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
      {showTicketCount && (
        <div className="select-none border-t bg-white w-full h-20 fixed bottom-0 shadow-xl p-3 flex justify-center">
          <div className="w-full md:w-[40%] flex justify-between">
            <div className="flex flex-col">
              <span className="font-semibold">₹{ticketCount * selectEventDetails.price}</span>
              <span className="text-gray-500 text-[14px]">{ticketCount} Ticket</span>
            </div>
           <button className="hover:cursor-pointer bg-[#0c172f] text-white px-7 py-3 rounded-xl font-semibold"
           onClick={() => router.push("/event/PaymentDetailspage")}
           >Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseTicket;

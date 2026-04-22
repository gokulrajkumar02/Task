"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  eventTicketOffer,
  iplMatches,
  Match,
  ticketAreas,
} from "@/DB/District";
import { useDistrict } from "@/Context/DistrictContext";
import { Button } from "@/components/ui/button";

const LOCK_TIME = 7 * 60;
export const getTimerKey = () => {
  if (typeof window === "undefined") return "timer_default";

  const eventId = localStorage.getItem("SelectMatchNo") || "default";
  return `timer_${eventId}`;
};

export const getInitialTimer = () => {
  const key = getTimerKey();
  if (typeof window === "undefined") return 0;
  const expiry = localStorage.getItem(key);
  if (expiry) {
    const remaining = Math.floor((parseInt(expiry) - Date.now()) / 1000);
    if (remaining > 0) return remaining;
  }

  const expiryTime = Date.now() + LOCK_TIME * 1000;
  localStorage.setItem(key, String(expiryTime));
  return LOCK_TIME;
};

const IplPaymentPage = () => {
  const [timer, setTimer] = useState<number | null>(null);
  const [selectMatch, setSelectMatch] = useState<Match>();
  const { iplTicketCount, iplDiscount, isIplDiscountApplied } = useDistrict();

  const router = useRouter();

  useEffect(() => {
    const selectMatchId = localStorage.getItem("SelectMatchNo");
    const matchData = iplMatches.find(
      (match) => match.matchNumber === Number(selectMatchId),
    );

    setSelectMatch(matchData);
  }, []);

  useEffect(() => {
    const prevEventId = localStorage.getItem("prevSelectMatchNo");
    const currentEventId = localStorage.getItem("SelectMatchNo");

    if (prevEventId && prevEventId !== currentEventId) {
      localStorage.removeItem(`timer_${prevEventId}`);
    }
    localStorage.setItem("prevSelectMatchNo", currentEventId || "default");

    setTimer(getInitialTimer());
  }, []);
  useEffect(() => {
    if (timer === null) return;

    if (timer === 0) {
      localStorage.removeItem(getTimerKey());
      alert("Session expired. Seats released!");
      router.push("/ipl/checkout");
      localStorage.removeItem("");
      return;
    }

    const interval = setInterval(
      () => setTimer((prev) => (prev ?? 1) - 1),
      1000,
    );
    return () => clearInterval(interval);
  }, [timer]);

  const handleRemoveCart = () => {
    localStorage.removeItem(getTimerKey());
    router.back();
  };

  const minutes = timer !== null ? Math.floor(timer / 60) : 7;
  const seconds = timer !== null ? timer % 60 : 0;
  const formattedTime = `${minutes}:${String(seconds).padStart(2, "0")}`;

  const totalTickets = Object.values(iplTicketCount).reduce(
    (sum, count) => sum + count,
    0,
  );

  const totalPrice = ticketAreas.reduce((sum, ticket) => {
    return sum + (iplTicketCount[ticket.id] || 0) * ticket.price;
  }, 0);

  const offer = eventTicketOffer.find(
    (offers) => offers.discount === iplDiscount,
  );

  const feesCharges = totalPrice * 0.1;
  const grandTotal = totalPrice + feesCharges;

  const discountAmount = grandTotal * iplDiscount;
  const grandTotalAfterDis = grandTotal - discountAmount;

  return (
    <div className="w-full flex flex-col items-center overflow-auto scrollbar-hide">
      <div className="w-full sticky top-0 bg-[#efe3ff] text-center py-2 text-[14px] font-light">
        Complete your booking in
        <span
          className={clsx(
            "font-bold",
            timer !== null && timer <= 120 ? "text-red-600" : "text-green-800",
          )}
        >
          &nbsp;{formattedTime} MINS
        </span>
      </div>
      <div className="mx-5 md:w-[50%] my-10 border border-gray-200 shadow-xl rounded-xl">
        <div className="p-4 flex justify-between border-b border-gray-200">
          <div>
            <h1 className="text-[12px] text-gray-400">Step 1</h1>
            <span className="font-semibold">Order Summary</span>
          </div>
          <div className="w-fit h-fit border border-green-400 bg-green-100 rounded-xl p-3" />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[15px] font-semibold w-fit">TICKETS</span>
            <span className="border-t border-gray-200 flex-1" />
          </div>
          <div className="border border-gray-200 rounded-xl mt-5 p-4 flex flex-col">
            <h1 className="text-[18px] font-semibold">
              {selectMatch?.team1.name} vs {selectMatch?.team2.name}
            </h1>
            <span className="text-[14px] font-light">
              {selectMatch?.venue.stadium}, {selectMatch?.venue.city}
            </span>
            <div className="w-full flex justify-between mt-2">
              <h1>Regular Ticket</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 640 640"
                    >
                      <path
                        fill="rgb(128, 128, 128)"
                        d="M262.2 48C248.9 48 236.9 56.3 232.2 68.8L216 112L120 112C106.7 112 96 122.7 96 136C96 149.3 106.7 160 120 160L520 160C533.3 160 544 149.3 544 136C544 122.7 533.3 112 520 112L424 112L407.8 68.8C403.1 56.3 391.2 48 377.8 48L262.2 48zM128 208L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 208L464 208L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 208L128 208zM288 280C288 266.7 277.3 256 264 256C250.7 256 240 266.7 240 280L240 456C240 469.3 250.7 480 264 480C277.3 480 288 469.3 288 456L288 280zM400 280C400 266.7 389.3 256 376 256C362.7 256 352 266.7 352 280L352 456C352 469.3 362.7 480 376 480C389.3 480 400 469.3 400 456L400 280z"
                      />
                    </svg>
                  </button>
                </DialogTrigger>

                <DialogContent style={{ maxWidth: "500px" }}>
                  <DialogHeader>
                    <DialogTitle asChild>
                      <div className="p-2">
                        <div className="border-b border-gray-200 pb-4 space-y-4 ">
                          <h1 className="text-[20px] font-semibold">
                            Remove Cart items
                          </h1>
                          <span className="text-[14px] text-gray-600">
                            Are you sure you want to remove Regular Ticket from
                            your cart?
                          </span>
                        </div>

                        <div className="mt-4 flex gap-x-2">
                          <button
                            className="hover:cursor-pointer w-[50%] text-center py-4 bg-[#0c172f] text-white rounded-xl"
                            onClick={() => handleRemoveCart()}
                          >
                            Yes
                          </button>
                          <DialogClose asChild>
                            <button className="hover:cursor-pointer w-[50%] text-center py-4 bg-[#f3f3f5] rounded-xl">
                              No
                            </button>
                          </DialogClose>
                        </div>
                      </div>
                    </DialogTitle>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex justify-between items-center text-[15px] mt-2">
              <h1>
                {totalTickets}
                <span className="ml-1 text-gray-500">Tickets</span>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="ml-2 hover:cursor-pointer"
                      variant={"outline"}
                    >
                      View Tickets
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle asChild>
                      <div className="flex flex-col gap-2">
                        <h1 className="border-b border-gray-300 pb-2">
                          All Tickets
                        </h1>
                        {Object.entries(iplTicketCount).map(([id, count]) => {
                          const ticket = ticketAreas.find(
                            (area) => area.id === Number(id),
                          );
                          if (!ticket) return;
                          return (
                            <div
                              key={id}
                              className="flex flex-col items-center justify-between py-3 border-b border-gray-100"
                            >
                              <div className="flex w-full justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-[14px] font-semibold bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                                    {ticket.code}
                                  </span>
                                  <div className="space-y-2">
                                    <p>{ticket.name}</p>
                                    <p className="text-[14px] text-gray-600">
                                      ₹{ticket.price} * {count}
                                    </p>
                                  </div>
                                </div>

                                <span>₹{ticket.price * count}</span>
                              </div>
                            </div>
                          );
                        })}
                        <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-2">
                          <span className="text-[14px] text-gray-600">
                            Total ({totalTickets} Tickets)
                          </span>
                          <span className="text-[18px] font-bold">
                            ₹{totalPrice}
                          </span>
                        </div>
                      </div>
                    </DialogTitle>
                  </DialogContent>
                </Dialog>
              </h1>
              <span>₹{totalPrice}</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 mt-5">
            <span className="text-[15px] font-semibold w-fit">OFFERS</span>
            <span className="border-t border-gray-200 flex-1" />
          </div>
          {isIplDiscountApplied && (
            <div
              key={offer?.id}
              className="bg-green-200 shadow-lg mt-5 rounded-xl p-3 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-3xl bg-green-700 flex items-center justify-center shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EAF3DE"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-semibold text-[16px]">{offer?.label}</h2>
                  <p className="text-gray-500 text-[13px]">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <h1 className="text-[13px] text-center bg-green-700 px-2 py-1 rounded-xl text-white">
                Offer Applied
              </h1>
            </div>
          )}
          <div
            className="border border-gray-200 rounded-xl mt-5 p-4 flex justify-between items-center hover:cursor-pointer"
            onClick={() => router.push("/ipl/offerdetails")}
          >
            <h1 className="text-[15px]">View all event offers</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 640 640"
            >
              <path
                fill="rgb(0, 0, 0)"
                d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between gap-2 mt-5">
            <span className="text-[15px] font-semibold w-fit">
              PAYMENT DETAILS
            </span>
            <span className="border-t border-gray-200 flex-1" />
          </div>

          <div className="flex justify-between mt-2 font-semibold text-[#242e44]">
            <h1>Order Amount</h1>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between mt-2 text-[13px] text-[#242e44] border-b border-gray-200 pb-3">
            <h1>Fees and charges</h1>
            <span>₹{feesCharges.toFixed(2)}</span>
          </div>

          <div className="mt-2 font-semibold text-[#242e44] border-b border-gray-200 pb-3">
            <div className="flex justify-between ">
              <h1>Grand Total</h1>
              <span className={clsx(isIplDiscountApplied && "line-through")}>
                ₹{grandTotal}
              </span>
            </div>
            {isIplDiscountApplied && (
              <div className="font-light text-[14px] text-gray-500 flex justify-between">
                <h1>Discount amount - {iplDiscount * 100}%</h1>
                <span>₹{discountAmount.toFixed(2)}</span>
              </div>
            )}
          </div>
          {isIplDiscountApplied && (
            <div className="flex justify-between mt-2 font-semibold text-[#242e44] border-b border-gray-200 pb-3">
              <h1>Grand Total after discount</h1>
              <span>₹{grandTotalAfterDis.toFixed(2)}</span>
            </div>
          )}
          <button
            className="mt-3 bg-[#0c172f] w-full py-2 text-white font-semibold rounded-lg hover:cursor-pointer"
            onClick={() => router.push("/ipl/paymentpage")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default IplPaymentPage;

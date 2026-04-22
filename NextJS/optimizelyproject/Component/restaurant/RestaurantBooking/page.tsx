"use client";

import { useState } from "react";
import { useDistrict } from "@/Context/DistrictContext";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getDates } from "@/Helper/getDates";
import clsx from "clsx";

const timeSlots = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
];

const RestaurantBooking = () => {
  const { selectedDate, guests, setGuests, setSelectedDate } = useDistrict();
  const [timeCategory, setTimeCategory] = useState("lunch");
  const [bookingTime, setBookingTime] = useState<string | null>();
  const router = useRouter();

  const dates = getDates(10);

  return (
    <div className="mt-5 mb-20 w-full flex justify-center overflow-x-auto">
      <div className="mt-5 w-[80%] flex justify-center">
        <div className="w-[90%] md:w-[75%]">
          <div className="flex items-center gap-2 mb-6">
            <ChevronLeft
              size={20}
              onClick={() => router.push("/Restaurant")}
              className="hover:cursor-pointer"
            />
            <h1 className="text-xl font-semibold">Book a table</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-500">Date</label>

              <div className="relative w-full">

              <select
                value={selectedDate?.value}
                onChange={(e) => {
                  const selected = dates.find(
                    (d) => d.value.toString() === e.target.value,
                  );
                  setSelectedDate(selected);
                }}
                className="border appearance-none w-full rounded-lg px-4 py-3 text-sm bg-white outline-none"
                >
                {dates.map((date) => (
                  <option key={date.id} value={date.value.toString()}>
                    {date.label}
                  </option>
                ))}
              </select>

              <svg
                  className="bg-white absolute right-2 top-[50%] transform -translate-y-1/2 pointer-events-none"
                  width="40"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-500">No. of guests</label>
              <div className="relative w-full">

              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="border appearance-none w-full rounded-lg px-4 py-3 text-sm bg-white outline-none"
                >
                {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
              <svg
                  className="bg-white absolute right-2 top-[50%] transform -translate-y-1/2 pointer-events-none"
                  width="40"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                </div>
            </div>
          </div>

          <div className="">
            <h2 className="font-semibold mb-3">Select time slot</h2>

            <div className="flex gap-3 mb-4">
              <button
                className={clsx(
                  "px-4 py-1.5 border rounded-full text-sm text-gray-500",

                  timeCategory == "lunch"
                    ? "border-black bg-gray-100"
                    : "text-gray-700 hover:bg-gray-100",
                )}
                onClick={() => setTimeCategory("lunch")}
              >
                Lunch
              </button>
              <button
                className={clsx(
                  "px-4 py-1.5 border rounded-full text-sm text-gray-500",

                  timeCategory == "dinner"
                    ? "border-black bg-gray-100"
                    : "text-gray-700 hover:bg-gray-100",
                )}
                onClick={() => setTimeCategory("dinner")}
              >
                Dinner
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((time, i) => (
                <button
                  key={i}
                  onClick={() => setBookingTime(time)}
                  className={clsx(
                    "border rounded-xl py-2 text-sm font-medium transition",

                    time === bookingTime
                      ? "border-black bg-gray-100"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="p-2 w-[80%] fixed bottom-0 flex justify-center sm:justify-end bg-white">
          <Button
            disabled={!bookingTime}
            className="p-7 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Proceed to book
          </Button>
        </div>
      </div>
    </div>
  );
};
export default RestaurantBooking;

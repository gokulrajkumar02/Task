"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useDistrict } from "@/Context/DistrictContext";
import { getDates } from "@/Helper/getDates";

const RestaurantTableBooking = () => {
  const dates = getDates(10);
  const { setSelectedDate, setGuests, selectedDate, guests } = useDistrict();
  const router = useRouter();

  return (
    <div className="w-full lg:w-[35%]">
      <div className="w-full border border-gray-300 p-5 lg:p-3 rounded-xl lg:sticky lg:top-20">
        <h1 className="text-[20px] font-semibold">Book a table</h1>
        <div className="flex mt-5 gap-3 flex-col w-full">
          <div className="flex gap-3 w-full">
            <div className="flex flex-col w-full">
              <label className="text-gray-400 w-full">Date</label>
              <div className="relative">
                <select
                  value={selectedDate?.value?.toString()}
                  onChange={(e) => {
                    const selected = dates.find(
                      (d) => d.value.toString() === e.target.value,
                    );
                    if (selected) setSelectedDate(selected);
                  }}
                  className="w-full appearance-none p-3 border rounded-md bg-white text-[15px]"
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
            <div className="flex flex-col w-full">
              <label className="text-gray-400">Guests</label>
              <div className="relative flex items-center">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full appearance-none p-3 border rounded-md bg-white text-sm outline-none focus:ring-2 focus:ring-gray-200"
                >
                  {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
                <svg
                  className="bg-white absolute right-3 top-[50%] transform -translate-y-1/2 pointer-events-none"
                  width="20"
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

          <div className="w-full">
            <Button
              className="w-full py-5"
              onClick={() => router.push("/restaurant/RestaurantBooking")}
            >
              Book a table
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTableBooking;

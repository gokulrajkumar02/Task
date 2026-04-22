"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDistrict } from "@/Context/DistrictContext";
import { to12Hour } from "@/Component/MatchBooking";
import { useRouter } from "next/navigation";

export type Dates = {
  date: number;
  day: string;
  month: string;
  showMonth: boolean;
};
type DateList = Dates[];

const timeSlots = ["09:00", "11:00", "13:00", "15:00", "18:00", "21:00"];

const BookingTimeSelector = () => {
  // const [selected, setSelected] = useState(0);
  const {
    activitySelectedDate,
    setActivitySelectedDate,
    setActivitySelectedTime,
  } = useDistrict();
  const [selectedDate, setSelectedDates] = useState<DateList>([]);

  const router = useRouter()


  useEffect(() => {
    if (selectedDate.length > 0) {
      localStorage.setItem(
        "SelectedDate",
        JSON.stringify(selectedDate[activitySelectedDate]),
      );
    }
  }, [activitySelectedDate, selectedDate]);

  useEffect(() => {
    let lastMonth = "";
    const tempDates: DateList = [];

    for (let i = 0; i < 25; i++) {
      const d = new Date();
      d.setDate(new Date().getDate() + i);

      const currentMonth = d.toLocaleDateString("en-US", { month: "short" });

      const showMonth = currentMonth != lastMonth;

      tempDates.push({
        date: d.getDate(),
        day: d.toLocaleDateString("en-US", { weekday: "short" }),
        month: currentMonth.toUpperCase(),
        showMonth,
      });

      lastMonth = currentMonth;
    }

    setSelectedDates(tempDates);

    const today = tempDates[0];
    localStorage.setItem("SelectedDate", JSON.stringify(today));
  }, []);

  const groupedDates: { month: string; dates: Dates[] }[] = [];

  selectedDate.forEach((item) => {
    const lastGroup = groupedDates[groupedDates.length - 1];

    if (!lastGroup || lastGroup.month !== item.month) {
      groupedDates.push({
        month: item.month,
        dates: [item],
      });
    } else {
      lastGroup.dates.push(item);
    }
  });

  const convertToDate = (date: Dates): Date => {
    const currentYear = new Date().getFullYear();
    return new Date(`${date.month} ${date.date}, ${currentYear}`);
  };

  const getAvailableSlots = (dateObj: Dates): string[] => {
    const now = new Date();
    const selectedDateTime = convertToDate(dateObj);
    const isToday = selectedDateTime.toDateString() === now.toDateString();

    return timeSlots.filter((time) => {
      const [h, m] = time.split(":").map(Number);
      const slot = new Date(selectedDateTime);
      slot.setHours(h, m, 0, 0);

      return isToday ? slot > now : true;
    });
  };

  const currentSelectedDate = selectedDate[activitySelectedDate];
  const availableSlots = currentSelectedDate
    ? getAvailableSlots(currentSelectedDate)
    : [];

  console.log("Slots", availableSlots);


  const handleBooking = (timing : string) => {
    setActivitySelectedTime(timing)
    router.push("/activities/checkout") 
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] md:w-[60%] lg:w-[40%] mt-7">
        <div className="flex items-center justify-between gap-5">
          <span className="text-[15px] md:text-[20px] font-semibold w-fit">
            SELECT DATE & TIME
          </span>
          <span className="border-t border-gray-200 flex-1" />
        </div>

        <div className="flex gap-3 overflow-x-auto mt-5 z-50 bg-white">
          {/* <div className="min-w-15 h-15 flex justify-center items-center sticky left-0 bg-white z-10">
            <span className="-rotate-90 text-sm text-blue-500 font-medium">
              {items.month}
            </span>
          </div> */}
          <div className="flex bg-white space-x-2 pb-2">
            {groupedDates.map((group, _) => {
              return (
                <div key={_} className="flex items-center space-x-2">
                  <div className="sticky left-0 min-w-12 flex justify-center items-center h-16 bg-[#f3f3f5]">
                    <span className="-rotate-90 text-sm text-black font-semibold">
                      {group.month}
                    </span>
                  </div>

                  {group.dates.map((item, index) => {
                    const absoluteIndex = selectedDate.indexOf(item);
                    const isActive = activitySelectedDate === absoluteIndex;
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setActivitySelectedDate(absoluteIndex);
                          localStorage.setItem(
                            "SelectedDate",
                            JSON.stringify(selectedDate[absoluteIndex]),
                          );
                        }}
                        className={clsx(
                          "flex flex-col items-center justify-center px-3 py-2 rounded-xl w-12.5 cursor-pointer border",
                          isActive ? "bg-black text-white" : "text-gray-700",
                        )}
                      >
                        <span className="text-lg font-semibold">
                          {item.date}
                        </span>
                        <span className="text-xs">{item.day}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full mt-5 flex flex-col gap-2">
          {availableSlots.map((items) => {
            const convertTiming = to12Hour(items);
            return (
              <div
                key={items}
                className="p-3 flex justify-between items-center border border-gray-200 rounded-xl"
              >
                <div className="space-x-1">
                  <span>{selectedDate[activitySelectedDate].month}</span>
                  <span className="border-r-2 border-gray-600 pr-2">
                    {selectedDate[activitySelectedDate].date}
                  </span>

                  <span>{convertTiming}</span>
                </div>
                <div>
                  <button
                    className="py-2 px-4 rounded-lg bg-[#f3f3f5] text-[12px] font-semibold hover:cursor-pointer"
                    onClick={() => handleBooking(convertTiming)}
                  >
                    BOOK
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingTimeSelector;

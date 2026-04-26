"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { Dates } from "../TheatrePage/page";
import { useDistrict } from "@/Context/DistrictContext";
import { getSeatLayoutData } from "@/ContentfulFetch/getSeatLayoutData";

type SeatEntry = {
  id: string;
  type: "seat" | "gap";
};

type Row = {
  rowId: string;
  seats: SeatEntry[];
};

type Section = {
  section: string;
  price: number;
  prefix: string;
  rows: Row[];
};

type TheatreData = {
  id: number;
  title: string;
  location: string;
  distance: string;
  cancellable: boolean;
  image_url: string;
  shows: { time: string; screen: string }[];
  seatLayout: Section[];
};

const SeatLayout = () => {
  const [selectDate, setSelectedDate] = useState<Dates | null>(null);
  const [theatreData, setTheatreData] = useState<TheatreData | null>(null);

  const {
    theatreDetails,
    setTheatreDeatils,
    bookedSeat,
    setBookedSeat,
    tempBooking,
  } = useDistrict();

  const router = useRouter();

  useEffect(() => {
    const date = localStorage.getItem("SelectedDate");
    if (date) setSelectedDate(JSON.parse(date));

    const theatreId = theatreDetails[3];
    if (!theatreId) return;

    const fetchData = async () => {

      const data = await getSeatLayoutData(Number(theatreId));
      setTheatreData(data);
    };

    fetchData();
  }, [theatreDetails[3]]);

  const handleBookSeat = (id: string) => {
    setBookedSeat((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="w-[90%] md:w-[80%]">
        <div className="shrink-0 w-full min-h-[15%] shadow-md flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 gap-4 sm:gap-5 z-50 bg-white">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base">{selectDate?.day}</span>
            <span className="text-xs sm:text-sm">
              {selectDate?.date} {selectDate?.month}
            </span>
          </div>

          <div className="flex gap-3 w-full sm:w-[90%] overflow-x-auto sm:overflow-visible scrollbar-hide">
            {theatreData?.shows.map((show) => (
              <button
                onClick={() => {
                  setBookedSeat([]);
                  setTheatreDeatils([
                    show.time,
                    theatreDetails[1],
                    show.screen,
                    theatreDetails[3],
                  ]);
                }}
                key={show.time}
                className={`p-2 shrink-0 sm:w-auto border border-gray-500 rounded-lg text-xs sm:text-sm flex flex-col items-center justify-center ${show.time === theatreDetails[0] && "bg-gray-200"
                  }`}
              >
                <span>{show.time}</span>
                <span className="text-gray-500 font-medium text-[10px] sm:text-xs">
                  {show.screen}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full h-[65%] flex justify-center my-5">
          <div className="w-[90%] md:w-[75%] h-full overflow-x-auto p-5 border flex flex-col items-start mb-5">
            {theatreData?.seatLayout.map((items) => (
              <div key={items.section}>
                <div className="w-225">
                  <div className="flex justify-center my-6">
                    <h1 className="text-[18px]">
                      {items.section.toUpperCase()} - ₹{items.price}
                    </h1>
                  </div>
                  <div className="w-full p-2 flex flex-col gap-5">
                    {items.rows.map((rows) => (
                      <div
                        key={rows.rowId}
                        className="w-full flex justify-between"
                      >
                        <div className="w-[10%]">
                          <h1 className="text-[20px]">{rows.rowId}</h1>
                        </div>
                        <div className="flex w-[90%] gap-4">
                          {rows.seats.map((seat) => {
                            if (seat.type === "gap") {
                              return <div key={seat.id} className="w-8 h-8" />;
                            }
                            return (
                              <div
                                onClick={() => {
                                  if (!tempBooking.includes(seat.id))
                                    handleBookSeat(seat.id);
                                }}
                                key={seat.id}
                                className={clsx(
                                  "w-8 h-8 flex items-center justify-center border rounded-md text-xs transition",
                                  tempBooking.includes(seat.id) && "bg-gray-400",
                                  bookedSeat.includes(seat.id) &&
                                    !tempBooking.includes(seat.id)
                                    ? "bg-blue-500 text-white border-blue-500 hover:cursor-pointer"
                                    : "border-black cursor-pointer hover:bg-gray-300 hover:text-black",
                                )}
                              >
                                {!tempBooking.includes(seat.id)
                                  ? seat.id.replace(rows.rowId, "")
                                  : "X"}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center w-full my-10">
              <img
                src={"/theatreScreenImg.png"}
                alt="ScreenImage"
                className="h-15 w-[50%]"
              />
            </div>
          </div>
        </div>

        <div className="gap-2 px-2 mt-0 flex flex-col items-center">
          <h1 className="">Screen This Way</h1>
          <div className="flex gap-5 w-full md:w-[25%]">
            <div className="w-[50%] flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-400 rounded border border-blue-600" />
              <label className="text-[12px]">Booked Seat</label>
            </div>
            <div className="w-[50%] flex flex-col items-center">
              <div className="w-4 h-4 rounded border border-black" />
              <label className="text-[12px]">Booked Seat</label>
            </div>
            <div className="w-[50%] flex flex-col items-center">
              <div className="flex justify-center items-center w-4 h-4 rounded border border-gray-400 text-[10px]">
                X
              </div>
              <label className="text-[12px]">Temp Booking Seat</label>
            </div>
          </div>
        </div>
      </div>

      {bookedSeat.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border transform duration-800 ease-in-out">
          <div className="max-w-200 flex mx-auto items-center justify-between p-5">
            <div className="flex flex-col">
              <span className="text-md text-gray-500">Selected</span>
              <span className="font-semibold text-lg">
                {bookedSeat.length} Seats
              </span>
            </div>
            <button
              className="bg-black text-white px-10 py-2 rounded-lg font-medium hover:cursor-pointer"
              onClick={() => router.push("/movie/PaymentLayout")}
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatLayout;
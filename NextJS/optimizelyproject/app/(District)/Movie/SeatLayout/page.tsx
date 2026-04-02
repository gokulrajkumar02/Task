"use client";
import { useEffect, useState } from "react";
import { Dates } from "../page";
import { useDistrict } from "@/Context/DistrictContext";
import {
  Theatre,
  sangamCinemas,
  kamalaCinemas,
  deviCinemas,
  theatres,
} from "@/DB/District";
import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetTitle,
} from "@/components/ui/sheet";

type TheatreData = typeof sangamCinemas;

const theatreMap: Record<number, TheatreData> = {
  1: sangamCinemas,
  2: kamalaCinemas,
  3: deviCinemas,
};

const SeatLayout = () => {
  const [selectDate, setSelectedDate] = useState<Dates | null>(null);
  const { theatreDetails, setTheatreDeatils } = useDistrict();
  const [movieShowsDetails, setMovieShowsDetails] = useState<Theatre>();
  const [theatreId, setTheatreId] = useState<number | null>();

  const [bookedSeat, setBookedSeat] = useState<string[]>([]);

  useEffect(() => {
    const date = localStorage.getItem("SelectedDate");
    if (date) setSelectedDate(JSON.parse(date));

    const movieShows = theatres.find((items) => items.id === theatreDetails[3]);

    setMovieShowsDetails(movieShows);

    setTheatreId(theatreDetails[3]);
  }, []);

  const handleBookSeat = (id: string) => {
    setBookedSeat((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  return (
    <div className="flex-1 w-full h-full flex flex-col items-center overflow-hidden">
      <div className="w-[90%] md:w-[80%]  h-full overflow-y-scroll">
        {/* <div className="flex-shrink-0 w-full min-h-[15%] shadow-md flex flex-col sm:flex-row items-center p-5 gap-5 z-100 bg-white">
          <div className="flex flex-col">
            <span>{selectDate?.day}</span>
            <span>
              {selectDate?.date} {selectDate?.month}
            </span>
          </div>
          <div className="flex gap-5 w-[100%] sm:w-[90%]">
            {movieShowsDetails?.shows.map((show) => {
              return (
                <button
                  onClick={() => {
                    setTheatreDeatils([
                      show.time,
                      theatreDetails[1],
                      show.screen,
                      theatreDetails[3],
                    ]);
                  }}
                  key={show.time}
                  className={`hover:cursor-pointer w-[40%] md:w-[25%] lg:w-[10%]  py-2 border border-gray-500 rounded-lg text-sm flex flex-col items-center justify-center ${show.time === theatreDetails[0] && "bg-gray-200"}`}
                >
                  <span>{show.time}</span>
                  <span className="text-gray-500 font-medium text-xs">
                    {show.screen}
                  </span>
                </button>
              );
            })}
          </div>
        </div> */}
        <div className="flex-shrink-0 w-full min-h-[15%] shadow-md flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 gap-4 sm:gap-5 z-50 bg-white">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base">{selectDate?.day}</span>
            <span className="text-xs sm:text-sm">
              {selectDate?.date} {selectDate?.month}
            </span>
          </div>

          <div className="flex gap-3 w-full sm:w-[90%] overflow-x-auto sm:overflow-visible scrollbar-hide">
            {movieShowsDetails?.shows.map((show) => {
              return (
                <button
                  onClick={() => {
                    setTheatreDeatils([
                      show.time,
                      theatreDetails[1],
                      show.screen,
                      theatreDetails[3],
                    ]);
                  }}
                  key={show.time}
                  className={`flex-shrink-0 min-w-[90px] sm:w-auto py-2 border border-gray-500 rounded-lg text-xs sm:text-sm flex flex-col items-center justify-center ${
                    show.time === theatreDetails[0] && "bg-gray-200"
                  }`}
                >
                  <span>{show.time}</span>
                  <span className="text-gray-500 font-medium text-[10px] sm:text-xs">
                    {show.screen}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full h-[65%] flex justify-center my-5">
          <div className="w-[90%] md:w-[75%] h-full overflow-x-auto p-5 border flex flex-col items-start mb-5">
            {theatreId &&
              theatreMap[theatreId]?.map((items) => {
                return (
                  <div key={items.section}>
                    <div className="w-[900px]">
                      <div className="flex justify-center">
                        <h1 className="text-[20px]">
                          {items.section} - ₹{items.price}
                        </h1>
                      </div>
                      <div className="w-full p-2 flex flex-col gap-5">
                        {items.rows.map((rows) => {
                          return (
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
                                    return (
                                      <div key={seat.id} className="w-8 h-8" />
                                    );
                                  }

                                  return (
                                    <div
                                      onClick={() => handleBookSeat(seat.id)}
                                      key={seat.id}
                                      className={`w-8 h-8 flex items-center justify-center border rounded-md text-xs transition
                                      ${
                                        bookedSeat.includes(seat.id)
                                          ? "bg-blue-500 text-white border-blue-500 hover:cursor-pointer"
                                          : "border-black cursor-pointer hover:bg-gray-300 hover:text-black"
                                      }`}
                                    >
                                      {seat.id.replace(rows.rowId, "")}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="gap-2 px-2 mt-0 flex flex-col items-center">
          <h1 className="">Screen This Way</h1>
          <div className="flex gap-5 w-[100%] sm:w-[25%]">
            <div className="w-[50%] flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-400 rounded border border-blue-600" />
              <label className="text-[12px]">Booked Seat</label>
            </div>
            <div className="w-[50%] flex flex-col items-center">
              <div className="w-4 h-4 rounded border  border-black" />
              <label className="text-[12px]">Booked Seat</label>
            </div>
          </div>
        </div>
      </div>
      {/* <Sheet open={bookedSeat.length > 0}>
        <SheetContent side="bottom" className="rounded-t-2xl">

          <SheetTitle className="">
            Booking Summary
          </SheetTitle>

          wrgfrewfgre
                    <SheetOverlay />
        </SheetContent>
      </Sheet> */}

      {bookedSeat.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border transform duration-800 ease-in-out">
          <div className="max-w-[800px] flex mx-auto items-center justify-between p-5">
            <div className="flex flex-col">
              <span className="text-md text-gray-500">Selected</span>
              <span className="font-semibold text-lg">
                {bookedSeat.length} Seats
              </span>
            </div>

            <button className="bg-black text-white px-10 py-2 rounded-lg font-medium hover:cursor-pointer">
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatLayout;

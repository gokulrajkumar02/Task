"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useDistrict } from "@/Context/DistrictContext";
import { trendingSearches } from "@/DB/District";
import type { SearchEntity } from "@/DB/District";
import { theatres } from "@/DB/District";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { MapPin } from "lucide-react";

export type Dates = {
  date: number;
  day: string;
  month: string;
};

type Date = Dates[];

const TheatrePage = () => {
  const { isDialogOpen, setTheatreDeatils } = useDistrict();
  const [movieDeatils, setMovieDetails] = useState<SearchEntity>();

  const [selected, setSelected] = useState(0);
  const [selectedDate, setSelectedDates] = useState<Date>([]);
  const router = useRouter();

  useEffect(() => {
    const selectItemId = localStorage.getItem("SelectItemId");
    const getSelectItemDetails = trendingSearches.find(
      (item) => item.id === selectItemId,
    );
    setMovieDetails(getSelectItemDetails);
  }, [isDialogOpen]);

  useEffect(() => {
    if (selectedDate.length > 0) {
      localStorage.setItem(
        "SelectedDate",
        JSON.stringify(selectedDate[selected]),
      );
    }
  }, [selected, selectedDate]);

  useEffect(() => {
    let lastMonth = "";
    const tempDates: Date = [];

    for (let i = 0; i < 9; i++) {
      const d = new Date();
      d.setDate(new Date().getDate() + i);

      const currentMonth = d.toLocaleDateString("en-US", { month: "short" });

      tempDates.push({
        date: d.getDate(),
        day: d.toLocaleDateString("en-US", { weekday: "short" }),
        month: currentMonth.toUpperCase(),
      });

      lastMonth = currentMonth;
    }

    setSelectedDates(tempDates);

    const today = tempDates[0];
    localStorage.setItem("SelectedDate", JSON.stringify(today));
  }, []);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[90%] md:w-[70%] p-5">
        {movieDeatils && (
          <div className="flex gap-5 flex-col">
            <div className="flex gap-5">
              <img
                src={movieDeatils.image_url}
                alt={movieDeatils.display_title}
                className="w-30 h-auto rounded-md"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-[25px] font-semibold">
                  {movieDeatils.display_title}
                </h1>
                <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600">
                  <div className="flex gap-2 items-center p-0">
                    <span className="p-0">Movie</span>
                    <span>|</span>
                    <span className="border border-gray-300 px-2 py-0.5 rounded">
                      UA13+
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="hidden sm:block">|</span>
                    <span>Tamil</span>
                    <span>|</span>
                    <span>2 hr 21 min</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-4 p-2 border border-black sm:w-[50%] rounded-lg">
                      View Details
                    </button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 overflow-x-auto sticky top-20 z-50 bg-white">
                <div className="min-w-15 h-15 flex justify-center items-center sticky left-0 bg-white z-10">
                  <span className="-rotate-90 text-sm text-blue-500 font-medium whitespace-nowrap">
                    {selectedDate[selected]?.month}
                  </span>
                </div>
                <div className="flex bg-white">
                  {selectedDate.map((item, index) => {
                    const isActive = selected === index;

                    return (
                      <div
                        key={index}
                        onClick={() => setSelected(index)}
                        className={clsx(
                          "flex flex-col items-center justify-center px-3 py-2 rounded-xl w-12.5 cursor-pointer",
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
              </div>
              <div>
                <h2 className="text-[25px] font-semibold mb-2">Theatres</h2>
                <div className="flex flex-col gap-3">
                  {theatres.map((item) => (
                    <div key={item.id} className="flex gap-3 flex-col p-3">
                      <div className="flex gap-5">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full max-w-15 h-17.5 sm:h-auto rounded-md"
                        />
                        <div className="flex flex-col">
                          <div className="flex gap-2">
                            <h3 className="text-md font-semibold">
                              {item.name},{item.location}
                            </h3>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}`}
                              target="_blank"
                            >
                              <MapPin />
                            </a>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-sm text-gray-600">
                              {item.distance}
                            </span>
                            <span className="text-sm text-gray-600">
                              {item.cancellable
                                ? "| Cancellable"
                                : "| Non-Cancellable"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {item.shows.map((show) => {
                          return (
                            <button
                              onClick={() => {
                                router.push("/movie/SeatLayout");
                                setTheatreDeatils([
                                  show.time,
                                  item.name,
                                  show.screen,
                                  item.id,
                                ]);
                              }}
                              key={show.time}
                              className="hover:cursor-pointer w-full py-2 border border-gray-500 rounded-lg text-sm flex flex-col items-center justify-center"
                            >
                              <span>{show.time}</span>
                              <span className="text-gray-500 font-medium text-xs">
                                {show.screen}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheatrePage;

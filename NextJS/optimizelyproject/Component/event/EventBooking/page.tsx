"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { eventEachCategoryData } from "@/DB/District";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, CalendarClock } from "lucide-react";
import { getEventData } from "@/ContentfulFetch/getEventData";

const EventBooking = () => {
  const [selectEventDetails, setSelectEventDetails] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const selectEventId = localStorage.getItem("SelectItemId");

    const fetchData = async () => {
      const data = await getEventData();

      if (selectEventId) {
        const selectedItems = data.allEvents.find(
          (item) => item.id === selectEventId,
        );

        setSelectEventDetails(selectedItems);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const selectEventId = localStorage.getItem("SelectItemId");

  //   const event = eventEachCategoryData
  //     .flatMap((cat) => cat.events)
  //     .find((event) => event.id === selectEventId);

  //   setSelectEventDetails(event || null);

  //   console.log(event);
  // }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="mx-5 md:w-[80%] mt-10">
        <div className="space-y-2 flex-col flex justify-center items-center">
          <h1 className="text-[20px] md:text-[30px] font-semibold text-center">
            {selectEventDetails?.title}
          </h1>
          <div className="flex gap-2 text-[13px] md:text-[15px] justify-center text-center">
            <div className="text-[#7249fd] font-semibold">
              {selectEventDetails?.date}
            </div>
            <span className="border-r-2 border-black" />
            <div className="text-gray-500">{selectEventDetails?.venue}</div>
          </div>
        </div>

        <div className="relative w-full h-90 border flex justify-center overflow-hidden rounded-xl mt-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${selectEventDetails?.image_url})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              filter: "blur(10px)",
              transform: "scale(1.2)",
            }}
          />

          <div className="absolute inset-0 bg-black/10" />
          <img
            src={selectEventDetails?.image_url}
            alt={selectEventDetails?.title}
            className="z-10 h-full object-contain hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row lg:justify-between my-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-[20px] font-semibold">About</h1>
            <span className="text-[14px] text-gray-700 font-light">
              200+ Music Lovers. 100+ NOSTALGIC Songs. EPIC STORYTELLING & JAM
              EXPERIENCE!
            </span>
            <span className="text-[14px] text-gray-700 font-light">
              What to Expect
            </span>
            <Dialog>
              <DialogTrigger>
                <h1 className="text-start text-[13px] font-semibold">
                  Read more
                </h1>
              </DialogTrigger>

              <DialogContent className="w-[80%]" style={{ maxWidth: "550px" }}>
                <DialogHeader>
                  <DialogTitle className="w-full border-b border-gary-300 pb-4">
                    Are you absolutely sure?
                  </DialogTitle>
                  <DialogDescription>
                    <div className="flex flex-col gap-2 mt-5">
                      <span className="text-[12px] text-gray-700 font-light">
                        200+ Music Lovers. 100+ NOSTALGIC Songs. EPIC
                        STORYTELLING & JAM EXPERIENCE!
                      </span>
                      <span className="text-[12px] text-gray-700 font-light">
                        What to Expect
                      </span>
                      <span className="text-[12px] text-gray-700 font-light">
                        Join us for a evening full of singing, dancing, musical
                        games, open mics, and nonstop Bollywood nostalgia.
                      </span>
                      <span className="text-[12px] text-gray-700 font-light">
                        🎙️ Open Mic – Watch Crazy Talent in Bangalore First!
                      </span>
                      <span className="text-[12px] text-gray-700 font-light">
                        🎲 Musical Games – You Get the Mic, Answer Riddles and
                        sing those songs along!
                      </span>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="w-full mt-10 lg:mt-0 lg:w-[30%] border border-gray-300 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="border border-gray-200 shadow-lg p-2 rounded-lg shrink-0">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectEventDetails?.venue)}`}
                  target="_blank"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
              <span className="text-sm text-gray-700">
                {selectEventDetails?.venue}
              </span>
            </div>
            <div className="flex items-center gap-3 border-b border-gary-200 pb-4">
              <div className="border border-gray-200 shadow-lg p-2 rounded-lg shrink-0">
                <CalendarClock className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  Entry Close at 6:00 PM
                </span>
                <span className="text-[12px]">
                  View full schedule & timeline
                </span>
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <h1 className="font-semibold">
                ₹{selectEventDetails?.price}{" "}
                <span className="text-[12px] text-gray-400">onwards</span>
              </h1>
              <button
                className="px-8 py-3 bg-black text-white rounded-xl font-semibold hover:cursor-pointer"
                onClick={() => router.push("/event/Checkout")}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBooking;

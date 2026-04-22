"use client";

import { useEffect, useState } from "react";
import {
  activityEachCategoryData,
  EventType,
} from "@/DB/District";
import RestaurantPreview from "@/Component/RestaurantPreview";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarClock, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDistrict } from "@/Context/DistrictContext";

const ActivityBooking = () => {
  // const [selectActivityDetails, setSelectActivityDetails] =
  //   useState<EventType | null>(null);

     const {selectActivityDetails,setSelectActivityDetails} = useDistrict()  
    const router = useRouter()

  useEffect(() => {
    const selectActivityId = localStorage.getItem("SelectItemId");

    if (!selectActivityId) return;

    const selectItemsData = activityEachCategoryData
      .flatMap((cat) => cat.events)
      .find((activity) => activity.id === selectActivityId);
    if (!selectItemsData) return;
    setSelectActivityDetails(selectItemsData);
  }, []);

  return (
    <div className="mt-5 flex justify-center w-full px-3">
      <div className="w-full md:w-[80%]">

      <div className="space-y-2 flex-col flex justify-center items-center">
          <h1 className="text-[20px] md:text-[30px] font-semibold text-center">
            {selectActivityDetails?.title}
          </h1>
          <div className="flex gap-2 text-[15px] text-center">
            <div className="text-[#7249fd] font-semibold">
              {selectActivityDetails?.date}
            </div>
            <span className="border-r-2 border-black" />
            <div className="text-gray-500">{selectActivityDetails?.venue}</div>
          </div>
        </div>

        <div className="h-50 md:h-100 mt-5">
          <RestaurantPreview entity={selectActivityDetails} />
        </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-between my-10">
            <div className="flex flex-col gap-2 lg:w-[60%]">
              <h1 className="text-[20px] font-semibold">About</h1>
              <span className="text-[14px] text-gray-700 font-light">
                Feel an intense surge of adrenaline as you race through a thrilling 450-meter lap, packed with speed, sharp turns, and nonstop excitement.
              </span>
              <span className="text-[14px] text-gray-700 font-light">
               Driven by technological innovation, F9 Go Karting offers end-to-end consultancy for new go-karting setups. We also
              </span>
              <Dialog>
                <DialogTrigger>
                  <h1 className="text-start text-[13px] font-semibold">
                    Read more
                  </h1>
                </DialogTrigger>

                <DialogContent
                  className="w-[80%]"
                  style={{ maxWidth: "550px" }}
                >
                  <DialogHeader>
                    <DialogTitle className="w-full border-b border-gary-300 pb-4">
                      About Activity Boking Page
                    </DialogTitle>
                    <DialogDescription asChild>
                      <div className="flex flex-col gap-2">
                        <span className="text-[12px] text-gray-700 font-light">
                          Feel an intense surge of adrenaline as you race
                          through a thrilling 450-meter lap, packed with speed,
                          sharp turns, and nonstop excitement.
                        </span>
                        <span className="mt-4 text-[12px] text-gray-700 font-light">
                          Driven by technological innovation, F9 Go Karting
                          offers end-to-end consultancy for new go-karting
                          setups. We also provide comprehensive event management
                          services for organizing professional go-kart racing
                          events. Our products are highly valued in the
                          marketplace for their exceptional speed, performance,
                          and safety. Adhering strictly to international quality
                          standards, we ensure every product is crafted with
                          precision and reliability. From fuel-efficient engines
                          and robust designs to advanced protective shields, our
                          offerings are engineered to meet every modern market
                          requirement with excellence.
                        </span>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            <div className="w-full mt-10 lg:mt-0 lg:w-[40%] xl:w-[30%] border border-gray-300 rounded-xl p-3 md:p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="border border-gray-200 shadow-lg p-2 rounded-lg shrink-0">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectActivityDetails?.venue ?? "")}`}
                    target="_blank"
                    aria-label="Open location in Google Maps"
                  >
                    <MapPin className="w-5 h-5" />
                  </a>
                </div>
                <span className="text-sm text-gray-700">
                  {selectActivityDetails?.venue}
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
                  ₹{selectActivityDetails?.price}{" "}
                  <span className="text-[12px] text-gray-400">onwards</span>
                </h1>
                <button
                  className="px-8 py-3 bg-black text-white rounded-xl font-semibold hover:cursor-pointer"
                  onClick={() => router.push("/activities/bookingtimeselector")}
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

export default ActivityBooking;

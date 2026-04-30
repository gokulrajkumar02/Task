"use client";

import { useEffect, useState } from "react";
import MovieCarousel from "@/Component/EmblaCarousel/MovieCarousel";
import { useRouter } from "next/navigation";
import { getEventData } from "@/ContentfulFetch/getEventData";
import { EventType } from "@/DB/District";

const EventCategory = () => {
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const selectedTitle = localStorage.getItem("EventSelectCategory");

    const fetchData = async () => {
      const data = await getEventData();

      if (selectedTitle) {
        const selectedItems = data.allEvents.filter(
          (item) => item.category.toLowerCase() === selectedTitle.toLowerCase(),
        );

        setFilteredEvents(selectedItems);
      }
    };

    fetchData();
  }, []);

  const handleEventCategory = (id: string) => {
    localStorage.setItem("SelectItemId", id);
    router.push("/event/EventBooking");
  };

  return (
    <div className="w-full h-full">
      <MovieCarousel
        SliderData={filteredEvents || []}
        variant="event"
        navigateTo="/event/EventBooking"
      />

      <div className="my-10 w-full flex flex-col items-center">
        <div className="w-[90%] md:w-[80%]">
          <h1 className="text-[25px] font-semibold">
            All {filteredEvents?.[0]?.title} Events
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 ">
            {filteredEvents?.map((items) => {
              return (
                <div
                  key={items.id}
                  className="rounded-xl overflow-hidden shadow-lg hover:cursor-pointer"
                  onClick={() => handleEventCategory(items.id)}
                >
                  <img
                    src={items.image_url}
                    alt={items.title}
                    className="h-90 object-cover w-full"
                  />

                  <div className="p-2 flex flex-col">
                    <span className="text-[12px] text-gray-500">
                      {items.date}
                    </span>
                    <h1 className="text-[17px] font-semibold">{items.title}</h1>
                    <span className="text-[13px] text-[#545459]">
                      {items.venue}
                    </span>
                    <span className="text-[13px] text-[#545459]">
                      ₹{items.price} onwards
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCategory;

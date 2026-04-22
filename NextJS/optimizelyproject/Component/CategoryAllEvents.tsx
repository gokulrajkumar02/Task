"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryType, EventType } from "@/DB/District";

type Prop = {
  categoryAllEvents: CategoryType[];
  navigateTo ?:string
};

const CategoryAllEvents = ({ categoryAllEvents , navigateTo }: Prop) => {
  const [allEvents, setAllEvents] = useState<EventType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const allEventsData = categoryAllEvents
      .flatMap((cat) => cat.events)
      .slice(0, 15);

    setAllEvents(allEventsData);
  }, []);

  const handleEventCategory = (id: string) => {
    localStorage.setItem("SelectItemId", id);
    if( navigateTo)router.push(navigateTo);
  };

  return (
    <div className="mt-10 w-full">
      <h1 className="text-[25px] font-semibold">All Events</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allEvents.map((event) => {
          return (
            <div
              key={event.id}
              className="rounded-xl overflow-hidden shadow-lg hover:cursor-pointer"
              onClick={() => handleEventCategory(event.id)}
            >
              <img
                src={event.image_url}
                alt={event.title}
                className="h-90 object-cover w-full"
              />

              <div className="p-2 flex flex-col">
                <span className="text-[12px] text-gray-500">{event.date}</span>
                <h1 className="text-[17px] font-semibold">{event.title}</h1>
                <span className="text-[13px] text-[#545459]">
                  {event.venue}
                </span>
                <span className="text-[13px] text-[#545459]">
                  ₹{event.price} onwards
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryAllEvents;

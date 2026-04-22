"use client";

import { useEffect, useState } from "react";
import { activityEachCategoryData, CategoryType } from "@/DB/District";
import { useRouter } from "next/navigation";
import MovieCarousel from "@/Component/EmblaCarousel/MovieCarousel";

const ActivityCategory = () => {
  const [selectCategoryItem, setSelectCategoryItem] =
    useState<CategoryType | null>(null);

  const router = useRouter();

  useEffect(() => {
    const selectEventCategoryId = localStorage.getItem("EventSelectCategory");
    console.log(selectEventCategoryId);

    const selectCategoryData = activityEachCategoryData.find(
      (items) => items.id === selectEventCategoryId,
    );
    if (!selectCategoryData) return;
    setSelectCategoryItem(selectCategoryData);

    console.log(selectCategoryData);
  }, []);

  const handleEventCategory = (id: string) => {
    localStorage.setItem("SelectItemId", id);
    router.push("/activities/activitybooking");
  };

  return (
    <div className="w-full h-full">

      

      <MovieCarousel
        SliderData={selectCategoryItem?.events || []}
        variant="event"
        navigateTo={"/activities/activitybooking"}
      />

      <div className="my-10 w-full flex flex-col items-center">
        <div className="w-[90%] md:w-[80%]">
          <h1 className="text-[25px] font-semibold">
            All {selectCategoryItem?.title} Events
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 ">
            {selectCategoryItem?.events.map((items) => {
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

export default ActivityCategory;

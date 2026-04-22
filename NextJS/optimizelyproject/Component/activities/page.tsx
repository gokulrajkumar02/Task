"use client";

import CategoryExplaore from "@/Component/CategoryExplaore";
import {
  activityCategories,
  activityEachCategoryData,
  activities as SliderData,
} from "@/DB/District";
import MovieCarousel from "@/Component/EmblaCarousel/MovieCarousel";
import CategoryAllEvents from "@/Component/CategoryAllEvents";

const ActivityPage = () => {
  return (
    <div className="w-full h-full">
      <MovieCarousel SliderData={SliderData} variant="event" navigateTo={"/activities/activitybooking"}  />
      <div className="mt-10 w-full flex flex-col items-center">
        <div className="w-[90%] md:w-[80%]">
          <div className="w-full">
            <CategoryExplaore categoryData={activityCategories} navigateTo={"/activities/activitycategory"} />
            <CategoryAllEvents categoryAllEvents={activityEachCategoryData} navigateTo={"/activities/activitybooking"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;

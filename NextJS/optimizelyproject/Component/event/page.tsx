"use client";

import {
  EventSingersData,
  events as SliderData,
  eventCategories,
  eventEachCategoryData,
} from "@/DB/District";
import MovieCarousel from "@/Component/EmblaCarousel/MovieCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryExplaore from "@/Component/CategoryExplaore";
import CategoryAllEvents from "@/Component/CategoryAllEvents";

const Eventpage = () => {
  return (
    <div className="w-full h-full">
      <MovieCarousel SliderData={SliderData} variant="event" navigateTo={"/event/EventBooking"} />
      <div className="mt-10 w-full flex flex-col items-center">
        <div className="w-[90%] md:w-[80%]">
          <div className="w-full">
            <CategoryExplaore categoryData={eventCategories} navigateTo={"/event/EventCategory"} />

            <div className="mt-10 w-full">
              <h1 className="text-[25px] font-semibold">
                Artists in your District
              </h1>
              <div className="w-full px-10 relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {EventSingersData.map((singer) => (
                      <CarouselItem
                        key={singer.id}
                        className="basis-1/3 md:basis-1/4 lg:basis-1/6 cursor-pointer"
                      >
                        <div className="flex flex-col items-center gap-2 py-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden">
                            <img
                              src={singer.image_url}
                              alt={singer.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm text-center font-medium leading-tight">
                            {singer.name}
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>


            <CategoryAllEvents categoryAllEvents={eventEachCategoryData} navigateTo={"/event/EventBooking"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventpage;

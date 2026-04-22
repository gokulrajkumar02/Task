import React from "react";

import ActivityPage from "@/Component/activities/page";
import Eventpage from "@/Component/event/page";
import IplPage from "@/Component/ipl/page";
import MoviePage from "@/Component/movie/page";
import DistrictPage from "@/Component/District/page";
import DiningPage from "@/Component/dining/page";
import RestaurantPage from "@/Component/restaurant/page";
import TheatrePage from "@/Component/movie/TheatrePage/page";
import RestaurantBooking from "@/Component/restaurant/RestaurantBooking/page";

export const PageComponent: Record<string, React.ComponentType<any>> = {
  activities: ActivityPage,
  ipl: IplPage,
  event: Eventpage,
  movie: MoviePage,
  District : DistrictPage,
  dining : DiningPage,
  restaurant : RestaurantPage,
  
  TheatrePage :TheatrePage,
  RestaurantBooking : RestaurantBooking
};

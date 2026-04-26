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
import SeatLayout from "@/Component/movie/SeatLayout/page";
import PaymentLayout from "@/Component/movie/PaymentLayout/page";
import EventBooking from "@/Component/event/EventBooking/page";
import EventCategory from "@/Component/event/EventCategory/page";
import ChooseTicket from "@/Component/event/Checkout/page";
import EventOfferDetails from "@/Component/event/EventOfferDetails/page";
import AmountDetails from "@/Component/event/PaymentDetailspage/page";
import PaymentPage from "@/Component/event/PaymentPage/page";
import EachTeamPage from "@/Component/ipl/eachteam/page";
import IplBooking from "@/Component/ipl/iplbooking/page";
import CheckOutPage from "@/Component/ipl/checkout/page";
import IplPaymentDetailsPage from "@/Component/ipl/paymentdetailspage/page";
import OfferDetails from "@/Component/ipl/offerdetails/page";
import IplPaymentPage from "@/Component/ipl/paymentpage/page";
import ActivityBooking from "@/Component/activities/activitybooking/page";
import ActivityCategory from "@/Component/activities/activitycategory/page";
import BookingTimeSelector from "@/Component/activities/bookingtimeselector/page";
import ActivityCheckOutPage from "@/Component/activities/checkout/page";
import ActivityPaymentDetailsPage from "@/Component/activities/paymentdetailspage/page";
import ActivityOfferDetails from "@/Component/activities/offerdetails/page";
import ActivityPaymentPage from "@/Component/activities/paymentpage/page";

export const PageComponent: Record<string, React.ComponentType<any>> = {
  activities: ActivityPage,
  ipl: IplPage,
  event: Eventpage,
  movie: MoviePage,
  District: DistrictPage,
  dining: DiningPage,
  restaurant: RestaurantPage,

  movie_TheatrePage: TheatrePage,
  restaurant_RestaurantBooking: RestaurantBooking,
  movie_SeatLayout: SeatLayout,
  movie_PaymentLayout: PaymentLayout,
  event_EventBooking: EventBooking,
  event_EventCategory: EventCategory,
  event_Checkout: ChooseTicket,
  event_PaymentDetailspage: AmountDetails,
  event_EventOfferDetails: EventOfferDetails,
  event_PaymentPage: PaymentPage,
  ipl_eachteam: EachTeamPage,
  ipl_iplbooking : IplBooking,
  ipl_checkout : CheckOutPage,
  ipl_paymentdetailspage: IplPaymentDetailsPage,
  ipl_offerdetails: OfferDetails,
  ipl_paymentpage : IplPaymentPage,
  activities_activitybooking : ActivityBooking,
  activities_activitycategory : ActivityCategory,
  activities_bookingtimeselector : BookingTimeSelector,
  activities_checkout : ActivityCheckOutPage,
  activities_paymentdetailspage : ActivityPaymentDetailsPage,
  activities_offerdetails : ActivityOfferDetails,
  activities_paymentpage : ActivityPaymentPage
};

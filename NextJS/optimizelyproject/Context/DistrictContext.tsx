"use client";

import { EventType } from "@/DB/District";
import { getDates } from "@/Helper/getDates";
import { createContext, useContext, useState } from "react";

type DistrictContextType = {
  isDialogOpen: boolean;
  theatreDetails: any;
  selectedDate: any;
  guests: number;
  bookedSeat: string[];
  tempBooking: string[];
  selectedCategory: string;
  ticketCount: number;
  appliedDiscount: number;
  isDiscountApplied: boolean;
  iplTicketCount: Record<number, number>;
  isIplDiscountApplied: boolean;
  iplDiscount: number;
  selectActivityDetails: EventType | null;
  activitySelectedDate: number;
  activitySelectedTime: string;

  activityTicketCount: Record<string, number>;
  activityDiscount: number;

  isActivityDiscountApplied: boolean;
  setIsActivityDiscountApplied: React.Dispatch<React.SetStateAction<boolean>>;
  setActivitySelectedTime: React.Dispatch<React.SetStateAction<string>>;
  setSelectActivityDetails: React.Dispatch<
    React.SetStateAction<EventType | null>
  >;

  setActivityDiscount: React.Dispatch<React.SetStateAction<number>>;
  setIplDiscount: React.Dispatch<React.SetStateAction<number>>;
  setIplDiscountApplied: React.Dispatch<React.SetStateAction<boolean>>;
  setAppliedDiscount: React.Dispatch<React.SetStateAction<number>>;
  setGuests: any;
  setSelectedDate: any;
  setIsDialogOpen: (open: boolean) => void;
  setTheatreDeatils: any;
  setBookedSeat: React.Dispatch<React.SetStateAction<string[]>>;
  setTempBooking: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setTicketCount: React.Dispatch<React.SetStateAction<number>>;
  setIsDiscountApplied: React.Dispatch<React.SetStateAction<boolean>>;
  setIplTicketCount: React.Dispatch<
    React.SetStateAction<Record<number, number>>
  >;

  setActivityTicketCount: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;

  setActivitySelectedDate: React.Dispatch<React.SetStateAction<number>>;
};

const DistrictContext = createContext<DistrictContextType | null>(null);

export const DistrictProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dates = getDates(10);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [theatreDetails, setTheatreDeatils] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [guests, setGuests] = useState(1);
  const [bookedSeat, setBookedSeat] = useState<string[]>([]);
  const [tempBooking, setTempBooking] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [ticketCount, setTicketCount] = useState<number>(1);

  const [isDiscountApplied, setIsDiscountApplied] = useState<boolean>(false);
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);

  const [iplTicketCount, setIplTicketCount] = useState<Record<number, number>>(
    {},
  );

  const [isIplDiscountApplied, setIplDiscountApplied] =
    useState<boolean>(false);
  const [iplDiscount, setIplDiscount] = useState<number>(0);

  const [selectActivityDetails, setSelectActivityDetails] =
    useState<EventType | null>(null);

  const [activitySelectedDate, setActivitySelectedDate] = useState<number>(0);
  const [activitySelectedTime, setActivitySelectedTime] = useState<string>("");

  const [activityTicketCount, setActivityTicketCount] = useState<
    Record<string, number>
  >({});
  const [activityDiscount, setActivityDiscount] = useState<number>(0);

  const [isActivityDiscountApplied, setIsActivityDiscountApplied] =
    useState<boolean>(false);

  return (
    <DistrictContext.Provider
      value={{
        isDialogOpen,
        theatreDetails,
        selectedDate,
        guests,
        bookedSeat,
        tempBooking,
        selectedCategory,
        ticketCount,
        appliedDiscount,
        isDiscountApplied,
        iplTicketCount,
        isIplDiscountApplied,
        iplDiscount,
        selectActivityDetails,
        activitySelectedDate,
        activitySelectedTime,
        activityTicketCount,
        activityDiscount,
        isActivityDiscountApplied,

        setIsActivityDiscountApplied,
        setActivityDiscount,
        setActivityTicketCount,
        setActivitySelectedTime,
        setActivitySelectedDate,
        setSelectActivityDetails,
        setIplDiscountApplied,
        setIplDiscount,
        setIplTicketCount,
        setIsDiscountApplied,
        setAppliedDiscount,
        setTicketCount,
        setTempBooking,
        setIsDialogOpen,
        setTheatreDeatils,
        setSelectedDate,
        setGuests,
        setBookedSeat,
        setSelectedCategory,
      }}
    >
      {children}
    </DistrictContext.Provider>
  );
};

export const useDistrict = () => {
  const context = useContext(DistrictContext);
  if (!context)
    throw new Error("useDistrict must be used inside DistrictProvider");
  return context;
};

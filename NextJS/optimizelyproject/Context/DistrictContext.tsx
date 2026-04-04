"use client";

import { dates } from "@/app/(District)/Restaurant/page";
import { createContext, useContext, useState } from "react";

type DistrictContextType = {
  isDialogOpen: boolean;
  theatreDetails:any,
  selectedDate:any,
  guests:number,
  setGuests:any,
  setSelectedDate :any,
  setIsDialogOpen: (open: boolean) => void;
  setTheatreDeatils:any
  
};

const DistrictContext = createContext<DistrictContextType | null>(null);

export const DistrictProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [theatreDetails,setTheatreDeatils] = useState([])

  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [guests, setGuests] = useState(1);


  return (
    <DistrictContext.Provider value={{ isDialogOpen, setIsDialogOpen, theatreDetails ,selectedDate,guests, setTheatreDeatils, setSelectedDate,setGuests }}>
      {children}
    </DistrictContext.Provider>
  );
};

export const useDistrict = () => {
  const context = useContext(DistrictContext);
  if (!context) throw new Error("useDistrict must be used inside DistrictProvider");
  return context;
};
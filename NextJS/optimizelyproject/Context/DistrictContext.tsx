"use client";

import { createContext, useContext, useState } from "react";

type DistrictContextType = {
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  theatreDetails:any;
  setTheatreDeatils:any
};

const DistrictContext = createContext<DistrictContextType | null>(null);

export const DistrictProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [theatreDetails,setTheatreDeatils] = useState([])

  return (
    <DistrictContext.Provider value={{ isDialogOpen, setIsDialogOpen, theatreDetails , setTheatreDeatils }}>
      {children}
    </DistrictContext.Provider>
  );
};

export const useDistrict = () => {
  const context = useContext(DistrictContext);
  if (!context) throw new Error("useDistrict must be used inside DistrictProvider");
  return context;
};
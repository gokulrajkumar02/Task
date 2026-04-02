"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  "For you",
  "Dining",
  "Movies",
  "Events",
  "IPL",
  "Stores",
  "Activities",
];

const DistrictCategoryTab = () => {
  const [selected, setSelected] = useState("For you");
  
  return (
    <Tabs value={selected} onValueChange={setSelected} className="w-full">
      <TabsList className="bg-transparent gap-2 flex w-full justify-around">
        {categories.map((item) => (
          <TabsTrigger
            key={item}
            value={item}
            className="hover:cursor-pointer text-semibold rounded-full px-4 py-1.5 text-md data-[state=active]:bg-purple-200 data-[state=active]:text-black"
          >
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default DistrictCategoryTab;
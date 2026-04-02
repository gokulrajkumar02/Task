"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { label: "All",        value: "all" },
  { label: "Dining",     value: "restaurant" },
  { label: "Events",     value: "event" },
  { label: "Movies",     value: "movie" },
  { label: "IPL",        value: "ipl" },
  { label: "Store",      value: "store" },
  // { label: "Activities", value: "activities" },
  {label:"Artists", value:"artist"},
];



type DistrictCategorySearchProps = {    
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const DistrictCategorySearch = ({ selectedCategory, setSelectedCategory }: DistrictCategorySearchProps) => {
 
  return (
    <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
      <TabsList className="bg-transparent gap-2 flex w-full justify-around">
        {categories.map((item) => (
          <TabsTrigger
            key={item.label}
            value={item.value}
            className="hover:cursor-pointer text-semibold rounded-full px-4 py-1.5 text-md data-[state=active]:bg-purple-200 data-[state=active]:text-black"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default DistrictCategorySearch;
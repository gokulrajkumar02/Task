"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { name: "For you", path: "/foryou" },
  { name: "Dining", path: "/dining" },
  { name: "Movies", path: "/movie" },
  { name: "Events", path: "/event" },
  { name: "IPL", path: "/ipl" },
  { name: "Stores", path: "/stores" },
  { name: "Activities", path: "/activities" },
];

const DistrictCategoryTab = () => {
  const router = useRouter();

  const pathName = usePathname();

  return (
    <Tabs
      className="w-full"
      value={categories.find((c) => pathName.startsWith(c.path))?.path}
    >
      <TabsList className="bg-transparent gap-2 flex w-full justify-around">
        {categories.map((item) => (
          <TabsTrigger
            key={item.name}
            value={item.path}
            onClick={() => router.push(item.path)}
            className="hover:cursor-pointer text-semibold rounded-full px-4 py-1.5 text-md data-[state=active]:bg-purple-200 data-[state=active]:text-black"
          >
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default DistrictCategoryTab;

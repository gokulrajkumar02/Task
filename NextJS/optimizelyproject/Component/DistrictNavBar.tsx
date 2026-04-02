"use client";
import { useEffect, useState } from "react";
import DistrictCityDialog from "./DistrictCityDialog";
import DistrictCategoryTab from "./DistrictCategoryTab";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DistrictCategorySearch from "./DistrictCategorySearch";

import { trendingSearches } from "@/DB/District";
import type { SearchEntity } from "@/DB/District";
import { useRouter } from "next/navigation";
import LoginDialog from "./LoginDialog";
import { useDistrict } from "@/Context/DistrictContext";
import { Dates } from "@/app/(District)/Movie/page";

const getRandom10 = (arr: SearchEntity[]) =>
  [...arr].sort(() => Math.random() - 0.5).slice(0, 10);

const DistrictNavBar = () => {
  const [selectedCity, setSelectedCity] = useState("Chennai");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryData, setCategoryData] = useState<SearchEntity[] | null>(null);

  const [movieDetails, setMovieDetails] = useState<SearchEntity>();
  const [selectedDate, setSelectedDate] = useState<Dates | null>(null);

  const { isDialogOpen, setIsDialogOpen, theatreDetails } = useDistrict();

  const router = useRouter();
  const pathName = usePathname();
  const hideNavbar = pathName === "/Movie/SeatLayout";

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    const isAll = selectedCategory === "all";
    const hasQuery = query.length >= 1;

    let result = isAll
      ? trendingSearches
      : selectedCategory === "ipl"
        ? trendingSearches.filter((item) =>
            item.display_title.toLowerCase().includes("ipl"),
          )
        : trendingSearches.filter(
            (item) => item.display_subtitle.toLowerCase() === selectedCategory,
          );

    if (hasQuery) {
      result = result.filter((item) =>
        item.display_title.toLowerCase().includes(query),
    );
  }
  
  setCategoryData(hasQuery ? result : getRandom10(result));
}, [selectedCategory, searchQuery]);

useEffect(() => {
  const selectItemId = localStorage.getItem("SelectItemId");
    const getSelectItemDetails = trendingSearches.find(
      (item) => item.id === selectItemId,
    );
    setMovieDetails(getSelectItemDetails);
  }, [isDialogOpen]);

  const handleSelectItem = (item: SearchEntity) => {
    setIsDialogOpen(false);
    router.push(
      item.display_subtitle.charAt(0).toUpperCase() +
        item.display_subtitle.slice(1),
    );
    if (typeof window !== "undefined") {
      localStorage.setItem("SelectItemId", item.id.toString());
    }
  };

useEffect(() => {
  const date = localStorage.getItem("SelectedDate");
  if (date) setSelectedDate(JSON.parse(date));
}, [theatreDetails]);

  // console.log("SelectCategory", selectedCategory);

  return (
    <div className="min-h-[10%] w-full sticky top-0 bg-white z-10  border-b border-gray-300">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div
          className={`pt-2 pb-3 px-6 flex items-center justify-between h-full w-full ${hideNavbar && "justify-center sm:justify-between"}`}
        >
          <div
            className={`flex items-center gap-3 sm:px-3 py-2 w-[50%] sm:w-auto ${hideNavbar && "hidden sm:flex"}`}
          >
            <div className="hidden sm:flex items-center gap-3">
              <img
                src="/DistrictApp.jpg"
                alt="districtApp_image"
                className="w-22.5 h-auto object-contain"
              />

              <div className="bg-gray-300 h-6 w-px opacity-70"></div>
            </div>

            <DistrictCityDialog
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </div>
          <div
            className={`flex lg:justify-between ${hideNavbar ? "justify-center sm:justify-around" : "justify-end"} w-[100%] md:w-[80%]`}
          >
            {!hideNavbar && (
              <div className="hidden lg:flex lg:w-[65%] xl:w-[55%]">
                <DistrictCategoryTab />
              </div>
            )}
            {hideNavbar && (
              <div className="w-full md:w-[80%] flex flex-col justify-center items-center text-center">

                <h1 className="text-[22px] font-bold text-gray-900">
                  {movieDetails?.display_title}
                </h1>
                <p className="text-[14px] text-gray-500">
                   {selectedDate?.date} {selectedDate?.month} {theatreDetails[0]} at {theatreDetails[1]}
                </p>
              </div>
            )}
            <div
              className={`w-[20%] sm:w-[7%] flex items-center justify-between ${hideNavbar && "hidden sm:flex"}`}
            >
              {!hideNavbar && (
                <DialogTrigger asChild>
                  <Search className="hidden xl:flex w-6 h-6 text-purple-700 hover:cursor-pointer" />
                </DialogTrigger>
              )}

              <LoginDialog />
            </div>
          </div>
        </div>
        {!hideNavbar && (
          <div className="xl:hidden px-5 pb-5">
            <DialogTrigger asChild>
              <div className="relative w-full cursor-pointer">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-700" />

                <Input
                  readOnly
                  className="h-[40px] pl-10 hover:cursor-pointer"
                  placeholder="Search for events, movies and restaurants"
                />
              </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[700px] w-full h-[80%] mx-auto [&>button]:hidden pt-5 px-4 flex flex-col">
              <div className="h-[40%] flex flex-col gap-3">
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold">
                    Search for events, movies and restaurants
                  </DialogTitle>
                </DialogHeader>

                <Input
                  placeholder="Type to search..."
                  className="h-[40px]"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="overflow-x-auto">
                  <DistrictCategorySearch
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2  gap-4 overflow-y-auto scrollbar-hide h-full">
                {categoryData?.map((item) => (
                  <div
                    onClick={() => handleSelectItem(item)}
                    key={item.id}
                    className="border border-gray-300 rounded-lg p-4 sm:flex sm:items-center sm:gap-4 hover:cursor-pointer"
                  >
                    <img
                      src={item.image_url}
                      alt={item.display_title}
                      className="max-w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold">{item.display_title}</h3>
                      <p className="text-sm text-gray-600">
                        {item.display_subtitle.charAt(0).toUpperCase() +
                          item.display_subtitle.slice(1)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default DistrictNavBar;

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { LocateFixed, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cities, cityAlphabet, locationOptions } from "@/DB/District";

type LocationProps = {
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
};

const DistrictCityDialog = ({
  selectedCity,
  setSelectedCity,
}: LocationProps) => {
  const [searchedCity, setSearchedCity] = useState("");
  const [open, setOpen] = useState(false);
  const [selectCityAlphabet, setSelectCityAlphabet] = useState("a");
  const filteredCities = locationOptions.filter((city) =>
    city.toLowerCase().startsWith(selectCityAlphabet.toLowerCase()),
  );

  const searchedCities = locationOptions.filter((city) =>
    city.toLowerCase().includes(searchedCity.toLowerCase()),
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, city: string) => {
    if(e.key === "Enter") {
      setSelectedCity(city);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 transition hover:cursor-pointer">
          <MapPin className="text-purple-700 w-5 h-5 shrink-0" />

          <div className="text-left leading-tight">
            <p className="text-md font-semibold">{selectedCity}</p>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md sm:max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl p-6 flex flex-col z-50">
        <DialogTitle className="text-lg font-semibold text-gray-700 mb-3">
          Select Location
        </DialogTitle>

        <Input
          value={searchedCity}
          placeholder="Search city, area or locality"
          className="h-10 mb-3 p-2 "
          onChange={(e) => setSearchedCity(e.target.value)}
        />

        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md transition mb-4">
          <LocateFixed className="w-5 h-5 text-[#6d49fd]"  tabIndex={0} />
          <span className="text-[15px] font-semibold">
            Use Current Location
          </span>
        </div>
        <div className="overflow-y-auto scrollbar-hide">
          {searchedCity ? (
            searchedCities.length > 0 ? (
              <div className="grid gap-2">
                {searchedCities.map((city) => (
                  <div
                    tabIndex={0}
                    key={city}
                    onClick={() => {
                      setSelectedCity(city);
                      setOpen(false);
                    }}
                    className="px-2 py-1 text-sm font-semibold text-gray-500 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer"
                  >
                    {city}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-10">
                No cities found matching "{searchedCity}"
              </div>
            )
          ) : (
            <div className="">
              <div className="bg-white z-10">
                <h5 className="text-[16px] font-semibold text-gray-700">
                  Popular Cities
                </h5>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {cities.map((city) => (
                  <div
                    onKeyDown={(e) => handleKeyDown(e, city.name)}
                    tabIndex={0}
                    key={city.name}
                    onClick={() => {
                      setSelectedCity(city.name);
                      setOpen(false);
                    }}
                    className="cursor-pointer hover:scale-105 transition"
                  >
                    <img
                      src={city.img}
                      alt={city.name}
                      className="h-30 w-full object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <div>
                <h5 className="text-[16px] font-semibold text-gray-700 mb-2 mt-10">
                  All Cities
                </h5>

                <div className="flex flex-wrap gap-2">
                  {cityAlphabet.map((alphabet) => (
                    <button
                      tabIndex={0}
                      key={alphabet}
                      onClick={() => setSelectCityAlphabet(alphabet)}
                      className={`text-sm font-semibold cursor-pointer px-2 py-1 rounded ${
                        selectCityAlphabet === alphabet
                          ? "text-blue-500 bg-blue-50"
                          : "text-gray-500 hover:text-blue-500"
                      }`}
                    >
                      {alphabet.toUpperCase()}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-5">
                  {filteredCities.map((city) => (
                    <div
                        onKeyDown={(e) => handleKeyDown(e, city)}
                      tabIndex={0}
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setOpen(false);
                      }}
                      className="text-sm font-semibold text-gray-500 hover:text-blue-500 cursor-pointer"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DistrictCityDialog;

"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Image from "next/image";
import WeatherApi from "@/Helper/WeatherApi";
import groupDays from "@/Helper/GroupDays ";
import getMinMax from "@/Helper/MinMaxTemperature";
import getWeatherIcon from "@/Helper/GetWeatherIcon";
import {GroupedDay} from "@/Helper/GroupDays "
import getHourlyData from "@/Helper/GetHourlyData";
import toFahrenheit from "@/Helper/ToFahrenheit";
import searchLogo from "../public/logo.svg";
import bgTodayLarge from "../public/bg-today-large.svg";
import "../app/globals.css";

interface currentHightlightsType {
  title: string;
  content: keyof GroupedDay | "";
  symbol : string | "";
}

const currentWeatherHighlights : currentHightlightsType[] = [
  { title: "Feels Like", content: "apparent_temperature",symbol :""},
  { title: "Humidity", content: "humidity",symbol : "%"},
  { title: "Wind", content: "",symbol : "km/hr"},
  { title: "Precipitation", content: "precipitation", symbol : "mm"},
];

type daysTitleType = {shortDayTitle :string,longDayTitle : string}
const daysTitle : daysTitleType[] = [{shortDayTitle :"Mon",longDayTitle :"Monday"}, 
                    {shortDayTitle :"Tue",longDayTitle :"Tuesday"},
                    {shortDayTitle :"Wed",longDayTitle :"Wednesday"},
                    {shortDayTitle :"Thu",longDayTitle :"Thursday"},
                    {shortDayTitle :"Fri",longDayTitle :"Friday"},
                    {shortDayTitle :"Sat",longDayTitle :"Saturday"},
                    {shortDayTitle :"Sun",longDayTitle :"Sunday"},
  ];

const WeatherApp = () => {
  const [city, setCity] = useState("Salem");
  const [searchCity, setSearchCity] = useState("");
  const [units, setUnits] = useState("celsius");
  const [activeHourlyDay , setActiveHourlyDay] = useState("")
  const [hourlyTimeTemp, setHourlyTimeTemp] = useState<[string[], number[]]>([[], []]);

  const router = useRouter();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["weather", searchCity],
    queryFn: () => WeatherApi(searchCity),
    enabled: !!searchCity,
    retry: 1,
  });

  const HourlyForecast = data?.weather?.hourly;
  const apiTime = data?.weather?.current_weather?.time;
  const groupedDays = HourlyForecast ? (groupDays(HourlyForecast) ?? []) : [];
  const currentDayIndex = (new Date().getDay() + 6) % 7;

  const formattedDate = apiTime
    ? new Date(apiTime).toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const rotatedDays = [
    ...daysTitle.slice(currentDayIndex),
    ...daysTitle.slice(0, currentDayIndex),
  ];

  const getMinMaxTemperature = (index: number) => {
    return getMinMax(groupedDays[index], units,);
  };

  const handleEnter = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      setSearchCity(city)
    }
  }

  useEffect(() => {
        const selectedDayIndex = rotatedDays.findIndex(
          (day) => day.shortDayTitle === activeHourlyDay
        );
        const startTime = 0;
        const hourlyTempData =
          (selectedDayIndex == -1 || selectedDayIndex == 0)
            ? getHourlyData(groupedDays[0], new Date().getHours())
            : getHourlyData(groupedDays[selectedDayIndex], startTime);

        if (!hourlyTempData) return;

        const convertedFehrenData = [hourlyTempData[0],units == "fahrenheit" ? toFahrenheit(hourlyTempData[1]): hourlyTempData[1],
        ];
        setHourlyTimeTemp(convertedFehrenData);

}, [activeHourlyDay, data, units]); 

  return (
    <>
      <div className="w-[95%] max-w-6xl p-2 mx-auto">
        <div className="flex justify-between sticky top-1">
          <Image src={searchLogo} alt="App-logo" className="w-[150px] sm:w-[197px] h-[40px]"/>
          <select
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="rounded-md bg-[#25253f] border text-center text-[15px] md:text-[20px] text-white border-none"
          >
            <option value="celsius">Celsius °C</option>
            <option value="fahrenheit">Fahrenheit °F</option>
          </select>
        </div>

        {!(isError && (error as Error).message === "NETWORK_ERROR") ? (
          <>
            <div className="mt-10 flex justify-center">
              <h2 className="text-white text-[35px] font-bold text-center">
                How's the sky looking today?
              </h2>
            </div>

            <div className="w-full flex justify-center items-center flex-col sm:flex-col md:flex-row gap-5 mt-10">
              <input
                type="text"
                placeholder="🔍Search for a place..."
                className="sm:w-[90%] md:w-[40%] w-full h-10 px-4 py-2 rounded-md bg-[#25253f] text-white"
                value={city}
                onKeyDown={(e) => handleEnter(e)}
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                className="bg-[#4657d9] px-3 py-2 text-white rounded-md hover:cursor-pointer"
                onClick={() => setSearchCity(city)}
              >
                Search
              </button>
            </div>

            {!(isError && (error as Error).message === "NO_RESULT") ? (
              <div className="my-5">
                <div className="max-w-8xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-[3fr_1.2fr] gap-6">
                    <div className="space-y-6">
                      {!isLoading ? (
                        <div
                          className="h-48 w-full rounded-2xl bg-no-repeat bg-cover bg-center flex justify-between items-center"
                          style={{
                            backgroundImage: `url(${bgTodayLarge.src})`,
                          }}
                        >
                          <div className="text-white pl-3 ">
                            <h1 className="text-[20px] sm:font-bold sm:text-[25px]">
                              {data?.location.name},{data?.location.country}
                            </h1>
                            <p className="text-[20px]">{formattedDate}</p>
                          </div>
                          <div className="text-white text-[30px] sm:font-bold sm:text-[45px]">
                            <h2 className="pr-3">
                              {data &&
                                (units === "celsius"
                                  ? `${data?.weather?.current_weather.temperature}°C`
                                  : `${(data?.weather?.current_weather.temperature * 9) / 5 + 32}°F`)}
                            </h2>
                          </div>
                        </div>
                      ) : (
                        <div className="h-48 w-full rounded-2xl bg-[#25253f] flex justify-center items-center">
                          <h1 className="text-2xl text-white">Loading...</h1>
                        </div>
                      )}

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {currentWeatherHighlights.map((items, index) => {
                          const hour = new Date().getHours() - 1;
                          return (
                            <div
                              key={index}
                              className="h-24 bg-[#1c1f3a] rounded-xl text-white p-5 text-[20px]"
                            >
                              <h1>{items.title}</h1>
                              <h2>
                            {items.content === ""
                            ? data?.weather?.current_weather?.windspeed != null
                              ? `${data?.weather.current_weather.windspeed} km/hr`
                              : "-"
                            : groupedDays?.[0]?.[items.content as keyof GroupedDay]?.[hour] != null
                              ? `${Math.round(
                                  (units === "fahrenheit" && items.title === "Feels Like")
                                    ? ((groupedDays[0][items.content as keyof GroupedDay] as number[])[hour] * 9) / 5 + 32
                                    : (groupedDays[0][items.content as keyof GroupedDay] as number[])[hour],
                                )}${items.title === "Feels Like" ? (units === "fahrenheit" ? "°F" : "°C") : ` ${items.symbol}`}`
                              : "--"}
                              </h2>
                            </div>
                          );
                        })}
                      </div>
                      <label htmlFor="" className="text-white text-[20px]">
                        Dialy forecast
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 mt-2">
                        {rotatedDays.map((items, index) => {
                          const minMaxValue = getMinMaxTemperature(index);
                          const WeatherIcon = getWeatherIcon(
                            (minMaxValue[0] + minMaxValue[1]) / 2,
                          );
                          return (
                            <div
                              key={index}
                              className="h-28 p-2 bg-[#1c1f3a] rounded-xl text-white flex flex-col items-center justify-between"
                            >
                              <h1>{items.shortDayTitle}</h1>
                              <p>{WeatherIcon}</p>
                              <div className="w-full flex justify-between">
                                <h1>{Math.floor(minMaxValue[0])}°</h1>
                                <h1>{Math.floor(minMaxValue[1])}°</h1>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-[#1c1f3a] rounded-2xl p-4 pt-0 space-y-4 overflow-auto h-[490px] w-auto scrollbar-hide">
                      <div className="text-white flex justify-between sticky top-0 bg-[#1c1f3a]  py-6 z-10 ">
                        <h1 className="text-[18px] md:text-[20px]">Hourly forecast</h1>
                        <select value={activeHourlyDay} onChange={(e) => setActiveHourlyDay(e.target.value)} className="bg-[#3e3a5f] text-white rounded-md px-2 py-1">
                          {rotatedDays.map((items,index) =>{
                            return <option key={index} value={items.shortDayTitle} className="bg-[#3e3a5f]">{items.longDayTitle}</option>
                          })}
                        </select>
                      </div>
                      {hourlyTimeTemp[0].length > 0 ? hourlyTimeTemp[0].map((items,index) => {
                        const weatherIcon = getWeatherIcon(hourlyTimeTemp[1][index])
                        return <div key={index} className="h-14 bg-[#2a2d4d] rounded-lg text-white flex justify-around items-center">
                          <div className="flex gap-2 justify-between">
                          <h1>{weatherIcon}</h1>
                          <h1>{items.split("T")[1].split(":")[0] > "10" ? `${Number(items.split("T")[1].split(":")[0]) % 12 + 1} PM`  : `${Number(items.split("T")[1].split(":")[0] ) + 1} AM` }</h1>

                          </div>
                          <h1>{Math.round(hourlyTimeTemp[1][index])}°</h1>
                        </div>
                      }) : <div className="flex justify-center">
                        <p className="h-14 bg-[#2a2d4d] rounded-lg text-white w-[70%] text-[20px] flex justify-center items-center">Search the City</p>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center h-[300px] mt-30">
                <h1 className="text-white font-bold text-3xl">
                  No search result found!
                </h1>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20 text-white h-[500px]">
            <div className="h-20 w-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  fill="rgb(121, 124, 144)"
                  d="M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mt-4">Something went wrong</h1>
            <p className="text-center mt-2">
              We couldn't connect to the server (Api error). Please try again in
              a few moments.
            </p>
            <button
              onClick={() => router.refresh()}
              className="mt-4 bg-[#4657d9] px-4 py-2 rounded-md hover:cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherApp;

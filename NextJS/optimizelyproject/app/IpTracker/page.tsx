"use client";
import { useEffect, useState } from "react";
import IpCard from "../../Component/IpCard";

import dynamic from "next/dynamic";

const TrackerMap = dynamic(() => import("../../Component/TrackerMap"), {
  ssr: false,
});

export type IPData = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
  };
  isp: string;
};

const isValidIP = (ip: string): boolean => {
  const regExp = /^(\d{1,3}\.){3}\d{1,3}$/;
  return (
    regExp.test(ip) &&
    ip
      .split(".")
      .map(Number)
      .every((p) => p >= 0 && p <= 255)
  );
};

const isValidDomain = (query: string): boolean => {
  return /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/.test(
    query,
  );
};

export const toDisplayValue = (value?: string | null) => {
  return value?.trim() || "N/A";
};

let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;

const IpTracker = () => {
  const [input, setInput] = useState("");
  const [ipResponseData, setIpResponseData] = useState<IPData | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(query?: string) {
    if (query && !isValidIP(query) && !isValidDomain(query)) {
      alert("Please enter a valid IP address or domain name.");
      return;
    }
    try {
      if (query)
        url += isValidIP(query) ? `&ipAddress=${query}` : `&domain=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      setIpResponseData(data);
      console.log("Fetching data:", data);
    } catch (e) {
      alert("Something went wrong");
    }
  }
  const geoLocation = ipResponseData?.location;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div
        className="relative w-full text-center px-4 pt-8 pb-50 md:pb-24 
             md:bg-[url('/pattern-bg-desktop.png')] 
             bg-[url('/pattern-bg-mobile.png')] 
             bg-cover bg-center"
      >
        <h1 className="z-10 text-white text-[30px] font-semibold mb-5">
          IP Address Tracker
        </h1>

        <div className="relative z-10 flex max-w-125 mx-auto w-full rounded-xl overflow-hidden">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e) => e.key === "Enter" && fetchData(input.trim())}
            placeholder="Search for any IP address or domain"
            className="flex-1 bg-white px-5 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
          <button
            onClick={() => fetchData(input.trim())}
            aria-label="Search IP address"
            className="bg-black hover:bg-gray-800 px-5 flex items-center justify-center hover:cursor-pointer"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fillOpacity="0.01" />
              <path
                d="M19 12L31 24L19 36"
                stroke="#ffff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="z-100 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2  w-[90%] md:max-w-215">
          {ipResponseData && <IpCard ipData={ipResponseData} />}
        </div>
      </div>

      <div className="flex-1 z-10">
        {geoLocation ? (
          <TrackerMap lat={geoLocation.lat} lng={geoLocation.lng} />
        ) : (
          <div className="w-full h-125 bg-gray-300 flex items-center justify-center">
            Loading map...
          </div>
        )}
      </div>
    </div>
  );
};

export default IpTracker;

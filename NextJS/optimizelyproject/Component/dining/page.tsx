"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDistrict } from "@/Context/DistrictContext";
import { getDiningData } from "@/ContentfulFetch/getDiningData";

const DiningPage = () => {
  const { setIsDialogOpen, setSelectedCategory } = useDistrict();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDiningData();
      console.log("Dining Data",response);
      
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <div
      className="w-full flex justify-center overflow-auto h-full bg-linear-to-br from-purple-50 to-gray-100"
      onClick={() => {
        setIsDialogOpen(true);
        setSelectedCategory("restaurant");
      }}
    >
      <div className="mx-5 sm:w-[80%] lg:w-[60%] p-1 mt-10 rounded-3xl bg-linear-to-b from-purple-200 via-gray-50 to-transparent">
        <div className="from-purple-100 to-gray-100 rounded-3xl  text-center flex flex-col items-center">
          <div className="flex flex-col items-center p-3 md:px-15 md:py-12">
            <h1 className="text-[20px] md:text-[36px] font-bold text-gray-900 mb-8">
              {data?.heroTitle}
            </h1>

            <div className="flex items-center gap-3 bg-white rounded-xl p-3 md:p-5 max-w-67.5 sm:max-w-md border border-gray-300">
              <svg
                className="w-6 h-6 text-violet-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                readOnly
                type="text"
                className="hover:cursor-pointer outline-none text-sm md:text-[15px] text-gray-400 placeholder-gray-400 w-60"
                placeholder="Search for a restaurant name"
              />
            </div>
          </div>

          <div className="mt-15">
            <h1 className="text-[20px] md:text-4xl font-bold text-gray-900 mb-8">
              {data?.districtSpecialTitle}
            </h1>

            <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
              {data?.signatureFeatures?.map((items: any, index: number) => {
                const rotateClass =
                  index % 2 === 0 ? "rotate-[-10deg]" : "rotate-[10deg]";
                return (
                  <div
                    key={items.id}
                    className="flex flex-row lg:flex-col items-center gap-5"
                  >
                    <div className="w-[60%] lg:w-full">
                      <h1 className="text-[25px] font-semibold">
                        {items.title}
                      </h1>
                      <p>{items.description}</p>
                    </div>
                    <div
                      className={clsx(
                        "bg-[#d4bcee] p-2 w-39 h-45 mt-4",
                        rotateClass,
                      )}
                    >
                      <img
                        src={items?.image}
                        alt={items?.title}
                        className="w-35 h-35 object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-[20px] md:text-4xl font-bold text-gray-900 mb-8">
             {data?.offerTitle}
            </h1>

            <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 my-15">
              {data?.offers?.map((items: any, index: number) => {
                const rotateClass =
                  index % 2 === 0 ? "rotate-[-12deg]" : "rotate-[12deg]";
                return (
                  <div
                    key={items.id}
                    className="flex lg:flex-row flex-col items-center gap-5"
                  >
                    <div className="lg:w-[50%] w-full lg:text-end">
                      <h1 className="text-[25px] font-bold">{items.title}</h1>
                      <p>{items.description}</p>
                    </div>
                    <div
                      className={clsx(
                        "-rotate-10 bg-[#d4bcee] p-2 w-39 h-45",
                        rotateClass,
                      )}
                    >
                      <img
                        src={items.image}
                        alt={items.title}
                        className="w-35 h-35 object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningPage;

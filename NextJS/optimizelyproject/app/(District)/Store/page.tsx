"use client";

import { SearchEntity, trendingSearches } from "@/DB/District";
import { useEffect, useState } from "react";

const StorePage = () => {
  const [entity, setEntity] = useState<SearchEntity | null>(null);

  useEffect(() => {
    const selectedId = localStorage.getItem("SelectItemId");
    if (!selectedId) return;

    const found = trendingSearches.find((item) => item.id === selectedId);
    if (found) setEntity(found);
  });
  return (
    <div className="mt-5 flex justify-center w-full px-3">
      <div className="w-full md:w-[70%]">
        {entity?.images && (
          <div className="flex gap-2 h-[200px] md:h-[400px]">
            <div className="w-[60%] h-full overflow-hidden rounded-lg">
              <img
                src={entity.images[0]}
                alt="main"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="w-[40%] grid grid-cols-2 grid-rows-2 gap-2 h-full">
              {entity.images.slice(1, 5).map((img, index) => (
                <div
                  key={index}
                  className="relative w-full h-full overflow-hidden rounded-lg"
                >
                  <img
                    src={img}
                    alt={`img-${index}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-full mt-8 p-4">
          <div className="w-[70%]">
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <img
                  src={entity?.images[0]}
                  alt=""
                  className="h-15 w-15 object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="text-[22px] font-semibold">
                    {entity?.display_title}
                  </h1>
                  <p className="text-gray-500 text-[13px]">
                    3.3km | No 1/2, R16, 2nd Flr, 1Mg Mall,Trinity Circle,Swami
                    Vivekananda Road,Opposite Taj Vivanta,Bengaluru
                  </p>
                  <span className="text-gray-500 text-[13px]">
                    Fashion | Footwear • Sports & Outdoors
                  </span>
                  <span className="text-gray-500 text-[13px]">
                    Open . Close 100:pm
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                  <button className="flex items-center gap-1 border border-gray-500 px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100">
                    Directions
                  </button>

                  <button className="flex items-center gap-1 border border-gray-500 px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100">
                    Share
                  </button>

                  <button className="flex items-center gap-1 border border-gray-500 px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100">
                    Call now
                  </button>
                </div>
            </div>
          </div>
          <div className="w-[25%]"></div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;

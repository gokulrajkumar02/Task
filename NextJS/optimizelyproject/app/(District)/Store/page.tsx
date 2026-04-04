"use client"

import { SearchEntity, trendingSearches } from "@/DB/District";
import { useEffect, useState } from "react";

const StorePage = () => {

  const [entity, setEntity] = useState<SearchEntity | null>(null);

  useEffect(() => {
      const selectedId = localStorage.getItem("SelectItemId");
      if (!selectedId) return;
  
      const found = trendingSearches.find((item) => item.id === selectedId);
      if (found) setEntity(found);
  })
  return (
    <div className="mt-5 flex justify-center w-full px-3">
      <div className="w-full md:w-[80%]">
        {entity?.images && (
          <div className="flex gap-2 h-[200px] md:h-[400px]">
            <div className="w-[60%] h-full">
              <img
                src={entity.images[0]}
                alt="main"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-[40%] grid grid-cols-2 grid-rows-2 gap-2 h-full">
              {entity.images.slice(1, 5).map((img, index) => (
                <div key={index} className="relative w-full h-full">
                  <img
                    src={img}
                    alt={`img-${index}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
  )
}

export default StorePage

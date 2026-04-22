"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { offers } from "@/DB/District";

type OfferType = (typeof offers)[number];

const RestaurantOfferDetails = () => {
  const [offerData, setOfferData] = useState(offers);
  const historyRef = useRef<OfferType[]>([]);

  const handleSwipeLeft = () => {
    const newOffers = [...offerData];
    const removedOffer = newOffers.shift();
    if (removedOffer) {
      historyRef.current.push(removedOffer);
    }
    setOfferData(newOffers);
  };

  const handleSwipeRight = () => {
    const lastOffer = historyRef.current.pop();
    if (!lastOffer) return;
    setOfferData((prev) => [lastOffer, ...prev]);
  };

  return (
    <div className="p-4 w-full overflow-hidden h-70">
      <h2 className="font-semibold mb-3">Offers</h2>

      <div className="flex w-[90%] md:w-full relative select-none justify-center">
        <AnimatePresence>
          {offerData.map((items, index) => {
            const isTop = index === 0;

            return (
              <motion.div
                key={items.id}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right:0}}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -100 && offerData.length > 1)
                    handleSwipeLeft();
                  if (info.offset.x > 100 && historyRef.current.length > 0)
                    handleSwipeRight();
                }}
                className="absolute w-60 md:w-80 h-40 md:h-50 bg-white rounded-xl border border-gray-400 flex items-center justify-center"
                style={{
                  zIndex: offerData.length - index,
                }}
                animate={{
                  x: index * 10,
                }}
                exit={{ x: -300, opacity: 0 }}
              >
                <div className="flex flex-col justify-center gap-5 h-full">
                  <h3 className="font-bold text-lg text-black">
                    {items.title}
                  </h3>

                  <div className="text-xs text-gray-600">
                    <p>{items.subtitle}</p>
                    <p className="text-[11px] opacity-80">{items.extra}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* <div className="flex gap-4 overflow-x-auto">
        {offers.map((item) => (
          <Card
            key={item.id}
            className="flex gap-5 min-w-65 rounded-xl bg-linear-to-r from-[#a18bfb] to-gray-200  text-white"
          >
            <CardContent className="p-4 flex flex-col justify-between h-25">
              <div>
                <h3 className="font-bold text-lg">{item.title} OFF</h3>
              </div>

              <div className="text-xs text-white/90">
                <p>{item.subtitle}</p>
                <p className="text-[11px] opacity-80">{item.extra}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>
  );
};

export default RestaurantOfferDetails;

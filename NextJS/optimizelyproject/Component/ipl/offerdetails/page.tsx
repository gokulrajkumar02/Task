"use client";

import { useState } from "react";
import { useDistrict } from "@/Context/DistrictContext";
import { eventTicketOffer } from "@/DB/District";
import { useRouter } from "next/navigation";

const OfferDetails = () => {
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);

  const {
    isIplDiscountApplied,
    setIplDiscountApplied,
    iplDiscount,
    setIplDiscount,
  } = useDistrict();
  const router = useRouter();

  const handleRemoveDiscount = () => {
    setAppliedDiscount(0);
    setIplDiscountApplied(false);
    setIplDiscount(0);
  };

  const handleApplyDiscount = (discount: number) => {
    setAppliedDiscount(discount);
  };

  return (
    <div className="mx-5 md:w-[50%] md:mx-auto mt-10 space-y-4">
      <h1 className="text-xl font-bold">Available Offers</h1>

      {eventTicketOffer.map((offer) => {
        const isApplied =
          appliedDiscount !== 0
            ? appliedDiscount === offer.discount
            : iplDiscount === offer.discount;
        return (
          <div
            key={offer.id}
            className="border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <h2 className="font-semibold text-[16px]">{offer.label}</h2>
              <p className="text-gray-500 text-[13px]">{offer.description}</p>
            </div>
            {isApplied ? (
              <button
                onClick={handleRemoveDiscount}
                className="text-red-500 font-semibold text-[14px] border border-red-400 px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => handleApplyDiscount(offer.discount)}
                className="text-green-700 font-semibold text-[14px] border border-green-400 px-3 py-1 rounded-lg bg-green-50"
              >
                Apply
              </button>
            )}
          </div>
        );
      })}

      <div className="mt-5 flex justify-center md:justify-end gap-4">
        <button
          className="hover:cursor-pointer text-white bg-[#6c6c6c] py-3 w-30 rounded-xl"
          onClick={() => {
            if (!isIplDiscountApplied) setIplDiscount(0);
            router.back();
          }}
        >
          Back
        </button>
        <button
          className="hover:cursor-pointer text-white bg-[#0c172f] py-3 w-30 rounded-xl"
          onClick={() => {
            if (appliedDiscount == 0) return;
            setIplDiscountApplied(true);
            setIplDiscount(appliedDiscount);
            router.back();
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default OfferDetails;

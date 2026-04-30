"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getEventData, OfferType } from "@/ContentfulFetch/getEventData";
import { useDistrict } from "@/Context/DistrictContext";

const EventOfferDetails = () => {
  const { setIsDiscountApplied, setAppliedDiscount, appliedDiscount } =
    useDistrict();

  const [offerDetails, setOfferDetails] = useState<OfferType[]>([]);
  const [offerTitle,setOfferTitle] = useState<string>("")

  const router = useRouter();

  const handleRemoveDiscount = () => {
    setIsDiscountApplied(false);
    setAppliedDiscount(0);
  };

  const handleApplyDiscount = (discount: number) => {
    setAppliedDiscount(discount);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEventData();
      setOfferTitle(data.offerTitle)
      setOfferDetails(data.offerDetails);
      console.log(data.offerDetails);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5 md:w-[50%] md:mx-auto mt-10 space-y-4">
      <h1 className="text-xl font-bold">{offerTitle}</h1>

      <div className="min-h-30 space-y-4">

   
      {offerDetails.map((offer) => {
        const isApplied = appliedDiscount === offer?.discount;
        return (
          <div
            key={offer.id}
            className="border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <h2 className="font-semibold text-[16px]">{offer?.label}</h2>
              <p className="text-gray-500 text-[13px]">{offer?.description}</p>
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
         </div>
      <div className="mt-5 flex justify-end gap-4">
        <button
          className="hover:cursor-pointer text-white bg-[#6c6c6c] py-3 w-30 rounded-xl"
          onClick={() => router.back()}
        >
          Back
        </button>
        <button
          className="hover:cursor-pointer text-white bg-[#0c172f] py-3 w-30 rounded-xl"
          onClick={() => {
            if (appliedDiscount == 0) return;
            router.back();
            setIsDiscountApplied(true);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default EventOfferDetails;

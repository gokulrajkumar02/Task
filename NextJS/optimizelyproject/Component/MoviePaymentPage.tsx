"use client";

import { User } from "lucide-react";
import { useDistrict } from "@/Context/DistrictContext";

const MoviePaymentPage = () => {
  const { tempBooking } = useDistrict();
  const orderAmount = tempBooking.length * 150;
  const bookingCharges = orderAmount / 5;
  const totalAmount = orderAmount + bookingCharges;
  return (
    <div className="w-[100%] md:w-[40%] p-5 flex flex-col items-center">
      <h1 className="text-[15px] font-semibold w-full">Payment Summary</h1>
      <div className="w-full border border-gray-200 overflow-hidden rounded-xl p-2 mt-3 text-[13px] flex flex-col">
        <div className="flex justify-between p-2 w-full">
          <h1>Order amount</h1>
          <span>₹{orderAmount}</span>
        </div>
        <div className="flex justify-between p-2 border-b border-gray-200 w-full">
          <h1>Booking Charges (inclof GST)</h1>
          <span>₹{bookingCharges}</span>
        </div>
        <div className="flex justify-between p-2 font-semibold text-[15px]">
          <h1 className="text">To Be Paid</h1>
          <span>₹{totalAmount}</span>
        </div>
      </div>
      <div className="mt-5 flex justify-between w-full">
        <h1 className="text-[15px] font-semibold">Your Details</h1>
        <span className="text-[13px] underline decoration-dashed">Edit</span>
      </div>
      <div className="border border-gray-200 rounded-xl mt-2 p-4 flex gap-3 w-full">
        <User className="text-gray-600" />
        <div className="flex flex-col gap-2 text-[12px] text-gray-600">
          <span>+91 1234567890</span>
          <span>Tamil Nadu</span>
        </div>
      </div>

      <div className="mt-4 w-full text-white bg-black py-2 px-4 rounded-xl flex justify-between items-center xs:fixed md:flex">
        <div className="flex flex-col">
          <span>₹{totalAmount}</span>
          <span className="text-gray-300 text-[12px]">TOTAL</span>
        </div>

        <h2>Proceed To Pay</h2>
      </div>
    </div>
  );
};

export default MoviePaymentPage;

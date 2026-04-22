"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useDistrict } from "@/Context/DistrictContext";
import {
  activityEachCategoryData,
  activityTickets,
  eventTicketOffer,
} from "@/DB/District";

const ActivityPaymentPage = () => {
  const [qrValue, setQrValue] = useState<string>("");
  const [selectEventDetails, setSelectEventDetails] = useState<any>(null);
  const [showQR, setShowQR] = useState<boolean>(false);
  const { activityTicketCount, activityDiscount } = useDistrict();

  useEffect(() => {
    const selectEventId = localStorage.getItem("SelectItemId");

    const event = activityEachCategoryData
      .flatMap((cat) => cat.events)
      .find((event) => event.id === selectEventId);

    setSelectEventDetails(event || null);

    console.log(event);
  }, []);

  const totalTickets = Object.values(activityTicketCount).reduce(
    (sum, count) => sum + count,
    0,
  );

  const totalPrice = activityTickets.reduce((sum, ticket) => {
    return sum + (activityTicketCount[ticket.id] || 0) * ticket.discountedPrice;
  }, 0);

  const offer = eventTicketOffer.find(
    (offers) => offers.discount === activityDiscount,
  );

  const feesCharges = totalPrice * 0.1;
  const grandTotal = totalPrice + feesCharges;

  const discountAmount = grandTotal * activityDiscount;
  const grandTotalAfterDis = grandTotal - discountAmount;

  useEffect(() => {
    if (!selectEventDetails) return;

    const bookingData = {
      bookingId: `BK-${Date.now()}`,
      eventId: localStorage.getItem("SelectItemId"),
      eventName: selectEventDetails?.title,
      eventDate: selectEventDetails?.date,
      eventVenue: selectEventDetails?.venue,
      tickets: totalTickets,
      amount: grandTotalAfterDis || grandTotal,
      discount: discountAmount ? `${discountAmount * 100}%` : "none",
      bookedAt: new Date().toISOString(),
    };

    setQrValue(JSON.stringify(bookingData));
  }, [selectEventDetails, totalTickets, discountAmount]);

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[95%] md:w-[70%] lg:[60%] mt-10 flex flex-col gap-4 items-center mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-500 text-[14px] text-center">Order total</h1>
          <span className="text-[28px] font-semibold">
            ₹{grandTotalAfterDis.toFixed(2)}
          </span>
        </div>

        <div className="w-full flex items-center flex-col">
          <h1 className="text-[15px] uppercase font-semibold">
            Choose payment method
          </h1>
          <div
            className="w-[90%] md:w-[50%] flex flex-col border border-gray-300 p-5 rounded-xl mt-5 cursor-pointer"
            onClick={() => setShowQR(!showQR)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-semibold">Scan to pay</h1>
                <span className="text-sm text-gray-500">
                  UPI · GPay · PhonePe · Paytm
                </span>
              </div>
              <span className={`transition-all duration-300`}>
                {showQR ? (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      fill="rgb(0, 0, 0)"
                      d="M297.4 201.4C309.9 188.9 330.2 188.9 342.7 201.4L502.7 361.4C515.2 373.9 515.2 394.2 502.7 406.7C490.2 419.2 469.9 419.2 457.4 406.7L320 269.3L182.6 406.6C170.1 419.1 149.8 419.1 137.3 406.6C124.8 394.1 124.8 373.8 137.3 361.3L297.3 201.3z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      fill="rgb(0, 0, 0)"
                      d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                  </svg>
                )}
              </span>
            </div>

            {showQR && qrValue && (
              <div className="flex justify-center mt-4 pt-4 border-t border-gray-200">
                <QRCode
                  value={qrValue}
                  style={{ height: "auto", maxWidth: "60%", width: "60%" }}
                  viewBox="0 0 256 256"
                />
              </div>
            )}
          </div>
        </div>

        <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-xl p-4">
          <div className="flex gap-5 items-center">
            <div className="border p-2 w-fit h-fit rounded-lg bg-[#f5f4ed]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <path d="M1 10h22" />
              </svg>
            </div>
            <div>
              <h1 className="text-[18px]">Card</h1>
              <span className="text-[14px] text-gray-600">
                Debit or credit · tap or insert
              </span>
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-xl p-4">
          <div className="flex gap-5 items-center">
            <div className="border p-2 w-fit h-fit rounded-lg bg-[#f5f4ed]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="1" y="6" width="22" height="12" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M5 12h.01M19 12h.01" />
              </svg>
            </div>
            <div>
              <h1 className="text-[18px]">Cash</h1>
              <span className="text-[14px] text-gray-600">Pay at counter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPaymentPage;

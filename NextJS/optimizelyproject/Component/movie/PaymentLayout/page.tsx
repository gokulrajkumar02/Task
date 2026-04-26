"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Dates } from "../TheatrePage/page";
import { useDistrict } from "@/Context/DistrictContext";
import { trendingSearches } from "@/DB/District";
import type { SearchEntity } from "@/DB/District";
import { useRouter } from "next/navigation";
import { getEndTime } from "@/Helper/getEndTime";
import MoviePaymentPage from "@/Component/MoviePaymentPage";
import { PageDataFetcher } from "@/lib/pageDataFetcher";


type MovieDetailsType = {
  title: string;
  certificate: string;
  genres: string;
  image_url: string;
  description: string;
};

const LOCK_TIME = 7 * 60;
const PaymentLayout = () => {
  const [selectedDate, setSelectedDate] = useState<Dates | null>(null);
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(null);
  const [timer, setTimer] = useState(LOCK_TIME);
  const [isLocked, setIsLocked] = useState(false);
  const [offerApplied, setOfferApplied] = useState<boolean>(false);

  const {
    bookedSeat,
    setBookedSeat,
    tempBooking,
    setTempBooking,
    theatreDetails,
  } = useDistrict();
  const router = useRouter();


  useEffect(() => {
    const selectItemId = localStorage.getItem("SelectItemId");
    const date = localStorage.getItem("SelectedDate");
    if (date) setSelectedDate(JSON.parse(date));

    const fetchData = async () => {
      const fetchFunction = PageDataFetcher["movie_TheatrePage"];
      if (!fetchFunction || !selectItemId) return;
      const res = await fetchFunction(selectItemId);
      setMovieDetails(res);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!bookedSeat.length) return;

    setTempBooking(bookedSeat);
    setBookedSeat([]);
    setIsLocked(true);
    setTimer(LOCK_TIME);
  }, [bookedSeat]);

  useEffect(() => {
    if (!isLocked) return;

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isLocked]);

  useEffect(() => {
    if (timer === 0 && isLocked) {
      alert("Session expired. Seats released!");
      router.push("/Movie/SeatLayout");
      setBookedSeat([]);
      setTempBooking([]);
      setIsLocked(false);
    }

  }, [timer, isLocked]);

  const handleApplyOffer = () => {
    setOfferApplied(true);
    setTimeout(() => {
      setOfferApplied(false);
    }, 3000);
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const formattedTime = `${minutes}:${String(seconds).padStart(2, "0")} `;

  return (
    <div className="w-full flex flex-col items-center overflow-auto">
      <div className="w-full bg-[#efe3ff] text-center py-1 text-[12px] font-light">
        Complete your booking in
        <span
          className={clsx(
            "font-bold",
            timer <= 60 ? "text-red-600 " : "text-green-800 font-light",
          )}
        >
          &nbsp;{formattedTime}
        </span>
        mins
      </div>
      <div className="w-full lg:w-[60%] flex gap-10 flex-col md:flex-row p-5">
        <div className="w-full md:w-[55%] flex flex-col gap-4">
          <div className="w-full  border  border-gray-200 rounded-2xl overflow-hidden h-fit">
            <div className="p-5 shadow-sm bg-white">
              <div className="flex justify-between items-start gap-4 border-b border-gray-200 pb-3">
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-gray-800">
                    {movieDetails?.title}
                  </h1>

                  <div className="flex items-center gap-2 text-[12px] text-gray-700">
                    <span>UA13+</span>
                    <span>•</span>
                    <span>Tamil</span>
                    <span>•</span>
                    <span>2D</span>
                  </div>

                  <p className="text-[14px] text-gray-700">
                    {theatreDetails[1]}
                  </p>
                </div>

                <img
                  src={movieDetails?.image_url}
                  alt="movie"
                  className="h-20 w-14 object-cover rounded-lg shadow-sm"
                />
              </div>
              <div className="mt-2 text-[12px] border-b border-gray-200">
                <span>
                  {selectedDate?.day}, {selectedDate?.date}{" "}
                  {selectedDate?.month}
                </span>

                <div className="mt-1 mb-3">
                  {theatreDetails[0]} - {getEndTime(theatreDetails[0])} (approx)
                </div>
              </div>
              <div className="mt-2 flex flex-col">
                <div className="w-full flex justify-between font-semibold">
                  <h1 className="text-[15px]">{tempBooking.length} tickets</h1>
                  <span>₹{tempBooking.length * 150}</span>
                </div>

                <span className="text-[14px] text-gray-700">
                  Seat No : {tempBooking.join(", ")}
                </span>
                <span className="text-[14px] text-gray-700">
                  {theatreDetails[1]}
                </span>
              </div>
            </div>
            <div className="w-full bg-[#f1f1f2] p-2 text-center text-gray-600">
              Cancellation is unavaiable
            </div>
          </div>
          <div>
            <h1 className="text-[15px] font-semibold w-full">Offers for you</h1>

            <div
              onClick={() => offerApplied && setOfferApplied(false)}
              className={clsx(
                "w-full rounded-xl mt-4 p-4 flex justify-between items-center transition duration-300",

                offerApplied
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 cursor-pointer"
                  : "border border-gray-200",
              )}
            >
              {offerApplied ? (
                <p className="w-full text-center text-white font-semibold text-[15px]">
                  Offer Applied
                </p>
              ) : (
                <>
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-8 h-8"
                    >
                      <path
                        fill="rgb(0, 166, 255)"
                        d="M385.5 132.8C393.1 119.9 406.9 112 421.8 112L424 112C446.1 112 464 129.9 464 152C464 174.1 446.1 192 424 192L350.7 192L385.5 132.8zM254.5 132.8L289.3 192L216 192C193.9 192 176 174.1 176 152C176 129.9 193.9 112 216 112L218.2 112C233.1 112 247 119.9 254.5 132.8zM344.1 108.5L320 149.5L295.9 108.5C279.7 80.9 250.1 64 218.2 64L216 64C167.4 64 128 103.4 128 152C128 166.4 131.5 180 137.6 192L96 192C78.3 192 64 206.3 64 224L64 256C64 273.7 78.3 288 96 288L544 288C561.7 288 576 273.7 576 256L576 224C576 206.3 561.7 192 544 192L502.4 192C508.5 180 512 166.4 512 152C512 103.4 472.6 64 424 64L421.8 64C389.9 64 360.3 80.9 344.1 108.4zM544 336L344 336L344 544L480 544C515.3 544 544 515.3 544 480L544 336zM296 336L96 336L96 480C96 515.3 124.7 544 160 544L296 544L296 336z"
                      />
                    </svg>
                    <div className="flex flex-col flex-wrap">
                      <h1 className="text-[14px] font-semibold">
                        Free snack voucher applied
                      </h1>
                      <span className="text-[12px] text-gray-700">
                        A free snack in your favourite outlet
                      </span>
                    </div>
                  </div>
                  <span
                    role="button"
                    onClick={handleApplyOffer}
                    className="text-[13px] font-semibold text-blue-500 hover:cursor-pointer"
                  >
                    Apply
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <MoviePaymentPage />
      </div>
    </div>
  );
};

export default PaymentLayout;

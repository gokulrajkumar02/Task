"use client";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import { menus, features, restaurantActions } from "@/DB/District";
import { useDistrict } from "@/Context/DistrictContext";
import { SearchEntity, trendingSearches } from "@/DB/District";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import RestaurantPreview from "@/Component/RestaurantPreview";
import RestaurantInfoCard from "@/Component/RestaurantInfoCard";
import RestaurantRatingReview from "@/Component/RestaurantRatingReview";
import RestaurantOfferDetails from "@/Component/RestaurantOfferDetails";
import RestaurantTableBooking from "@/Component/RestaurantTableBooking";

const RestaurantPage = () => {
  const [restaurantStatus, setRestaurantStatus] = useState<boolean>();
  const [entity, setEntity] = useState<SearchEntity | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const { isDialogOpen } = useDistrict();
  const time = new Date().getHours();

  useEffect(() => {
    setMounted(true);
    setRestaurantStatus(time >= 10 || time < 1 ? true : false);
  }, []);

  useEffect(() => {
    const selectedId = localStorage.getItem("SelectItemId");
    if (!selectedId) return;

    const found = trendingSearches.find((item) => item.id === selectedId);
    if (found) setEntity(found);
  }, [isDialogOpen]);

  console.log(menus, "menu");

  return (
    <div className="mt-5 flex justify-center w-full px-3">
      <div className="w-full md:w-[80%]">

        <div className="h-50 md:h-100">
          
          {entity?.images && <RestaurantPreview entity={entity} />}
          </div>

        <div className="flex flex-col lg:flex-row mt-5">
          <div className="w-full lg:w-[75%]">
            <div className="w-full">
              <h1 className="text-[30px] font-extrabold">
                {entity?.display_title}
              </h1>
              <div className="w-full flex flex-col gap-3 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-semibold">
                    4.2 ⭐
                  </span>
                  <span className="text-gray-700">₹1700 for two</span>
                  <span className="text-gray-400">|</span>
                  <span
                    className={clsx(
                      restaurantStatus ? "text-green-600" : "text-red-600",
                    )}
                  >
                    {restaurantStatus ? "Open" : "Closed"}
                  </span>
                  <span className="text-gray-600">10:00 AM to 1:00 AM</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <p className="">
                    30, 3rd Floor, B.R Plaza, 4th Cross, HRBR Layout, CMR Road,
                    Kalyan Nagar, Bangalore
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {restaurantActions.map((items) => {
                    return (
                      <button
                        key={items}
                        className="flex items-center gap-1 border px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100"
                      >
                        {items}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <RestaurantInfoCard /> */}
            <RestaurantOfferDetails />
            <div className="p-4">
              <h2 className="font-semibold mb-3">Menu</h2>
              <p className="text-sm text-[#9f2d00] mb-4">
                Updated 4 months ago
              </p>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {menus.map((item) => (
                  <div
                    key={item?.id}
                    onClick={() => setSelectedImage(item?.image)}
                    className="min-w-45 h-65 rounded-xl overflow-hidden cursor-pointer relative"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={item?.image}
                      alt="menu"
                      width={256}
                      height={256}
                      className="h-full w-full object-cover"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>

              {mounted && (
                <Dialog
                  open={!!selectedImage}
                  onOpenChange={() => setSelectedImage(null)}
                >
                  <DialogContent
                    className="p-4 overflow-hidden"
                    style={{
                      width: "800px",
                      maxWidth: "800px",
                      height: "90vh",
                    }}
                  >
                    <DialogTitle className="sr-only">Menu Preview</DialogTitle>
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="menu preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </DialogContent>
                </Dialog>
              )}
            </div>

            <RestaurantRatingReview />

            <div className="p-4">
              <h1 className="text-lg font-semibold">About the restaurant</h1>
              <div className="mt-3">
                <h1 className="text-[15px] font-semibold">Cost</h1>
                <span className="text-[13px]">₹2300 for two</span>
              </div>
              <div className="mt-3">
                <h1 className="text-[15px] font-semibold">Cuisines</h1>
                <span className="text-[13px]">Chinese, European</span>
              </div>
              <div className="mt-3">
                <h1 className="text-[15px] font-semibold">
                  Available facilities
                </h1>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-2">
                  {features.map((items) => {
                    return (
                      <div className="flex gap-1" key={items}>
                        <Sparkles className="w-4 h-4 text-gray-500" />
                        <p className="text-[14px]">{items}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <RestaurantTableBooking />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;

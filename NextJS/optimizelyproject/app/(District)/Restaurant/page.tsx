"use client";

import { useDistrict } from "@/Context/DistrictContext";
import { SearchEntity, trendingSearches } from "@/DB/District";
import { useEffect, useMemo, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const infoCards = [
  {
    title: "About the place",
    description:
      "Discover a lively beer garden with authentic German beers and global flavors, perfect for a vibrant community vibe.",
    icon: "💎",
  },
  {
    title: "Must tries dishes and cuisines",
    description:
      "Savor the Pulled Pork Burger with BBQ sauce and spice fries, or try the Biergarten Deconstructed Black Forest Cake.",
    icon: "🍔",
  },
  {
    title: "Why people go",
    description:
      "Visit for the wide selection of German ales, communal seating that encourages socializing, and the lively atmosphere.",
    icon: "🍽️",
  },
  {
    title: "Legacy and reputation",
    description:
      "Check out Bangalore’s original Biergarten, a key spot in the city's craft beer scene!",
    icon: "👑",
  },
];

export const offers = [
  {
    id: 1,
    title: "FLAT 20% OFF",
    subtitle: "From 6:00 PM, today",
    extra: "10 slots left",
  },
  {
    id: 2,
    title: "FLAT 15% OFF",
    subtitle: "No booking required",
    extra: "Valid all day",
  },
  {
    id: 3,
    title: "FLAT 25% OFF",
    subtitle: "Lunch special (12 PM - 3 PM)",
    extra: "Limited time offer",
  },
  {
    id: 4,
    title: "FLAT 10% OFF",
    subtitle: "On first booking",
    extra: "New users only",
  },
  {
    id: 5,
    title: "FLAT 30% OFF",
    subtitle: "Weekend special",
    extra: "Only on Sat & Sun",
  },
];

export const menus = [
  {
    id: 1,
    image: "/menu1.jpg",
  },
  {
    id: 2,
    image: "/menu2.jpg",
  },
  {
    id: 3,
    image: "/menu3.jpg",
  },
];

export const reviews = ["Ambience", "Service", "Food"];

export const features = [
  "Lunch",
  "Dinner",
  "Home delivery",
  "Wheelchair accessible",
  "Full bar available",
  "Step-free entry",
  "DJ",
  "Valet parking",
  "Parking available",
  "Stags allowed",
  "Work friendly",
  "Mall parking",
  "Party place",
  "Vegetarian friendly",
];

const getDates = (days: number) => {
  const today = new Date();
  const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short" });
  const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short" });

  return Array.from({ length: days }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    date.setHours(0, 0, 0, 0);

    const labelPrefix = i === 0 ? "Today" : i === 1 ? "Tomorrow" : dayFormatter.format(date);
    return {
      id: i,
      label: `${labelPrefix}, ${dateFormatter.format(date)}`,
      value: date,
      key: date.toDateString(),
    };
  });
};
export const dates = getDates(10);

const RestaurantPage = () => {
  const { isDialogOpen, setSelectedDate, setGuests, selectedDate, guests } =
    useDistrict();
  const [entity, setEntity] = useState<SearchEntity | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const selectedId = localStorage.getItem("SelectItemId");
    if (!selectedId) return;

    const found = trendingSearches.find((item) => item.id === selectedId);
    if (found) setEntity(found);
  }, [isDialogOpen]);

  console.log(entity);

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

        <div className="flex flex-col md:flex-row mt-5">
          <div className="w-full md:w-[75%]">
            <div className="w-full">
              <h1 className="text-[30px] font-extrabold">
                {entity?.display_title}
              </h1>
              <div className="w-full flex flex-col gap-3 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-green-600 text-white px-2 py-[2px] rounded text-xs font-semibold">
                    4.2 ⭐
                  </span>

                  <span className="text-gray-700">₹1700 for two</span>

                  <span className="text-gray-400">|</span>

                  <span className="text-green-600 font-medium">Open</span>

                  <span className="text-gray-600">10:00 AM to 1:00 AM</span>
                </div>

                <div className="flex items-start gap-2 text-gray-600">
                  <p className="">
                    30, 3rd Floor, B.R Plaza, 4th Cross, HRBR Layout, CMR Road,
                    Kalyan Nagar, Bangalore
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  <button className="flex items-center gap-1 border px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100">
                    Directions
                  </button>

                  <button className="flex items-center gap-1 border px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100">
                    Share
                  </button>

                  <button className="flex items-center gap-1 border px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100">
                    Call
                  </button>

                  <button className="flex items-center gap-1 border px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100">
                    All outlets
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-4 overflow-x-auto">
                {infoCards.map((item, i) => (
                  <Card
                    key={i}
                    onClick={() => setOpen(true)}
                    className="min-w-[280px] cursor-pointer"
                  >
                    <CardContent className="flex gap-3 p-4">
                      <span className="text-yellow-500 text-lg">
                        {item.icon}
                      </span>

                      <div>
                        <h3 className="font-semibold text-sm">{item.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="w-4xl h-[90%] sm:h-[80%] overflow-auto">
                  <DialogHeader>
                    <DialogTitle>About the place</DialogTitle>
                  </DialogHeader>

                  <div className="flex flex-col gap-4 mt-2">
                    {infoCards.map((item, i) => (
                      <Card key={i}>
                        <CardContent className="flex gap-3 p-4">
                          <span className="text-yellow-500">{item.icon}</span>

                          <div>
                            <h3 className="font-semibold text-sm">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="p-4">
              <h2 className="font-semibold mb-3">Offers</h2>

              <div className="flex gap-4 overflow-x-auto">
                {offers.map((item) => (
                  <Card
                    key={item.id}
                    className="flex gap-5 min-w-[260px] rounded-xl bg-gradient-to-r from-[#a18bfb] to-gray-200  text-white"
                  >
                    <CardContent className="p-4 flex flex-col justify-between h-[100px]">
                      <div>
                        <h3 className="font-bold text-lg">
                          {item.title} {item.discount} OFF
                        </h3>
                      </div>

                      <div className="text-xs text-white/90">
                        <p>{item.subtitle}</p>
                        <p className="text-[11px] opacity-80">{item.extra}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="p-4">
              <h2 className="font-semibold mb-3">Menu</h2>
              <p className="text-sm text-[#9f2d00] mb-4">
                Updated 4 months ago
              </p>

              <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {menus.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item.image)}
                    className="min-w-[180px] h-[260px] rounded-xl overflow-hidden cursor-pointer shadow-sm flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt="menu"
                      className="w-full h-full object-cover"
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
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-4">Ratings & reviews</h2>

              <Card className="rounded-2xl">
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <div className="flex items-center gap-2">
                    <h1 className="text-[35px] font-bold text-green-700">
                      4.8
                    </h1>
                    <Star className="text-green-700" size={20} />
                  </div>

                  <p className="text-[15px] text-muted-foreground mt-2">
                    Based on 7,509 ratings
                  </p>

                  <p className="text-[12px] text-gray-500 mt-1">
                    how are ratings calculated?
                  </p>

                  <div className="mt-6 bg-gray-50 rounded-xl px-6 py-4 flex justify-between w-full max-w-md">
                    <div className="text-center flex-1">
                      <p className="font-semibold">4.8</p>
                      <p className="text-[12px]">Ambience</p>
                    </div>

                    <div className="w-px bg-gray-200 mx-2" />

                    <div className="text-center flex-1">
                      <p className="font-semibold">4.9</p>
                      <p className="text-[12px]">Food</p>
                    </div>

                    <div className="w-px bg-gray-200 mx-2" />

                    <div className="text-center flex-1">
                      <p className="font-semibold">4.9</p>
                      <p className="text-[12px]">Service</p>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="font-semibold text-lg">1,207 reviews</h3>
                  </div>

                  <div className="flex justify-center gap-3 mt-4 flex-wrap">
                    {reviews.map((item, index) => (
                      <button
                        key={index}
                        className="px-4 py-1.5 rounded-full border text-sm hover:bg-gray-100"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

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
                <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
          <div className="w-full md:w-[25%]">
            <div className="border border-gray-300 p-4 rounded-xl w-full md:sticky md:top-20">
              <h1 className="text-[20px] font-semibold">Book a table</h1>
              <div className="flex mt-5 gap-3 flex-col w-full">
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <label className="text-gray-400">Date</label>
                    <select
                      value={selectedDate?.value?.toString()}
                      onChange={(e) => {
                        const selected = dates.find(
                          (d) => d.value.toString() === e.target.value,
                        );
                        if (selected) setSelectedDate(selected);
                      }}
                      className="w-full p-2 border rounded-lg bg-white text-[15px]"
                    >
                      {dates.map((date) => (
                        <option key={date.id} value={date.value.toString()}>
                          {date.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-400">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-xl bg-white text-sm outline-none focus:ring-2 focus:ring-gray-200"
                    >
                      {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-full">
                  <Button
                    className="w-full py-5"
                    onClick={() => router.push("/Restaurant/RestaurantBooking")}
                  >
                    Book a table
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;

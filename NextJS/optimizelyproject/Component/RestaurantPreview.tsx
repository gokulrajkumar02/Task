"use client";

import { useState } from "react";
import { EventType, SearchEntity } from "@/DB/District";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MovieCarousel from "./EmblaCarousel/MovieCarousel";


type Props = {
  entity: SearchEntity | null | EventType;
};

const RestaurantPreview = ({ entity }: Props) => {

  const [gridSelectIndex, setGridSelectedIndex] = useState<number>(0)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  if (!entity || !entity.images) return null;

  const diningModalImages = entity.images.map((img, index) => ({
    key: index + 1,
    src: img,
  }));
  return (
    <Drawer
      direction="bottom"
      dismissible={false}
      open={openDrawer}
      onOpenChange={setOpenDrawer}
    >
      <DrawerTrigger asChild>
        <div className="flex gap-2 h-50 md:h-100">
          <div className="w-[60%] h-full overflow-hidden rounded-lg">
            <img
              src={entity.images[0]}
              alt="main"
              onClick={() => setGridSelectedIndex(0)}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
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
                  onClick={() => setGridSelectedIndex(index + 1)}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </DrawerTrigger>

      <DrawerContent
        className="z-999 max-w-screen h-screen max-h-screen rounded-none p-0 overflow-hidden bg-black [&>div:first-child]:hidden"
        style={{ minWidth: "100vw" }}
      >
        <DrawerHeader className="relative">
          <VisuallyHidden asChild>
            <DrawerTitle>Images</DrawerTitle>
          </VisuallyHidden>
          <div
            onClick={() => setOpenDrawer(false)}
            className="z-50 absolute top-5 right-1 sm:right-5 flex gap-2 items-center text-white px-4 py-1 hover:cursor-pointer hover:bg-[#4a4a4a] hover:rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 384 512"
            >
              <path
                fill="rgb(255, 255, 255)"
                d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"
              />
            </svg>
            <span className="text-[15px] hover:cursor-pointer">Close</span>
          </div>
          <DrawerDescription asChild>
            <MovieCarousel SliderData={diningModalImages} variant="dining" gridSelectIndex={gridSelectIndex} />
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default RestaurantPreview;

"use client";

import ImageCarousel from "@/Component/NextSense/ImageCarousel";
import NextSenseNavBar from "@/Component/NextSense/NextSenseNav";
import Scroll from "@/Component/NextSense/scroll";

const NextSense = () => {
  return (
    <div className="w-full">
      <div className="w-full sticky top-0 z-300">
        <div className="w-full bg-[#2b2e3f] flex items-center md:px-5 py-1.5 md:py-2">
          <h1 className="text-white text-[12px] w-full md:text-[16px] font-medium text-center">
            Spring Sale — 38% off Smartbuds + free shipping
          </h1>
        </div>
        <NextSenseNavBar />
      </div>

        <ImageCarousel/>

        {/* <Scroll/> */}

    </div>
  );
};

export default NextSense;

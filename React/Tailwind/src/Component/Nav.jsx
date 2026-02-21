import React from "react";

import MobileImage from "../assets/MobileImage.png";

const Nav = () => {
  return (
    <div className="w-full flex justify-center min-[1335px]:my-45">
      <div className="w-full 2xl:w-360 bg-[#804FB0] border rounded-[20px] border-none min-[1335px]:relative">
        <div className="mt-28.25 ml-16.75 md:w-140">
          <h1 className="text-[30px] md:text-[42px] text-[#FFFFFF] font-bold font-Urbanist leading-13.75">
            Explore endless possibilities with FinanceFlow
          </h1>
          <p className="my-8 w-[70%] text-[15px] md:text-[18px] leading-8 text-[#FFFFFF] font-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div
            role="button"
            className="max-[470px]:w-[90%] my-7 w-[40%] py-5 rounded-[80px] bg-[#FFFFFF] flex justify-center items-center text-[#804FB0] uppercase font-bold text-[16px] leading-4 tracking-[1.6px]"
          >
            Download App
          </div>
        </div>
        <div className="flex justify-center items-end">
          <img 
            src={MobileImage}
            alt="MobileImage"
            className="max-[1335px]:mt-15 max-[340px]:w-80 md:max-h-192.5 min-[1335px]:absolute min-[1335px]:right-1.25 min-[1335px]:bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

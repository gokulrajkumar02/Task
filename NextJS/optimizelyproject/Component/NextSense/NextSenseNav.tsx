"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import clsx from "clsx";
import { useState } from "react";

const navLabels = [
  { id: 1, link: "", label: "Smartbuds" },
  { id: 2, link: "", label: "Tips & Wings" },
  { id: 3, link: "", label: "About" },
  { id: 4, link: "", label: "Clinical" },
];

const labels = ["Tips & Wings", "About", "Clinical", "Blog"];

const NextSenseNavBar = () => {
  const [isOpenSlider, setIsOpenSlider] = useState<boolean>(false);

  const [isButtonHover, setIsButtonHover] = useState(false);

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1400px] px-6 py-1 lg:px-8 lg:py-4 flex box-border justify-between min-[1100px]:justify-normal items-center mx-auto">
        <button
          className="block min-[1100px]:hidden h-5.5 w-5.5 hover:cursor-pointer"
          onClick={() => setIsOpenSlider(true)}
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <a
          href="/"
          className="flex items-center h-[18px] w-auto md:h-[20px] lg:h-[26px]"
        >
          <img
            src="/nextSenseImg.jpg"
            alt="logo"
            className="h-full w-auto object-contain"
          />
        </a>

        <nav className="ml-auto hidden min-[1100px]:flex lg:gap-[40px] items-center">
          {navLabels.map((items) => {
            return (
              <div
                key={items.id}
                className="py-2 text-[20px] font-medium text-[#2B2E3F] hover:text-[#aeacff]"
              >
                {items.label}
              </div>
            );
          })}
        </nav>
        <div className="flex items-center shrink-0 lg:ml-8 gap-2">
          <button className="bg-[#2b2e3f] py-3.25 px-7.5 rounded-full font-bold  text-white mr-2 hidden min-[1100px]:block hover:bg-[#aeacff] hover:text-black transition-colors duration-4 00">
            Shop Now
          </button>
          <button className="text-black hover:text-[#aeacff] rounded-full hover:bg-[#f3f3f4] w-10 h-10 md:w-11 md:h-11 flex justify-center items-center">
            <svg
              className="w-[20px] md:w-[25px] h-[20px] md:h-[25px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
            </svg>
          </button>

          <button className="text-black rounded-full hover:bg-[#f3f3f4] hover:text-purple-400 w-11 h-11 justify-center items-center hidden min-[1100px]:flex">
            <svg
              className="w-[25px] h-[25px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
      <Sheet open={isOpenSlider} onOpenChange={setIsOpenSlider}>
        <SheetContent
          side="left"
          className="z-200 w-full min-[450px]:w-[440px] [&>button:first-of-type]:hidden p-0 m-0 overflow-auto scrollbar-hide"
        >
          <SheetHeader className="space-y-0 text-left">
            <SheetTitle>
              <div className="py-[18px] px-[20px] flex justify-between items-center border-b border-rgba(43,46,63)">
                <a href="/" onClick={() => setIsOpenSlider(false)}>
                  <img
                    src="/nextSenseImg.jpg"
                    alt="logo"
                    className="h-[22px] w-auto object-contain"
                  />
                </a>
                <button
                  onClick={() => setIsOpenSlider(false)}
                  className="h-9 w-9 text-[#2b2e3f] p-2 border border-gray-200 last:border-none bg-[rgba(43,46,63,0.06)] rounded-full"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </SheetTitle>
            <div className="p-[14px] space-y-[10px] border-b border-gray-300">
              <img
                src="https://cdn.shopify.com/s/files/1/0612/0289/0840/files/12233_20c104f9-fd0f-459c-b3ab-8f454d269a95.png?v=1776489711"
                alt=""
                className="w-full max-h-[230px] object-cover rounded-md"
              />
              <h1 className="text-[11px] text-[#AAA8FF] font-semibold mt-3 tracking-widest">
                SMARTBUDS
              </h1>
              <p className="font-bold text-[17px] text-[#2B2E3F] ">
                Sleep earbuds that read your brain.
              </p>
              <p className="text-[#3D4054] text-[13px]">
                Clinical EEG. Adaptive audio. Smart wake.
              </p>

              <div className="grid grid-cols-2 gap-y-[10px] gap-x-[14px] p-[13px] rounded-lg bg-[#F7F6FC]">
                <span className="flex text-[12px] items-center gap-[5px]">
                  <svg
                    className="w-3 h-3 text-[#AAA8FF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 2v6L3 20a2 2 0 002 2h14a2 2 0 002-2L15 8V2"></path>
                    <line x1="9" y1="2" x2="15" y2="2"></line>
                  </svg>
                  Clinically tested
                </span>
                <span className="flex text-[12px] items-center gap-[5px]">
                  <svg
                    className="w-3 h-3 text-[#AAA8FF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  30-night trial
                </span>
                <span className="flex text-[12px] items-center gap-[5px]">
                  <svg
                    className="w-3 h-3 text-[#AAA8FF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                  1-year warranty
                </span>
                <span className="flex text-[12px] items-center gap-[5px]">
                  <svg
                    className="w-3 h-3 text-[#AAA8FF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7M5.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                  </svg>
                  Free shipping
                </span>
              </div>

              <button
                onMouseEnter={() => setIsButtonHover(true)}
                onMouseLeave={() => setIsButtonHover(false)}
                className="text-white flex justify-center items-center gap-2  hover:text-black hover:bg-[#aaa8ff] transition-colors duration-200 w-full rounded-full bg-[#2b2e3f] font-semibold text-[15px] py-[13px] px-[24px] hover:cursor-pointer"
              >
                Show Smartbuds
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className={clsx(
                    "w-3 h-3 transition-all duration-200",
                    isButtonHover ? "translate-x-2" : "translate-0",
                  )}
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                  />
                </svg>
              </button>
              <p className="pb-2 underline underline-offset-4 text-center text-gray-400 text-[12px] hover:cursor-pointer">
                Wings or tips?
              </p>
            </div>

            <div className="py-4 px-5">
              {labels.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center px-1 py-4.5 border-b border-gray-200"
                  >
                    <h1 className="text-[17px] text-[#484b59]">{item}</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                    >
                      <path
                        fill="#bebfc4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NextSenseNavBar;

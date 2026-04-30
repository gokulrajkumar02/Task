"use client";

import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/0289/0840/files/20250919SS_NextSense0717_1.png?v=1776394105",

    highlight: "performance.",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0612/0289/0840/files/PR_Brainwave_v1_Final_1.png?v=1776394093",
    highlight: "recovery.",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0612/0289/0840/files/20250919SS_NextSense0178_1.png?v=1776394100",
    highlight: "speed.",
  },
  {
    id: 4,
    image: "https://cdn.shopify.com/s/files/1/0612/0289/0840/files/20250919SS_NextSense0575_1.png?v=1776394106",
    highlight: "focus.",
  },
];

const DURATION = 5000;

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    startTimer();
  };

  return (
    <div className="relative w-full h-[680px] overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="z-10 absolute top-0 right-0 left-0 bottom-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === currentIndex ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.highlight}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 via-black/30 to-transparent z-50" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 w-full md:max-w-[1100px] border border-[rgba(232,225,225,0.15)]">
        <p className="text-[#aaa8ff] text-[13px] md:text-[16px] mb-4">
          The world's first EEG-powered sleep earbuds
        </p>

        <p className="text-white text-[20px] sm:text-[36px] md:text-[50px] lg:text-[72px] mb-4 leading-[1.2]">
          Transform your sleep.
          <br /> Elevate your
          <span className="text-[#faf5a2] ml-2 sm:ml-4">
            {slides[currentIndex].highlight}
          </span>
        </p>
        <p className="text-white text-[13px] md:text-[18px] max-w-[540px] mb-8">
          Smartbuds adapt to your brain's rhythm in real time, elevating sleep,
          restoring focus, and helping you feel truly refreshed.
        </p>

        <div>
          <button className="hover:cursor-pointer h-[58px] px-[42px] group flex items-center gap-[10px] bg-[#444867] border border-white/10 hover:bg-[#464966] text-white px-6 py-3 rounded-full text-[15px] transition-all duration-200">
            Sleep now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                fill="currentColor"
                d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-2 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-[2px] rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-14 bg-[#aaa8ff]"
                  : "w-7 bg-[#5b5e70]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

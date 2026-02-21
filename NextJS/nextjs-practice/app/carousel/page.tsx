"use client";
import { log } from "console";
import { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const translateX = useRef<number>(300);
  const activeIndex = useRef(0);
  const imageRef = useRef<(HTMLImageElement | null)[]>([]);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    trackRef.current!.style.transform = `translateX(${translateX.current}px)`;
    // trackRef.current!.style.marginLeft = "300px"
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleChange("next");
      if (activeIndex.current == imageRef.current.length - 1)
        clearInterval(timer);
    },2000);
  }, []);

  const centerImage = (image: any) => {
    const container = containerRef.current;
    if (!container || !image) return;
    const containerRect = container.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    const containerCenter = containerRect.width / 2;
    const imageCenter =
      imageRect.left - containerRect.left + imageRect.width / 2;
    const shift = containerCenter - imageCenter;
    translateX.current += shift;

    trackRef.current!.style.transform = `translateX(${translateX.current}px)`;
  };

  const handleChange = (navigation: string) => {
    // clearInterval(timer)
    if (isAnimating) return;
    if (navigation == "prev") {
      if (activeIndex.current <= 0) return;
      setIsAnimating(true);
      activeIndex.current--;
      centerImage(imageRef.current[activeIndex.current]);
    } else {
      if (activeIndex.current >= imageRef.current.length - 1) return;
      setIsAnimating(true);
      activeIndex.current++;
      centerImage(imageRef.current[activeIndex.current]);
    }
    const controlClick = setTimeout(() => {
      setIsAnimating(false);
      console.log("jnf");
    }, 3000);

    return () => clearTimeout(controlClick)
  };

  return (
    <div className="flex">
      <button
        onClick={() => handleChange("prev")}
        className="hover:cursor-pointer"
      >
        <svg
          className="w-[48px] h-[48px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.1"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
      </button>
      <div
        className="w-300 h-100 overflow-hidden my-10 mx-auto border"
        ref={containerRef}
      >
        <div
          className="flex gap-2.5 transition-transform duration-500 ease-in-out"
          ref={trackRef}
        >
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <img
              key={num}
              ref={(el) => (imageRef.current[index] = el)}
              src={`https://picsum.photos/300/200?random=${num}`}
              className="w-600px h-100 cursor-pointer  "
              alt={`Carousel image ${num}`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => handleChange("next")}
        className="hover:cursor-pointer"
      >
        <svg
          className="w-[48px] h-[48px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.1"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;

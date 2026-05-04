"use client";
import { useCallback, useEffect, useRef } from "react";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButton";
import { useDotButton } from "./EmblaCarouselDotButton";
import styles from "./embla.module.css";
import { useRouter } from "next/navigation";

const DINING_VARIENT = "dining";

const Carousel = ({
  slides,
  options,
  variant,
  gridSelectIndex,
  navigateTo,
  setIsViewOpen,
  setCurrentIndex,
}: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    ...options,
    startIndex: gridSelectIndex || 0,
  });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const router = useRouter();

  const stopAutoPlay = useCallback((varient: string) => {
    if (varient == DINING_VARIENT) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(
    (varient: string) => {
      if (varient == DINING_VARIENT) return;
      stopAutoPlay(varient);
      intervalRef.current = setInterval(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, 3000);
    },
    [emblaApi],
  );
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setCurrentIndex(index);
      stopAutoPlay("");
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, setCurrentIndex]);

  useEffect(() => {
    if (!emblaApi || variant == DINING_VARIENT) return;
    startAutoPlay(variant);
    return () => stopAutoPlay(variant);
  }, [emblaApi, startAutoPlay, stopAutoPlay]);

  const handleBookShow = (id: number) => {
    localStorage.setItem("SelectItemId", id.toString());
  };

  return (
    <section
      className={clsx(
        styles.embla,
        (variant == DINING_VARIENT || variant == "StoryFeature") && "h-screen",
      )}
    >
      <div className={`${styles.embla__viewport} relative`} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides?.map((slide: any) =>
            variant === "StoryFeature" ? (
              <div
                className={`${styles.embla__slide} relative px-4 py-4 bg-[#383838] flex flex-col items-center`}
                key={slide.id}
              >
                <div className="flex justify-between w-full h-15 items-center">
                  <div className="flex w-[50%] h-full items-center gap-3">
                    <div className="rounded-full w-[35px] h-8.75 bg-linear-to-tr from-yellow-300 via-pink-500 to-purple-600" />
                    <h1 className="text-white">Your Story</h1>
                  </div>
                  <div
                    onClick={() => setIsViewOpen(false)}
                    className="text-white hover:cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="h-7 w-7"
                    >
                      <path
                        fill="rgb(255, 255, 255)"
                        d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className={`${styles.embla__slide__inner} rounded-2xl overflow-hidden mt-10 w-full relative`}
                >
                  <img
                    src={slide.image_url || slide.bg || slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute top-0 right-0 w-[50%] h-full"
                    onClick={() => setCurrentIndex((prev: number) => prev + 1)}
                  />
                  <div
                    className="absolute top-0 left-0 w-[50%] h-full"
                    onClick={() =>
                      setCurrentIndex((prev: number) => {
                        return prev > 0 ? prev - 1 : prev;
                      })
                    }
                  />
                </div>

                <div className="mt-8 w-[95%] flex justify-between">
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="w-5 h-5 bg-[#247772] rounded-full" />
                      <div className="w-5 h-5 bg-[#FFCF55] rounded-full -ml-[2px]" />
                      <div className="w-5 h-5 bg-[#C91C64] rounded-full -ml-[2px]" />
                    </div>
                    <p className="text-white text-[15px]">Seen by 10</p>
                  </div>

                  <div className="flex gap-5 items-center text-white">
                    <div className="flex flex-col gap-y-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        className="h-7 w-7"
                      >
                        <path
                          fill="rgb(255, 255, 255)"
                          d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z"
                        />
                      </svg>
                      <p className="text-[14px]">Highlight</p>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        className="w-7 h-7"
                      >
                        <path
                          fill="rgb(255, 255, 255)"
                          d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"
                        />
                      </svg>
                      <p className="text-[14px]">More</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : variant === DINING_VARIENT ? (
              <div
                className={`${styles.embla__slide} relative px-0 lg:px-10 py-0 lg:py-5`}
                key={slide.key}
              >
                <div className={`${styles.embla__slide__inner} relative z-100`}>
                  <img
                    src={slide.src}
                    alt="diningModalImage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`${styles.embla__slide} relative px-10 py-5`}
                key={slide.id}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${variant === "event" ? slide.image_url : slide.bg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    filter: "blur(80px)",
                    zIndex: 0,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.7)",
                    zIndex: 50,
                  }}
                />

                {/* {variant === "movie" && (
                  <div
                    className={`${styles.embla__slide__inner} relative z-100 flex items-center justify-between lg:mx-10 hover:cursor-pointer`}
                    onClick={() => {
                      handleBookShow(slide.id);
                      router.push(navigateTo);
                    }}
                  >
                    <div className="hidden lg:flex lg:justify-between flex-col gap-4 w-[60%]">
                      <h1
                        className={`${styles.embla__slide__title} text-[35px] font-bold`}
                      >
                        {slide.title}
                      </h1>
                      <div className="flex gap-4 text-[20px] font-semibold">
                        <span>{slide.certificate}</span>
                        <div className="border-r-2 border-black" />
                        <span>{slide.genres}</span>
                      </div>
                      <div>
                        <span>{slide.description}</span>
                      </div>
                      <button className="px-8 py-4 bg-black text-white w-50 rounded-xl font-semibold hover:cursor-pointer">
                        Book Now
                      </button>
                    </div>
                    <div className="min-h-50 w-full lg:w-auto shadow-xl rounded-xl m-10">
                      <img
                        src={slide.bg}
                        alt={slide.title}
                        className="h-[80%] lg:h-full w-full object-cover"
                      />
                      <div className="flex flex-col lg:hidden p-4">
                        <h1 className="text-black font-semibold">
                          {slide.title}
                        </h1>
                        <span>{slide.certificate}</span>
                      </div>
                    </div>
                  </div>
                )} */}

                {variant === "movie" && (
                  <div
                    className={`${styles.embla__slide__inner} relative z-100 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:mx-10 hover:cursor-pointer`}
                    onClick={() => {
                      handleBookShow(slide.id);
                      router.push(navigateTo);
                    }}
                  >
                    <div className="hidden lg:flex flex-col gap-4 w-[55%]">
                      <h1 className="text-[35px] font-bold">{slide.title}</h1>

                      <div className="flex gap-4 text-[20px] font-semibold">
                        <span>{slide.certificate}</span>
                        <div className="border-r-2 border-black" />
                        <span>{slide.genres}</span>
                      </div>

                      <p className="text-[18px] max-w-180">
                        {slide.description}
                      </p>

                      <button className="px-8 py-4 bg-black text-white w-50 rounded-xl font-semibold hover:cursor-pointer">
                        Book now
                      </button>
                    </div>

                    <div className="w-full lg:w-83.75 lg:h-111.25 bg-white rounded-xl overflow-hidden shadow-xl lg:mr-15">
                      <img
                        src={slide.bg}
                        alt={slide.title}
                        className="w-full h-67.5 lg:h-full object-cover"
                      />

                      <div className="flex flex-col lg:hidden px-2 py-3 bg-white">
                        <h1 className="text-[18px] text-black font-semibold">
                          {slide.title}
                        </h1>
                        <span className="text-gray-500 font-semibold">
                          {slide.certificate}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {variant === "event" && (
                  <div
                    key={slide.id}
                    className={`${styles.embla__slide__inner} relative z-100 flex items-center justify-between hover:cursor-pointer p-4 md:p-10`}
                    onClick={() => {
                      handleBookShow(slide.id);
                      router.push(navigateTo);
                    }}
                  >
                    <div className="hidden lg:flex lg:justify-between flex-col gap-4 w-[60%]">
                      <p className="text-[14px] font-semibold text-gray-500">
                        {slide.date},{slide.slots}
                      </p>

                      <h1
                        className={`${styles.embla__slide__title} text-[32px] font-bold`}
                      >
                        {slide.title}
                      </h1>

                      <p className="text-[16px] text-gray-700 font-medium">
                        {slide.venue}
                        {/* {slide.city} */}
                      </p>

                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-xl w-fit">
                        {slide.category}
                      </span>

                      <p className="text-[18px] font-semibold">
                        {`₹${slide.price} onwards`}
                      </p>

                      <button className="px-8 py-4 bg-black text-white w-50 rounded-xl font-semibold hover:cursor-pointer">
                        Book Now
                      </button>
                    </div>
                    <div className="h-full w-full lg:w-auto shadow-xl rounded-xl overflow-hidden">
                      <img
                        src={slide.image_url}
                        alt={slide.title}
                        className="h-[80%] lg:h-full w-full object-cover"
                      />

                      <div className="flex flex-col lg:hidden gap-1 px-2 py-1">
                        <h1 className="text-[12px] text-black font-semibold">
                          {slide.title}
                        </h1>

                        <p className="text-[13px] text-gray-500 font-semibold">
                          {`₹${slide.price} onwards`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ),
          )}
        </div>

        {variant != "StoryFeature" && (
          <button
            className={`${styles.embla__button} ${styles["embla__button--prev"]} hidden lg:flex absolute left-2 top-[50%] justify-center items-center rounded-3xl ${variant == DINING_VARIENT ? "text-white border-2 border-[#535357] p-2" : "text-black"}`}
            onClick={() => {
              onPrevButtonClick();
              startAutoPlay(variant);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 640 640"
              fill="currentColor"
            >
              <path
                fill="currentColor"
                d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z"
              />
            </svg>
          </button>
        )}

        {variant != "StoryFeature" && (
          <button
            className={clsx(
              styles.embla__button,
              styles["embla__button--next"],
              "hidden lg:flex  rounded-3xl absolute right-2 top-[50%] justify-center items-center",
              variant == DINING_VARIENT
                ? "text-white border-2 border-[#535357] p-2"
                : "text-black",
            )}
            onClick={() => {
              onNextButtonClick();
              startAutoPlay(variant);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 640 640"
              fill="currentColor"
            >
              <path
                fill="currentColor"
                d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"
              />
            </svg>
          </button>
        )}
      </div>

      {variant != DINING_VARIENT && variant != "StoryFeature" && (
        <div className={styles.embla__controls}>
          <div className={styles.embla__dots}>
            {(slides ?? []).map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => {
                  onDotButtonClick(index);
                  startAutoPlay(variant);
                }}
                className={`${styles.embla__dot} ${index === selectedIndex ? styles["embla__dot--selected"] : ""}`}
              />
            ))}
          </div>
        </div>
      )}
      {variant == DINING_VARIENT && (
        <div className={styles.embla__dots}>
          <div
            className={`${styles.embla__dots} mt-5 space-x-2 flex justify-center w-full`}
          >
            {slides.map((items: any, index: number) => {
              return (
                <div
                  key={index}
                  className={clsx(
                    "hidden lg:flex hover:cursor-pointer",
                    index == selectedIndex &&
                      "scale-110 transition-all duration-300",
                  )}
                >
                  <img
                    src={items.src}
                    alt="diningModalImage"
                    className={clsx(
                      "h-15 w-15 object-fill rounded-lg",
                      index == selectedIndex && "border-3 border-[#535357]",
                    )}
                    onClick={() => {
                      onDotButtonClick(index);
                    }}
                  />
                </div>
              );
            })}
            <div className="flex justify-center lg:hidden text-white">
              <h1>
                {selectedIndex + 1} / {slides.length}
              </h1>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;

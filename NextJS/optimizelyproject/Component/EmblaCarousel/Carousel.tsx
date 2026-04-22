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
      }, 7000);
    },
    [emblaApi],
  );

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
      className={clsx(styles.embla, variant == DINING_VARIENT && "h-screen")}
    >
      <div className={`${styles.embla__viewport} relative`} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides?.map((slide: any) =>
            variant === DINING_VARIENT ? (
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
      </div>

      {variant != DINING_VARIENT ? (
        <div className={styles.embla__controls}>
          <div className={styles.embla__dots}>
            {slides.map((_: any, index: number) => (
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
      ) : (
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

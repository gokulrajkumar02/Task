"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SECTIONS = [
  { id: "tired", bg: "#aaa8ff" },
  { id: "framer", bg: "#282E3F" },
  { id: "third", bg: "#1a1a1a" },
];

const carouselData = [
  { id: 1, label: "Advanced sleep metrics", imageUrl: "/CarouselImg5.jpg" },
  {
    id: 2,
    label: "Intelligent relaxation experience",
    imageUrl: "/CarouselImg4.jpg",
  },
  { id: 3, label: "Sleep-sync audio", imageUrl: "/CarouselImg3.jpg" },
  {
    id: 4,
    label: "Intelligent relaxation experience",
    imageUrl: "/CarouselImg2.jpg",
  },
  {
    id: 5,
    label: "Premium earbuds for everyday use",
    imageUrl: "/CarouselImg1.jpg",
  },
];

const ParallexScroll = () => {
  const [isDesktop, setIsDesptop] = useState(false);

  const [sectionColor, setSelectionColor] = useState(SECTIONS[0].bg);

  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const checkWindowSize = () => setIsDesptop(window.innerWidth >= 760);
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const topBudY = useTransform(scrollYProgress, [0, 0.5], [-20, 60]);

  const bottomBudY = useTransform(scrollYProgress, [0, 0.5], [20, -60]);

  const topBud = isDesktop ? topBudY : 40;
  const bottomBud = isDesktop ? bottomBudY : -40;

  return (
    <motion.div
      className="w-full h-full"
      animate={{ backgroundColor: sectionColor }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <section
        ref={sectionRef}
        className="relative w-full py-auto"
        style={{ height: isDesktop ? "180vh" : "auto" }}
      >
        <div
          style={{ height: isDesktop ? "100vh" : "auto" }}
          className={clsx(
            "flex items-center justify-center overflow-hidden",
            isDesktop ? "sticky top-0" : "py-20 md:py-24 px-6",
          )}
        >
          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={controls}
            onViewportEnter={() => {
              setSelectionColor(SECTIONS[0].bg);
              controls.start({
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 1.5, ease: "easeOut" },
              });
            }}
            className="text-center px-3 md:px-6 max-w-3xl mx-auto"
          >
            <h1 className="text-white font-light mb-7 text-[45px] md:text-[75px] leading-[100%]">
              Tired isn't normal
            </h1>
            <p className="text-white text-[20px] w-full md:max-w-100 mx-auto">
              Constant exhaustion chips away at who we are. It dulls our focus,
              flattens our mood, and disconnects us from our lives.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative w-full"
        style={{ height: isDesktop ? "200vh" : "auto" }}
      >
        <div
          className={clsx(
            "flex items-center justify-center overflow-hidden",
            isDesktop ? "sticky inset-0" : "",
          )}
          style={{ height: "120vh" }}
        >
          <div className="relative text-center max-w-4xl mx-auto w-full">
            <motion.div
              style={{ y: topBud, top: "-130px", left: "35%" }}
              className="absolute z-10"
            >
              <img
                src="/leftBuds.jpg"
                alt="top bud"
                className="w-[100px] md:w-[140px] object-contain"
              />
            </motion.div>

            <motion.div>
              <h1 className="text-white font-serif leading-[100%] text-[50px] md:text-[80px] relative z-100">
                Meet Smartbuds
              </h1>
            </motion.div>

            <motion.div
              style={{ y: bottomBud, top: "70px", left: "50%" }}
              className="absolute z-10"
            >
              <img
                src="/rightBuds.jpg"
                alt="bottom bud"
                className="w-[90px] md:w-[120px] object-contain"
              />
            </motion.div>

            <motion.div
              onViewportEnter={() => setSelectionColor("#282e3f")}
              className="mt-16"
            >
              <p className="text-white text-[26px] max-w-[500px] mx-auto mb-3">
                The first truly wireless earbuds designed to restore energy-not
                just measure it.
              </p>
              <p className="text-white text-[16px] max-w-[500px] mx-auto">
                Smartbuds respond to your brain's rhythm in real time,
                supporting deeper rest, clearer focus, and a more present state
                of mind.
              </p>
              <button className="hover:cursor-pointer bg-[#f5f1a1] text-black px-9.5 py-4 rounded-full text-[16px] mt-[40px] relative group overflow-hidden">
                <span className="absolute rounded-full inset-0 bg-[#cdc985] translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out" />

                <span className="relative z-100 text-black group-hover:text-white">
                  Order Now
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        onViewportEnter={() => setSelectionColor("#171c2f")}
        className="w-full px-4 md:px-8 flex justify-center"
      >
        <div className="flex justify-center px-5 md:px-18 pb-10 max-w-[1440px] overflow-hidden">
          <Carousel className="w-full flex flex-col select-none">
            <CarouselContent>
              {carouselData?.map((items, index) => (
                <CarouselItem
                  key={items.id}
                  className="basis-[230px] shrink-0 md:basis-[360px] hover:cursor-pointer rounded-lg mr-[28px] p-0 overflow-hidden rounded-lg"
                >
                  <div className="flex flex-col items-center h-full w-full">
                    <div className="group relative w-full h-[520px] rounded-lg overflow-hidden">
                      <img
                        src={items.imageUrl}
                        alt="CarouselImage"
                        className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-115 transition-all duration-800"
                      />
                      <div className="absolute inset-0 bg-black/40 z-100" />

                      <div className="absolute top-8 text-white z-200 left-15 text-[25px]">
                        {index + 1}
                      </div>

                      <div className="group-hover:-translate-y-5 transition-all duration-500 z-200 absolute left-7 md:left-15 bottom-0 mb-10 right-6 text-white text-[17px] md:text-[25px] font-medium max-w-[90%] md:max-w-[70%]">
                        {items.label}
                      </div>

                      <div className="absolute bottom-3 md:bottom-6 right-4 z-20">
                        <button className="w-10 h-10 rounded-full bg-white text-black text-[20px] flex justify-center items-center">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-5 h-5"><path fill="rgb(0, 0, 0)" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-end gap-2 mt-4 pr-2">
              <CarouselPrevious
                className="
                      static translate-y-0   
                      w-11 h-11 rounded-full
                      bg-[#313542] hover:bg-white
                      border border-white-300
                      text-white hover:text-black
                      transition-all duration-200
                    "
              />
              <CarouselNext
                className="
                  static translate-y-0
                  w-11 h-11 rounded-full
                  bg-[#313542] hover:bg-white
                  border border-gray-300
                  text-white hover:text-black
                  transition-all duration-200
                "
              />
            </div>
          </Carousel>
        </div>
      </motion.section>

      <motion.h1
        initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ textAlign: "center", fontSize: "30px" }}
      >
        blur text
      </motion.h1>
    </motion.div>
  );
};

export default ParallexScroll;

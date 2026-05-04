// "use client";
// import { useDistrict } from "@/Context/DistrictContext";
// import { useState, useEffect, useCallback } from "react";

// export const useDotButton = (emblaApi: any) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const { diningCarouselIndex } = useDistrict();
//   const onDotButtonClick = useCallback(
//     (index: any) => {
//       if (!emblaApi) return;
//       emblaApi.scrollTo(index);
//     },
//     [emblaApi],
//   );

//   useEffect(() => {
//     if (!emblaApi) return;
//     const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
//     onSelect();
//     emblaApi.on("select", onSelect).on("reInit", onSelect);
//     return () => {
//       emblaApi.off("select", onSelect).off("reInit", onSelect);
//     };
//   }, [emblaApi]);

//   return { selectedIndex, onDotButtonClick };
// };


"use client";
import { useState, useEffect, useCallback } from "react";

export const useDotButton = (emblaApi: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onDotButtonClick = useCallback(
    (index: any) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  return { selectedIndex, onDotButtonClick };
};

"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const Scroll = () => {
  const { scrollY } = useScroll();

  // slower movement
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="h-[200vh] bg-black overflow-hidden">
      
      <motion.img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="parallax"
        style={{ y }}
        className="w-full h-screen object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold">
          Parallax Scroll
        </h1>
      </div>

    </div>
  );
}

export default Scroll
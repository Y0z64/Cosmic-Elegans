import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-black font-['serif'] tracking-wide text-white text-[4.5rem] md:text-[12rem] relative z-10"
      >
        DOCS
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0 bg-spacebg bg-cover"
        style={{
          backgroundPosition: "bottom",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20 -bottom-1 bg-frame2 bg-cover"
        style={{
          backgroundPosition: "bottom",
        }}
      />
      <div
        className="absolute inset-0 z-20 -bottom-1 bg-frame1 bg-cover"
        style={{
          backgroundPosition: "bottom",
        }}
      />
        <div
        className="absolute inset-0 z-20"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
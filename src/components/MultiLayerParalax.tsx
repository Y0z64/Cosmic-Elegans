import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const layer1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >

      <div
        className="h-[21.875rem] w-[35rem] relative z-10 scale-150" 
        style={{y: textY}}
      >
        <span className="absolute tracking-[2.5625rem] text-white font-oswald font-bold text-[6.25rem]">COSMIC</span>
        <span className="absolute top-[4.75rem] text-[9.375rem] text-white font-oswald font-bold ">ELEGANS</span>
      </div>

      <div
        className="absolute inset-0 z-0 bg-spacebg bg-fixed"
      />

      <motion.div
        className="absolute inset-0 -bottom-[1px] z-20"
        style={{
          backgroundImage: `url(/frame2.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

        <motion.div
        className="absolute inset-0 -bottom-[1px] z-30"
        style={{
          backgroundImage: `url(/frame3.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
    </div>
  );
}
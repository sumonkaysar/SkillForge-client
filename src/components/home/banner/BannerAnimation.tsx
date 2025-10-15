"use client";

import developerAnimation from "@/assets/animations/dev-animation.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

export default function BannerAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Lottie
        animationData={developerAnimation}
        loop
        autoplay
        className="max-w-full sm:w-[400px] md:w-[500px]"
      />
    </motion.div>
  );
}

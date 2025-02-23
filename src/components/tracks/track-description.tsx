"use client";

import { motion } from "framer-motion";

import { fadeInUpVariants } from "@/components/tracks/tracks-animations";

export function TrackDescription() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      variants={fadeInUpVariants}
      className="text-center mb-16"
    >
      <p className="mx-auto max-w-2xl text-base text-gray-400">
        Embark on a journey where the
        <span className="font-bold text-white"> boundaries </span>
        of possibility are pushed to new horizons.
      </p>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

import Heading from "@/components/ui/Heading";
import { fadeInUpVariants } from "@/components/tracks/tracks-animations";

export function TrackHeading() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-100px" }}
      className="relative mb-16 mx-auto w-full"
    >
      <div className="md-108 w-full md:pb-2">
        <motion.div variants={fadeInUpVariants}>
          <Heading
            title="TRACKS"
            geometry="Cubedodecahedron"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
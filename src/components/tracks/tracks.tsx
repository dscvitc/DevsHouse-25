"use client";

import { Mona_Sans } from "next/font/google";
import { motion } from "framer-motion";

import { tracks } from "@/data/tracks";

import { TrackHeading } from "@/components/tracks/track-heading";
import { TrackDescription } from "@/components/tracks/track-description";
import { TrackItem } from "@/components/tracks/track-item";
import { RegisterSection } from "@/components/tracks/register-section-tracks";
import { containerVariants } from "@/components/tracks/tracks-animations";

const monasans = Mona_Sans({ subsets: ["latin"] });

export default function Tracks() {
  return (
    <div className={`px-4 py-16 ${monasans.className} w-full`} id="tracks">
      <TrackHeading />
      <TrackDescription />
      
      <div className="mx-auto max-w-2xl mt-20">
        <div className="relative w-full">
          <div className="absolute left-6 top-0 h-full w-1 bg-white" />
          
          <motion.div 
            className="space-y-16 max-sm:space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
          >
            {tracks.map((track, index) => (
              <TrackItem 
                key={track.title}
                track={track}
                isLast={index === tracks.length - 1}
              />
            ))}
            <RegisterSection />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
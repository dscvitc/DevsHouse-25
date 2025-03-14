"use client";

import React from "react";
import { Space_Grotesk } from "next/font/google";
import EmblaCarousel from './EmblaCarousel';
import Heading from "./ui/Heading";
import { EmblaOptionsType } from 'embla-carousel';

const space_grotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

const Timeline = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true };
  const SLIDES = [
    "/timeline/timeline_1.png",
    "/timeline/timeline_2.png",
    "/timeline/timeline_3.png",
  ];

  return (
    <div id="timeline" className="relative flex flex-col items-center md:pt-12 pt-20 p-6">
      <div className="relative flex items-center justify-center w-full mb-8">
        <div className="md-108 w-full">
          <Heading
            title="TIMELINE"
            geometry="Hyperboloid"
          />
        </div>
      </div>
      <div className="w-full max-w-4xl pt-20">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default Timeline;

"use client";

import React from "react";
import ResponsiveCarousel from "./ResponsiveCarousel";
import Heading from "./ui/Heading";

const Timeline = () => {
  return (
    <div id="timeline" className="relative flex flex-col items-center md:pt-12 pt-20 p-6">
      <div className="relative flex items-center justify-center w-full mb-8">
        <div className="md-108 w-full">
          <Heading title="TIMELINE" geometry="Hyperboloid" />
        </div>
      </div>
      <div className="w-full max-w-4xl pt-20">
        <ResponsiveCarousel imageUrl="/timeline/full_timeline.png" imageHeight={770} />
      </div>
    </div>
  );
};

export default Timeline;

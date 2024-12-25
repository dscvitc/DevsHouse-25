import React from "react";
import HeroBG from "../HeroBG";
import HeroContent from "../HeroContent";
import { MarqueeDemo } from "../marquee-section/Marquee";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-full">
      <HeroBG>
        <div className="container mx-auto h-[78%] flex justify-center items-end px-10">
          <HeroContent />
        </div>
        <MarqueeDemo />
      </HeroBG>
    </div>
  );
};

export default Hero;

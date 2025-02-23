import React from "react";
import HeroBG from "../HeroBG";
import HeroContent from "../HeroContent";
import { MarqueeDemo } from "../marquee-section/Marquee";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="max-md:h-[800px] h-[1000px] overflow-x-hidden">
      <HeroBG>
        <div className="container mx-auto h-[800px] max-md:min-h-[600px] min-h-[800px] max-h-[800px] max-md:h-[65%] pl-1 w-full flex justify-center items-end">
          <HeroContent />
        </div>
        <MarqueeDemo />
      </HeroBG>
    </div>
  );
};

export default Hero;

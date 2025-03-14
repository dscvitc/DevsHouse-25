import React from "react";
import HeroBG from "../HeroBG";
import HeroContent from "../HeroContent";
import { MarqueeDemo } from "../marquee-section/Marquee";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="relative w-full h-[1000px] max-md:h-[800px]">
        <HeroBG>
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="container mx-auto h-[800px] max-md:h-[600px] w-full flex justify-center items-end">
              <HeroContent />
            </div>
            <MarqueeDemo />
          </div>
        </HeroBG>
      </div>
    </div>
  );
};

export default Hero;

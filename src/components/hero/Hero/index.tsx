import React from "react";
import HeroBG from "../HeroBG";
import HeroContent from "../HeroContent";
import { MarqueeDemo } from "../marquee-section/Marquee";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-full overflow-x-hidden">
      <HeroBG>
        <div className="container mx-auto h-[700px] max-md:h-[65%]  flex justify-center items-end w-full ">
          <HeroContent />
        </div>
        <MarqueeDemo />
      </HeroBG>
    </div>
  );
};

export default Hero;

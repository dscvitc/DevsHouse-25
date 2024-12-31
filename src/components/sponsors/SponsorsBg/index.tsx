import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SponsorsBg = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-start relative items-center">
      <div className="absolute mx-auto top-1/2 sm:top-[250px] xl:top-1/2">
        {children}
      </div>
      {/* Background */}
      <div className="w-full h-full flex flex-col justify-start items-center z-[-50]">
        <Image
          src="/sponsors-new/line-wireframe.svg"
          height={100}
          width={100}
          alt="bg-wireframe"
          className="w-11/12 md:w-6/12 relative"
        />
        <div className="absolute mt-10 -top-[25px] md:-top-[75px] w-full">
          <Image
            src="/sponsors-new/white-coin.svg"
            height={170}
            width={170}
            alt="bg-wireframe"
            className="absolute md:start-1/4 w-1/4 md:w-2/12"
          />
          <Image
            src="/sponsors-new/blue-coin.svg"
            height={160}
            width={160}
            alt="bg-wireframe"
            className="absolute end-0 md:end-1/4 w-1/4 md:w-2/12"
          />
          <Image
            src="/sponsors-new/red-coin.svg"
            height={130}
            width={130}
            alt="bg-wireframe"
            className="absolute top-[100px] md:top-[250px] end-[55%] w-2/12 md:w-1/12"
          />
          <Image
            src="/sponsors-new/green-coin.svg"
            height={100}
            width={100}
            alt="bg-wireframe"
            className="absolute top-[125px] md:top-[300px] start-[55%] w-2/12 md:w-1/12"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorsBg;

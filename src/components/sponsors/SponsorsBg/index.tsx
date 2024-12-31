import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SponsorsBg = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-start relative items-center">
      <div className="absolute mx-auto container top-[270px]">
        {children}
      </div>
      {/* Background */}
      <div className="w-full h-full flex flex-col justify-start items-center z-[-50]">
        <Image
          src="/sponsors-new/line-wireframe.svg"
          height={100}
          width={100}
          alt="bg-wireframe"
          className="w-6/12 relative"
        />
        <div className="absolute mt-10 grid grid-cols-2 gap-4">
          <Image
            src="/sponsors-new/white-coin.svg"
            height={170}
            width={170}
            alt="bg-wireframe"
            className="relative lg:right-[130px] lg:-top-[30px]"
          />
          <Image
            src="/sponsors-new/blue-coin.svg"
            height={160}
            width={160}
            alt="bg-wireframe"
            className="relative lg:-right-[140px] lg:-top-[30px]"
          />
          <Image
            src="/sponsors-new/red-coin.svg"
            height={130}
            width={130}
            alt="bg-wireframe"
            className="relative lg:-top-[90px] lg:-right-[10px]"
          />
          <Image
            src="/sponsors-new/green-coin.svg"
            height={100}
            width={100}
            alt="bg-wireframe"
            className="relative lg:-top-[40px] lg:-right-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorsBg;

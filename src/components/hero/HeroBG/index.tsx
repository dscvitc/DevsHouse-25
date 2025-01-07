import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const HeroBG = ({ children }: Props) => {
  return (
    <div className=" flex flex-col justify-between w-full h-full">
      <div className="flex flex-col justify-start relative inset-0 w-full overflow-hidden h-full">
        {/* Done */}
        <div className="flex justify-between ">
          <Image
            src="/images/g91-2.svg"
            alt="bg-asset"
            height={400}
            width={280}
            className="-z-10 relative -top-20 max-md:-left-10 max-md:scale-75"
          />
          <Image
            src="/images/navbar-bg/cone.svg"
            alt="cone"
            height={100}
            width={200}
            className="-z-10 relative left-7 -top-[10px] h-[200px]"
          />
          <Image
            src="/images/cube.svg"
            alt="bg-asset-cube"
            height={488}
            width={260}
            className="-z-10 relative -left-48 -top-16 max-md:-top-20 max-md:hidden"
          />
          <Image
            src="/images/4-35.svg"
            alt="bg-asset"
            height={580}
            width={600}
            className="-z-10 relative -left-[292px] -top-[40px]"
          />
          <Image
            src="/images/rectangle-67.svg"
            alt="bg-asset"
            height={420}
            width={380}
            className="-z-10 relative -left-[443px] -top-[60px]"
          />
          <Image
            src="/images/holo-7.svg"
            alt="bg-asset"
            height={388}
            width={290}
            className="z-[1000] relative -top-6 -left-[480px] pointer-events-none"
          />
        </div>

        <div className="flex justify-between w-full">
          <Image
            src="/images/wireframe-50.svg"
            alt="bg-asset"
            height={250}
            width={250}
            className="-z-10 relative -top-[100px] opacity-50 max-md:-left-28 max-md:opacity-30"
          />

          <Image
            src="/images/rectangle-66.svg"
            alt="bg-asset"
            height={402}
            width={424}
            className="-z-50 relative -right-50 -top-28 "
          />
          <div className="-z-50  absolute right-0 top-[260px] w-[424px] h-[544px] bg-gradient-to-r from-transparent via-[#131313] to-[#131313] opacity-50 pointer-events-none"></div>
          {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#131313] to-[#131313] opacity-50 pointer-events-none"></div> */}
        </div>
      </div>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default HeroBG;

import Image from "next/image";
import React from "react";

type Props = {
  sponsor: {
    id: number;
    img: string;
    title: string;
    className?: string;
  };
};

const SponsorCard = ({ sponsor }: Props) => {
  return (
    <div className="h-full w-full mx-auto flex flex-col justify-center items-center">
      <Image
        src={sponsor.img}
        height={100}
        width={100}
        alt="sponsor"
        className="h-auto w-3/4 md:w-36 border object-cover rounded-[13px] md:rounded-[40px]"
      />
      <div className="font-mona-sans-semi-bold text-xs sm:text-sm md:text-lg">
        {sponsor.title}
      </div>
    </div>
  );
};

export default SponsorCard;

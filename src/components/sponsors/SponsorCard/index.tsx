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
    <div className="h-[300px] w-[220px]  flex flex-col justify-center items-center">
      <Image
        src={sponsor.img}
        height={100}
        width={100}
        alt="sponsor"
        className="h-full w-full object-cover rounded-[40px] border"
      />
      <div className="font-mona-sans-semi-bold">
        {sponsor.title}
      </div>
    </div>
  );
};

export default SponsorCard;

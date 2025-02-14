import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Mona_Sans } from "next/font/google";
import Heading from "./ui/Heading";

const Mona = Mona_Sans({ weight: "700", subsets: ["latin"] });

// Import images dynamically
const imageCount = 31;
const images: string[] = Array.from({ length: imageCount }, (_, i) => 
  `/comm/${i + 1}.png`
);

export default function Community(): React.JSX.Element {
  return (
    <div id="community" className="flex flex-col justify-center items-center bg-bg-black w-full gap-4 md:gap-6 ">
      {/* <div className="w-[90%] md:w-[80%] h-auto">
        <h1 className={text-5xl ${Mona.className} text-white text-center mb-6 mt-24 md:mt-12}>
          Community Partners
        </h1>
      </div> */}
      <div className="md-108 w-full flex items-center justify-center">
        <Heading title="Community Partners" geometry="Spiral" />{" "}
        {/* Add margin-bottom here */}
      </div>
      <Marquee>
        {images.slice(0, Math.ceil(images.length / 2)).map((src: string, index: number) => (
          <Image
        key={index}
        src={src}
        alt={`Community Partner ${index + 1}`}
        height={200}
        width={300}
        className="md:mx-12 w-1/2 md:w-[60%]"
          />
        ))}
      </Marquee>
      <Marquee direction="right">
        {images.slice(Math.ceil(images.length / 2)).map((src: string, index: number) => (
          <Image
            key={index + images.length / 2}
            src={src}
            alt={`Community Partner ${index + 1}`}
            height={200}
            width={300}
            className="md:mx-12 w-1/2 md:w-[60%]"
          />
        ))}
      </Marquee>
    </div>
  );
}

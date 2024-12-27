import React from "react";
import Image from "next/image";
import { speakers } from "@/data/speakers";
import { Hubot_Sans } from "next/font/google";
import Heading from '../components/ui/Heading'


const hubot = Hubot_Sans({ subsets: ["latin"] });

export default function Speakers() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-8">
      {/* <div className="h-60 w-64 bg-[url('/speakers/bg1.svg')] bg-contain bg-no-repeat bg-center flex items-center justify-center m-6">
        <h2 className={`text-4xl font-extrabold ${monasans.className}`}>SPEAKERS</h2>
      </div> */}
      <div className=" z-0">
        <Heading title="SPEAKERS" geometry="Horizontalhyperboloid"/> {/* Add margin-bottom here */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-[url('/speakers/bg2.svg')] bg-contain bg-no-repeat bg-center">
        {speakers.map((speaker, index) => {
          return (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/5 backdrop-blur-md rounded-t-xl"
            >
              <Image
                src={speaker.image}
                alt="speaker image"
                width={0}
                height={0}
                sizes="24vw"
                className="w-full h-auto"
              />
              <div className={`p-4 text-left ${hubot.className}`}>
                <h3 className="">{speaker.name}</h3>
                <p className="text-xs font-extralight">{speaker.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

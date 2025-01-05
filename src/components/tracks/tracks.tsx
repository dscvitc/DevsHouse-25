import Image from "next/image";
import { Mona_Sans } from "next/font/google";
import { Button } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { DottedSeperator } from "@/components/tracks/dotted-seperator";
import { tracks } from "@/data/tracks";
import Heading from "../ui/Heading";
const monasans = Mona_Sans({ subsets: ["latin"] });

export default function Tracks() {
  return (
    <div
      className={`px-4 py-16 ${monasans.className} w-full`}
      id="tracks"
    >
      {/* Intro Section with Background */}
      <div className="relative mb-16 mx-auto w-full">
        {/* <div className="absolute inset-0">
          <Image
            src="/tracks/tracks-bg.svg"
            alt="Tracks Background"
            width={250}
            height={150}
            className="w-full h-full object-contain"
            priority
          />
        </div> */}
        {/* <div className="relative z-10 flex items-center justify-center h-[150px]">
          <h1 className="text-3xl font-bold text-white">TRACKS</h1>
        </div> */}
        <div className="md-108 w-full md:pb-2">
          <Heading
            title="TRACKS"
            geometry="Cubedodecahedron"
          />{" "}
          {/* Add margin-bottom here */}
        </div>
      </div>

      <div className="text-center mb-16">
        <p className="mx-auto max-w-2xl text-base text-gray-400">
          Embark on a journey where the
          <span className="font-bold text-white">
            {" "}
            boundaries{" "}
          </span>
          of possibility are pushed to new horizons.
        </p>
      </div>

      {/* Tracks Section */}
      <div className="mx-auto max-w-2xl mt-20">
        <div className="relative w-full">
          {/* Vertical timeline indicator */}
          <div className="absolute left-6 top-0 h-full w-1 bg-white" />

          <div className="space-y-16 max-sm:space-y-10">
            {tracks.map((track, index) => (
              <div key={track.title} className="relative">
                <div className="flex">
                  {/* Image */}
                  <div className="relative flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-black z-10">
                    <Image
                      src={`/tracks/${track.icon}`}
                      alt={`${track.title} icon`}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>

                  {/* Track Content */}
                  <div className="ml-8">
                    <div className="max-w-lg space-y-3 max-sm:space-y-1">
                      <h3
                        className={`text-3xl font-bold md:text-5xl gradient-text ${track.gradientClass}`}
                      >
                        {track.title}
                      </h3>
                      <p className="text-lg font-semibold tracking-wider text-[#AEAEAE] md:text-xl">
                        {track.number}
                      </p>
                      <p className="text-base leading-relaxed text-gray-300 md:text-lg max-sm:leading-[22px]">
                        {track.description}
                      </p>
                    </div>

                    {/* Dotted Separator */}
                    {index !== tracks.length - 1 && (
                      <div className="mt-8">
                        <DottedSeperator />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="relative">
              <div className="flex">
                <div className="relative flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-black z-10">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>

                <div className="ml-8 flex md:flex-row flex-col items-start md:items-center justify-center gap-6">
                  <p className="text-xl font-medium text-white md:text-2xl">
                    Let&apos;s redefine what&apos;s
                    possible.
                  </p>
                  <Link 
          target="_blank"
          href="https://devshouse25.devfolio.co/" 
          passHref
        >
                  <Button
                    size="compact-lg"
                    className="button-Sponsor"
                  >
                    Register Now!
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

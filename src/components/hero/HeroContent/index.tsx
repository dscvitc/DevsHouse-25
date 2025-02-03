"use client";

import React from "react";
import CountdownTimer from "../CountdownTimer";
import { Button } from "@mantine/core";
import Link from "next/link";

type Props = {};

const HeroContent: React.FC<Props> = () => {
  const targetDate = new Date("2025-04-04T00:00:00Z").getTime();

  return (
    <div className="flex flex-col justify-center items-center gap-y-0 w-full mt-4">
      <div className="flex flex-col justify-center items-start gap-y-0">
        <div className="flex flex-col justify-center items-start text-white w-full md:max-w-[875px]">
          <div className="flex flex-col justify-center max-md:items-center md:items-start">
            <div className="flex justify-center items-start">
              <div className="flex flex-col justify-center items-start">
                <span className="font-bold max-md:text-[45px] md:text-[100px] font-hubot-sans leading-none">
                  DEVSHOUSE'
                </span>
                <span className="flex max-md:flex-col justify-start gap-x-8 items-center w-full m-0 p-0 leading-none md:translate-x-4">
                  <div className="max-md:grid max-md:grid-cols-2 max-md:gap-x-5 flex justify-start gap-x-8 items-center">
                    <span className="col-span-1 font-mona-sans-bold font-extrabold text-[32px] max-md:text-[28px]">
                      HACK IT.
                    </span>
                    <span className="col-span-1 font-mona-sans-bold font-extrabold text-[32px] max-md:text-[28px]">
                      BUILD IT.
                    </span>
                  </div>
                  <span className="font-mona-sans-bold font-extrabold text-[32px]">OWN IT.</span>
                </span>
              </div>
              <div className="font-bold leading-none max-md:text-[25px] md:text-[120px] p-0 m-0 font-hubot-sans bg-gradient-to-b from-[#2158E2] to-[#958AF6] text-transparent bg-clip-text">
                25
              </div>
            </div>
            <div className="max-md:text-base md:text-[22px] text-[#AEAEAE] text-left font-mona-sans max-md:mt-3 px-4">
              DevsHouse '25 is a{" "}
              <span className="text-[#5B8EFF]">national-level</span> hackathon where students from colleges across the country will have{" "}
              <span className="text-[#FF8171]">36 hours</span> to develop real-world solutions using a range of cutting-edge tech stacks.
            </div>

            <div className="max-md:text-base md:text-[26px] text-[#AEAEAE] text-center font-mona-sans mt-2 px-4">
              <a
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Devshouse+25&dates=20250404T000000Z/20250406T235959Z&details=Event+Details&location=Event+Location"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#AEAEAE]"
              >
                <span className="text-[#5B8EFF]">Mark your calendar:</span>{" "}
                <span className="font-bold text-[#FF8171]">4th to 6th April</span>
              </a>
            </div>
          </div>
        </div>


        <div className="px-4">
          <CountdownTimer targetTime={targetDate} />
        </div>

        <div className="flex md:gap-x-4 max-md:justify-center max-md:gap-x-4 max-md:px-2 w-full">
          <Link target="_blank" href="https://devshouse25.devfolio.co/" passHref>
            <Button size="compact-lg" className="button-Sponsor mt-3 md:mx-4">Register Now!</Button>
          </Link>
          <Link target="_blank" href="https://discord.com/invite/UFfPjTtzh7" passHref>
            <Button size="compact-lg" className="button-Sponsor mt-3 md:mx-4">Community Page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

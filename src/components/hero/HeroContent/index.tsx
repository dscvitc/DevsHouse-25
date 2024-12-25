"use client";

import React, { useEffect, useState } from "react";
import CountdownTimer from "../CountdownTimer";
import { Button } from "@/components/ui/button";

type Props = {};

const HeroContent = (props: Props) => {
  //   * Change this time for the countdown timer
  const targetTimeInSeconds = 200000;

  const [timeLeft, setTimeLeft] = useState<number>(60 * 1); // 5 minutes countdown in seconds

  // Update the countdown timer every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId); // Stop the timer once it reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // Format the time into mm:ss format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="flex flex-col justify-center items-start gap-y-0">
      <div className=" flex flex-col justify-center items-center text-white w-full md:max-w-[875px] ">
        <div className="flex flex-col justify-center max-md:items-center md:items-start">
          <div className="flex justify-center items-start">
            <div className="flex flex-col justify-center items-start">
              <span className="font-bold max-md:text-[50px] md:text-[100px] font-hubot-sans leading-none">
                DEVSHOUSE'
              </span>
              <span className="flex max-md:flex-col justify-start gap-x-8 items-center w-full m-0 p-0 leading-none">
                <div className="max-md:grid max-md:grid-cols-2 max-md:gap-x-5 flex justify-start gap-x-8 items-center ">
                  <span className="col-span-1 font-mona-sans-bold font-extrabold text-[32px] max-md:text-[28px]">
                    HACK IT.
                  </span>
                  <span className="col-span-1 font-mona-sans-bold font-extrabold text-[32px] max-md:text-[28px]">
                    BUILD IT.
                  </span>
                </div>
                <span className="font-mona-sans-bold  font-extrabold text-[32px]">
                  OWN IT.
                </span>
              </span>
            </div>
            <div className="font-bold leading-none max-md:text-[25px] md:text-[120px] p-0 m-0 font-hubot-sans bg-gradient-to-b from-[#2158E2] to-[#958AF6] text-transparent bg-clip-text">
              25
            </div>
          </div>

          <div className="max-md:text-base md:text-[22px] text-[#AEAEAE] text-left font-mona-sans max-md:mt-6">
            DevsHouse '25 is a{" "}
            <span className="text-[#5B8EFF]">
              national-level
            </span>{" "}
            hackathon where students from colleges across
            the country will have{" "}
            <span className="text-[#FF8171]">36 hours</span>{" "}
            to develop real-world solutions using a range of
            cutting-edge tech stacks.
          </div>
        </div>
      </div>
      <div className="mt-4">
        <CountdownTimer targetTime={targetTimeInSeconds} />
      </div>
      <button className="mt-4 text-white">
        Register Now!
      </button>
    </div>
  );
};

export default HeroContent;

'use client';

import React, { useEffect, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import useWindowSize from '@/hooks/use-window-size';
import vitLogo from '@/../public/images/countdown/vit_logo.png';
import Image from 'next/image';

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const { width } = useWindowSize();
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [targetTime, setTargetTime] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Responsive styles for the flip digits
  const digitStyle = {
    width: width < 640 ? 50 : width < 768 ? 70 : 130,
    height: width < 640 ? 70 : width < 768 ? 100 : 190,
    fontSize: width < 640 ? 36 : width < 768 ? 60 : 130,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 12,
    border: '2px solid white',
    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(6px)',
  };

  const labelStyle = {
    fontSize: width < 640 ? 12 : width < 768 ? 16 : 30,
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    marginTop: 8,
  };

  // Function to start the countdown with 36 hours (36 * 3600 * 1000 ms)
  const startCountdown = () => {
    setTargetTime(Date.now() + 36 * 3600 * 1000);
    setCountdownStarted(true);
  };

  return (
    <div className='h-screen overflow-hidden'>
      {/* GDSC Logo on the left */}
      <div className='absolute top-6 left-4 z-50'>
        <div className="flex justify-start items-center gap-x-5">
          <Image
            src={"images/gdsc-logo.svg"}
            alt="GDSC logo"
            height={40}
            width={80}
            className="max-md:h-10 max-md:w-10"
          />
          <div className="flex flex-col justify-center items-center text-white font-poppins">
            <span className="max-md:text-lg md:text-xl max-sm:text-[16px]">
              Google Developer Groups
            </span>
            <span className="text-xs max-sm:text-[10px] leading-none">
              Vellore Institute of Technology, Chennai
            </span>
          </div>
        </div>
      </div>

      {/* VIT Logo centered at the top */}
      <div className='absolute top-2 right-0 transform -translate-x-8 z-50'>
        <Image
          src={vitLogo}
          alt="VIT Logo"
          height={400}
          width={250}
        />
      </div>

      <BackgroundBeams />

      <div className="h-screen -translate-y-12 flex flex-col justify-center items-center text-white px-4">
        {/* Heading */}
        <div className="flex justify-center items-start max-md:flex-col max-md:items-center">
          <div className="flex flex-col justify-center items-start max-md:items-center">
            <span className="font-bold max-md:text-[45px] md:text-[100px] font-hubot-sans leading-none text-center">
              DEVSHOUSE&apos;
              <a className="font-bold leading-none md:text-[100px] p-0 m-0 font-hubot-sans bg-gradient-to-b from-[#2158E2] to-[#958AF6] text-transparent bg-clip-text">
                25
              </a>
            </span>
            <span className="flex max-md:flex-col justify-start gap-x-8 items-center w-full p-0 leading-none md:translate-x-4">
              <div className="max-md:grid max-md:grid-cols-2 max-md:gap-x-5 flex justify-start gap-x-8 items-center">
                {['HACK IT.', 'BUILD IT.'].map((text, idx) => (
                  <span
                    key={idx}
                    className="col-span-1 font-mona-sans-bold font-extrabold text-[32px] max-md:text-[24px]"
                  >
                    {text}
                  </span>
                ))}
              </div>
              <span className="font-mona-sans-bold font-extrabold text-[32px] max-md:text-[24px]">
                OWN IT.
              </span>
            </span>
          </div>
        </div>

        {/* Render the button or the countdown based on state */}
        <div className="w-full flex justify-center">
          {mounted && (
            <>
              {!countdownStarted ? (
                <button 
                  onClick={startCountdown} 
                  className="relative inline-flex mt-12 h-24 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-2xl font-bold text-white backdrop-blur-3xl">
                    LET THE HACKATHON BEGIN!
                  </span>
                </button>
              ) : (
                <div className="md:mt-20 mt-8 flex justify-center">
                  <div className="transform scale-[0.75] sm:scale-90 md:scale-100 origin-top">
                    <FlipClockCountdown
                      to={targetTime || Date.now()}
                      labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                      className="text-white"
                      digitBlockStyle={digitStyle}
                      labelStyle={labelStyle}
                      separatorStyle={{ color: 'white', size: '6px' }}
                      dividerStyle={{ color: '#444', height: 0.5 }}
                      duration={0.5}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex gap-8 justify-between">
        <Image
          src="/images/countdown/g91-2.svg"
          alt="bg-asset"
          height={400}
          width={280}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative bottom-56 max-md:-left-10 max-md:scale-75"
        />
        <Image
          src="/images/countdown/cone.svg"
          alt="cone"
          height={100}
          width={200}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative left-7 bottom-48 h-[200px]"
        />
        <Image
          src="/images/countdown/cube.svg"
          alt="bg-asset-cube"
          height={488}
          width={260}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-48 bottom-48 max-md:-top-20 max-md:hidden"
        />
        <Image
          src="/images/countdown/4-35.svg"
          alt="bg-asset"
          height={580}
          width={600}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-[200px] bottom-52"
        />
        <Image
          src="/images/countdown/Rectangle-67.svg"
          alt="bg-asset"
          height={420}
          width={380}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-[260px] bottom-48"
        />
        <Image
          src="/images/countdown/holo-7.svg"
          alt="bg-asset"
          height={420}
          width={380}
          priority
          placeholder="empty"
          loading="eager"
          className="z-[1000] relative bottom-56 -left-[290px] right-0 max-md:left-auto max-md:right-0"
        />
      </div>
    </div>
  );
};

export default Page;

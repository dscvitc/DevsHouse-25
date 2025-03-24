'use client';

import React, { useEffect, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import useWindowSize from '@/hooks/use-window-size';

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  const targetDate = new Date('2025-04-06T06:00:00');

  // Responsive styles
  const digitStyle = {
    width: width < 640 ? 50 : width < 768 ? 70 : 100,
    height: width < 640 ? 70 : width < 768 ? 100 : 160,
    fontSize: width < 640 ? 36 : width < 768 ? 60 : 100,
    backgroundColor: 'white', // Fully opaque to avoid seeing flipped digits
    color: 'black',
    borderRadius: 12,
    border: '2px solid white',
    boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(6px)', // Subtle glass effect
  };

  const labelStyle = {
    fontSize: width < 640 ? 12 : width < 768 ? 16 : 28,
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    marginTop: 8,
  };

  return (
    <>
      <BackgroundBeams />

      <div className="h-screen -translate-y-12 md:translate-y-0 flex flex-col justify-center items-center text-white px-4">
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

        {/* Countdown */}
        <div className="md:mt-20 mt-8 w-full flex justify-center">
          {mounted && (
            <div className="transform scale-[0.75] sm:scale-90 md:scale-100 origin-top">
              <FlipClockCountdown
                to={targetDate.getTime()}
                labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                className="text-white"
                digitBlockStyle={digitStyle}
                labelStyle={labelStyle}
                separatorStyle={{ color: 'white', size: '6px' }}
                dividerStyle={{ color: '#444', height: 0.5 }}
                duration={0.5}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;

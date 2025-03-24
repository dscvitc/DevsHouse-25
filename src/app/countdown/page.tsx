'use client';

import React, { useEffect, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const Page = () => {
  const [mounted, setMounted] = useState(false);

  // Set the target date: April 6, 2025 at 6:00 AM
  const targetDate = new Date('2025-04-06T06:00:00');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <BackgroundBeams />
      <div className="min-h-screen flex flex-col justify-center items-center text-white">
        <div className="flex justify-center items-start">
          <div className="flex flex-col justify-center items-start">
            <span className="font-bold max-md:text-[45px] md:text-[100px] font-hubot-sans leading-none">
              DEVSHOUSE&apos;
            </span>
            <span className="flex max-md:flex-col justify-start gap-x-8 items-center w-full m-0 p-0 leading-none md:translate-x-4">
              <div className="max-md:grid max-md:grid-cols-2 max-md:gap-x-5 flex justify-start gap-x-8 items-center">
                {['HACK IT.', 'BUILD IT.'].map((text, idx) => (
                  <span
                    key={idx}
                    className="col-span-1 font-mona-sans-bold font-extrabold text-[32px] max-md:text-[28px]"
                  >
                    {text}
                  </span>
                ))}
              </div>
              <span className="font-mona-sans-bold font-extrabold text-[32px]">
                OWN IT.
              </span>
            </span>
          </div>
          <div className="font-bold leading-none max-md:text-[25px] md:text-[120px] p-0 m-0 font-hubot-sans bg-gradient-to-b from-[#2158E2] to-[#958AF6] text-transparent bg-clip-text">
            25
          </div>
        </div>

        {/* Countdown Timer Section */}
        <div className="mt-10">
          {mounted && (
            <FlipClockCountdown
              to={targetDate.getTime()}
              labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
              className="text-white"
              digitBlockStyle={{
                width: 120,
                height: 180,
                fontSize: 120,
                backgroundColor: 'white',
                borderRadius: 12,
                color: 'black',
              }}
              labelStyle={{
                fontSize: 34,
                fontWeight: 700,
                textTransform: 'uppercase',
                marginTop: 8,
              }}
              separatorStyle={{ color: 'white', size: '6px' }}
              dividerStyle={{ color: '#444', height: 0.5 }}
              duration={0.5}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Page;

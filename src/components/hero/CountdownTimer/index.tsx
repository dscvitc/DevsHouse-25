import WordRotate from "@/components/ui/word-rotate";
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetTime: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetTime,
}) => {
  const [timeLeft, setTimeLeft] = useState(targetTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  interface TimeFormat {
    days: string;
    hours: string;
    minutes: string;
    remainingSeconds: string;
  }

  const formatTime = (seconds: number): TimeFormat => {
    const days = Math.floor(seconds / 86400)
      .toString()
      .padStart(2, "0"); // 86400 seconds in a day
    const hours = Math.floor((seconds % 86400) / 3600)
      .toString()
      .padStart(2, "0"); // 3600 seconds in an hour
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0"); // 60 seconds in a minute
    const remainingSeconds = (seconds % 60)
      .toString()
      .padStart(2, "0"); // Remaining seconds

    return {
      days,
      hours,
      minutes,
      remainingSeconds,
    };
  };

  const { days, hours, minutes, remainingSeconds } =
    formatTime(timeLeft);

  return (
    <div className="font-bold flex items-center justify-center">
      <div className="flex items-center max-md:gap-x-3 md:gap-x-6 font-outline leading-none">
        <div className="flex items-end justify-center max-md:gap-x-2 md:gap-x-4">
          <WordRotate
            className="text-[30px] md:text-[122px] font-bold text-white/40 max-md:text-white/80"
            words={[days.toString()]}
          />
          <span className="text-[30px] md:text-[122px] text-white/40 max-md:text-white/80">
            d
          </span>
        </div>
        <span className="md:flex hidden flex-col items-center justify-end gap-y-3">
          <span className="p-2 border-2 border-white/40" />
          <span className="p-2 border-2 border-white/40" />
        </span>
        <span className="max-md:flex hidden text-white/40 max-md:text-white/80 text-[30px]">
          :
        </span>
        <div className="flex items-end justify-center max-md:gap-x-2 md:gap-x-4">
          <WordRotate
            className="text-[30px] md:text-[122px] font-bold text-white/40 max-md:text-white/80"
            words={[hours.toString()]}
          />
          <span className="text-[30px] md:text-[122px] text-white/40 max-md:text-white/80">
            h
          </span>
        </div>
        <span className="md:flex hidden flex-col items-center justify-end gap-y-3">
          <span className="p-2 border-2 border-white/40" />
          <span className="p-2 border-2 border-white/40" />
        </span>
        <span className="max-md:flex hidden text-white/40 max-md:text-white/80 text-[30px]">
          :
        </span>
        <div className="flex items-end justify-center max-md:gap-x-2 md:gap-x-4">
          <WordRotate
            className="text-[30px] md:text-[122px] font-bold text-white/40 max-md:text-white/80"
            words={[minutes.toString()]}
          />
          <span className="text-[30px] md:text-[122px] text-white/40 max-md:text-white/80">
            m
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

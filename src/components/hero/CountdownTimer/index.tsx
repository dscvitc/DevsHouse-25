import WordRotate from "@/components/ui/word-rotate";
import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const targetDate = new Date("2025-04-04T00:00:00Z").getTime();
  const currentDate = new Date().getTime();
  const initialTimeLeft = Math.floor((targetDate - currentDate) / 1000);

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

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

    return () => clearInterval(interval); 
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400).toString().padStart(2, "0");
    const hours = Math.floor((seconds % 86400) / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");

    return { days, hours, minutes, remainingSeconds };
  };

  const { days, hours, minutes, remainingSeconds } = formatTime(timeLeft);

  return (
    <div className="font-bold flex items-center justify-center">
      <div className="flex items-center max-md:gap-x-3 md:gap-x-6 font-outline leading-none">
        <div className="flex items-end justify-center max-md:gap-x-2 md:gap-x-4">
          <WordRotate
            className="text-[22px] md:text-[110px] font-bold text-white/40 max-md:text-white/80"
            words={[days]}
          />
          <span className="text-[22px] md:text-[110px] text-white/40 max-md:text-white/80">d</span>
        </div>
        <span className="md:flex hidden flex-col items-center justify-end gap-y-3">
          <span className="p-2 border-2 border-white/40" />
          <span className="p-2 border-2 border-white/40" />
        </span>
        <span className="max-md:flex hidden text-white/40 max-md:text-white/80 text-[22px]">:</span>
        <div className="flex items-end justify-center max-md:gap-x-2 md:gap-x-4">
          <WordRotate
            className="text-[22px] md:text-[110px] font-bold text-white/40 max-md:text-white/80"
            words={[hours]}
          />
          <span className="text-[22px] md:text-[110px] text-white/40 max-md:text-white/80">h</span>
        </div>
        <span className="md:flex hidden flex-col items-center justify-end gap-y-3">
          <span className="p-2 border-2 border-white/40" />
          <span className="p-2 border-2 border-white/40" />
        </span>
        <span className="max-md:flex hidden text-white/40 max-md:text-white/80 text-[22px]">:</span>
        <div className="flex items-end justify-center max-md:gap-x-2 md:gap-x-4">
          <WordRotate
            className="text-[22px] md:text-[110px] font-bold text-white/40 max-md:text-white/80"
            words={[minutes]}
          />
          <span className="text-[22px] md:text-[110px] text-white/40 max-md:text-white/80">m</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

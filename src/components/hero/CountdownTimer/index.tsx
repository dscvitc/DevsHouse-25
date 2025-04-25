import React, { useEffect, useState } from "react";
import WordRotate from "@/components/ui/word-rotate";

type CountdownTimerProps = {
  targetTime: number;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    return Math.max(Math.floor((targetTime - now) / 1000), 0);
  };

  const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return calculateTimeLeft();
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400).toString().padStart(2, "0");
    const hours = Math.floor((seconds % 86400) / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    return { days, hours, minutes };
  };

  const { days, hours, minutes } = formatTime(timeLeft);

  return (
    <div className="px-4">
      <div className="font-bold flex items-center justify-start">
        <div className="flex items-center gap-x-4 font-outline leading-none text-white/40">
       
          <div className="flex items-end justify-start gap-x-2">
            <div className="overflow-hidden">
              <h1 className="text-[30px] md:text-[122px] font-bold text-white/40 max-md:text-white/80">
                HACK ENDED!
              </h1>
            </div>
            <span className="text-[30px] md:text-[122px] text-white/40 max-md:text-white/80"></span>
          </div>
          </div>
          </div>
          </div>
  );
};

export default CountdownTimer;

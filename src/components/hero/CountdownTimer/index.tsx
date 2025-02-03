import WordRotate from "@/components/ui/word-rotate";
import React, { useEffect, useState } from "react";

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
    <div className="font-bold flex items-center justify-center">
      <div className="flex items-center gap-x-4 font-outline leading-none text-white/40">
        {[{ value: days, unit: "d" }, { value: hours, unit: "h" }, { value: minutes, unit: "m" }].map(({ value, unit }) => (
          <div key={unit} className="flex items-end justify-center gap-x-2">
            <WordRotate className="text-[22px] md:text-[110px] font-bold" words={[value]} />
            <span className="text-[22px] md:text-[110px]">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

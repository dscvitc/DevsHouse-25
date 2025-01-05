import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const row = [1, 2, 3, 4, 5, 6, 8, 9];

export function MarqueeDemo() {
  return (
    <Marquee
      reverse
      pauseOnHover
      className="[--duration:20s] border border-y-4 border-white/70 w-full py-2 bg-[#1A1A1A] mt-8 max-md:mt-32"
    >
      {row.map((_, idx) => (
        <div key={idx} className="flex gap-x-8">
          <div className="flex items-center justify-center">
            <Image
              src="/images/gdsc-angular.svg"
              alt="gdsc-angular"
              height={30}
              width={60}
            />
          </div>
          <MarqueeCard />
        </div>
      ))}
    </Marquee>
  );
}

export const MarqueeCard = () => {
  return (
    <div className="w-full">
      <div className="text-white font-bold font-hubot-sans-bold text-2xl">
        DevsHouse '25
      </div>
    </div>
  );
};

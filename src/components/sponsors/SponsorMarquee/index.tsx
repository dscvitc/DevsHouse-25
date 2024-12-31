import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const row = [1, 2, 3, 4, 5, 6, 8, 9];

export function SponsorMarquee() {
  return (
    <Marquee
      reverse
      pauseOnHover
      className="[--duration:20s] border border-y-4 border-white/70 w-full py-2 bg-[#1A1A1A] mt-12 max-md:mt-20"
    >
      {row.map((_, idx) => (
        <div
          key={idx}
          className="flex gap-x-6 justify-center items-center"
        >
          <div className="flex items-center justify-center">
            <Image
              src="/sponsors-new/marquee-diamond.svg"
              alt="gdsc-angular"
              height={28}
              width={28}
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
      <div className="text-white font-bold font-hubot-sans text-2xl">
        SPONSORS
      </div>
    </div>
  );
};

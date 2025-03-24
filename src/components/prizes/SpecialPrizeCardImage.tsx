import Image from "next/image";
import { Hubot_Sans } from "next/font/google";

const hubot = Hubot_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type trackProp = {
  trackLogo: string;
  trackText: string;
  color: string;
  imageWidth?: number;
  imageHeight?: number;
};


export default function SpecialPrizeCardImage({ trackLogo, trackText, imageWidth = 250, imageHeight = 100 }: trackProp) {
  return (
    <div className="w-screen flex flex-row justify-center justify-self-center text-center items-center lg:w-screen">
      <div className="group w-[300px] h-[300px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center transition-transform duration-500 ease-in-out hover:translate-y-3 hover:translate-x-3 lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
        <div className="flex flex-row justify-center items-center">
          <Image src={trackLogo} alt={``} width={imageWidth} height={imageHeight} />
        </div>
        <div className="w-full max-h-[75.26px] mt-4 text-center text-black text-[16px] font-bold xl:text-[21px]"
          style={hubot.style}
        >
          {trackText}
        </div>
      </div>
      <div className="w-[300px] h-[300px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
    </div>
  );
}


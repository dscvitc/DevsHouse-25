// this containes the heading and the diamond
import Image from "next/image";
import Diamond from "../../public/diamond.svg";
import { Inter, Inter_Tight } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const interTight = Inter_Tight({ subsets: ["latin"] });

export default function OrgHeader() {
  return (
    <div className="relative  h-[210px] sm:h-[300px]  flex justify-center pt-14 sm:pt-[75px] ">
      <Image
        src={Diamond}
        alt="Diamond Vector"
        layout="fill"
        objectFit="contain"
      ></Image>
      <h1
        className={`text-5xl sm:text-7xl font-extrabold tracking-tight ${inter.className}`}
      >
        ORGANIZERS
      </h1>
    </div>
  );
}

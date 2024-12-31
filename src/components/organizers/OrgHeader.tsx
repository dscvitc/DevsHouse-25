// this contains the heading and the diamond
import Image from "next/image";
import Diamond from "../../../public/diamond.svg";
import { Inter } from "next/font/google";
import Heading from '../ui/Heading'
const inter = Inter({ subsets: ["latin"] });

export default function OrgHeader() {
  return (
    <div className="relative h-[155px] md:h-[215px] lg:h-[225px] flex justify-center  pt-12 md:pt-16">
      {/* <Image
        src={Diamond}
        alt="Diamond Vector"
        layout="fill"
        objectFit="contain"></Image>
      <h1
        className={`text-xl md:text-2xl lg:text-4xl text-white font-extrabold tracking-tight ${inter.className}`}>
        ORGANIZERS
      </h1> */}
      <div className="md-108 w-full flex items-center justify-center mb-16">
        <Heading title="ORGANIZERS" geometry="Heart" />{" "}
        {/* Add margin-bottom here */}
      </div>
    </div>
  );
}

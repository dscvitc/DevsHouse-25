// this includes the cube and the wavy thingy
import Image from "next/image";
import Cube from "../../public/cube.svg";
import waveVector from "../../public/wavy.svg";

export default function OrgBg() {
  return (
    <div className=" bg-[url('../../public/wavy.svg')] bg-no-repeat bg-contain  bg-bottom flex justify-center">
      <Image className="" src={Cube} alt="WaveVector background"></Image>
    </div>
  );
}

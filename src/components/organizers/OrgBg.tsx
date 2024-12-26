import Image from "next/image";
import Cube from "../../../public/cube.svg";
import Wavy from "../../../public/wavy.svg";

export default function OrgBg() {
  return (
    <div
      className="bg-no-repeat bg-contain bg-bottom flex justify-center"
      style={{ backgroundImage: `url(${Wavy.src})` }} // Access `.src` for the path of the image
    >
      <Image
        className="size-[85%] -translate-y-36"
        src={Cube}
        alt="WaveVector background"
      />
    </div>
  );
}

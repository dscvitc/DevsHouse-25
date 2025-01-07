import Image from "next/image";
import Cube from "../../../public/OrganisersBG.svg";
import Wavy from "../../../public/wavy.svg";

export default function OrgBg() {
  return (
    <div
      className="bg-no-repeat bg-contain bg-bottom flex justify-center overflow-visible"
      style={{ backgroundImage: `url(${Wavy.src})` }} // Access `.src` for the path of the image
    >
      <Image
        className="xl:size-[85%] size-[100%] lg:-translate-y-36 md:-translate-y-20 -translate-y-12 "
        src={Cube}
        alt="Cube Vector"
      />
    </div>
  );
}

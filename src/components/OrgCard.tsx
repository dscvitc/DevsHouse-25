import "./OrgCard.css";
import Image from "next/image";
import Link from "next/link";

interface OrgCardProps {
  name: string;
  image: string;
  linkedIn: string;
}

export default function OrgCard({ name, image, linkedIn }: OrgCardProps) {
  return (
    <div className="relative outer overflow-visible">
      <div className="normal-div"></div>
      <div className="h-[272px] w-[245px] bg-transparent absolute top-[30px] left-[28px] right-[70px] z-10 inner-gradient-border"></div>
      <Image
        className="photo absolute"
        src={image}
        alt="Syed Omar Albeez"
        width={350}
        height={100}
      />
      <Link
        className="linkedin absolute"
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer">
        <Image src="linkedin.svg" alt="Linkedin" width={50} height={50} />
      </Link>
      <div className="name absolute">{name}</div>
    </div>
  );
}

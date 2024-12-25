// components/OrgCard.tsx
import React from "react";
import "./OrgCard.css";
import Image from "next/image";
import Link from "next/link";

interface OrgCardProps {
  name: string;
  image: string;
  linkedIn: string;
}

const OrgCard: React.FC<OrgCardProps> = ({ name, image, linkedIn }) => {
  return (
    <div className="orgcard-container">
      <Image
        className="photo "
        src={image}
        alt="Syed Omar Albeez"
        width={300}
        height={100}
      />
      <Link
        className="linkedin"
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer">
        <Image src="linkedin.svg" alt="Linkedin" width={50} height={50} />
      </Link>
      {/* Card 1 - Largest with Gradient Border */}
      <div className="orgcard orgcard-gradient-large "></div>

      {/* Card 2 - Medium */}
      <div className="orgcard orgcard-gradient-middle ">
        <p className="orgcard-text">{name}</p>
      </div>

      {/* Card 3 - Smallest with a Different Gradient */}
      <div className="orgcard orgcard-gradient-small "></div>
    </div>
  );
};

export default OrgCard;

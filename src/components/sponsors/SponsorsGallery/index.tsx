import React from "react";
import SponsorCard from "../SponsorCard";

type Props = {};

const sponsorsListRow1 = [
  {
    id: 1,
    img: "/sponsors-new/devfolio.jpg",
    title: "Ruby Sponsor",
  },
  {
    id: 2,
    img: "/sponsors-new/polygon.png",
    title: "Sapphire Sponsor",
  },
  {
    id: 3,
    img: "/sponsors-new/ethindia.jpg",
    title: "Emerald Sponsor",
  },
];

/* const sponsorsListRow2 = [
  {
    id: 4,
    img: "/sponsors-new/profile-img.png",
    title: "Topaz Sponsor",
    className: "",
  },
  {
    id: 5,
    img: "/sponsors-new/profile-img.png",
    title: "Ruby Sponsor",
    className: "relative top-[15px] md:top-[40px]",
  },
  {
    id: 6,
    img: "/sponsors-new/profile-img.png",
    title: "Ruby Sponsor",
    className: "relative top-[15px] md:top-[40px]",
  },
  {
    id: 7,
    img: "/sponsors-new/profile-img.png",
    title: "Ruby Sponsor",
    className: "",
  },
]; */

const SponsorsGallery = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-10 md:gap-y-28">
      <div className="grid grid-cols-3 sm:gap-5 md:gap-10">
        {sponsorsListRow1.map((sponsor) => (
          <div className="" key={sponsor.id}>
            <SponsorCard sponsor={sponsor} />
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-4 sm:gap-5 md:gap-10">
        {sponsorsListRow2.map((sponsor) => (
          <div
            className={sponsor.className}
            key={sponsor.id}
          >
            <SponsorCard sponsor={sponsor} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SponsorsGallery;

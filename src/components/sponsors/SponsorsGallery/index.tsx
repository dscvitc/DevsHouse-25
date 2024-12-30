import React from "react";
import SponsorCard from "../SponsorCard";

type Props = {};

const sponsorsListRow1 = [
  {
    id: 1,
    img: "/sponsors-new/sponsor-img1.jpg",
    title: "Ruby Sponsor",
  },
  {
    id: 2,
    img: "/sponsors-new/sponsor-img1.jpg",
    title: "Sapphire Sponsor",
  },
  {
    id: 3,
    img: "/sponsors-new/sponsor-img1.jpg",
    title: "Emerald Sponsor",
  },
];

const sponsorsListRow2 = [
  {
    id: 4,
    img: "/sponsors-new/sponsor-img1.jpg",
    title: "Topaz Sponsor",
    className: "",
  },
  {
    id: 5,
    img: "/sponsors-new/sponsor-img1.jpg",
    title: "Ruby Sponsor",
    className: "relative top-[40px]",
  },
  {
    id: 6,
    img: "/sponsors-new/sponsor-img1.jpg",
    title: "Ruby Sponsor",
    className: "relative top-[40px]",
  },
  {
    id: 7,
    img: "/sponsors-new/sponsor-img1.jpg",
    title: "Ruby Sponsor",
    className: "",
  },
];

const SponsorsGallery = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-28">
      <div className="flex justify-center gap-20">
        {sponsorsListRow1.map((sponsor) => (
          <div className="" key={sponsor.id}>
            <SponsorCard sponsor={sponsor} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-20">
        {sponsorsListRow2.map((sponsor) => (
          <div
            className={sponsor.className}
            key={sponsor.id}
          >
            <SponsorCard sponsor={sponsor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsGallery;

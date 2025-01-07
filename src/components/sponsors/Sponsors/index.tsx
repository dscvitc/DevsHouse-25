import React from "react";
import { SponsorMarquee } from "../SponsorMarquee";
import SponsorsBg from "../SponsorsBg";
import SponsorsGallery from "../SponsorsGallery";

type Props = {};

const Sponsors = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-0" id="sponsors">
      <SponsorMarquee />
      {/* background */}
      <SponsorsBg>
        <SponsorsGallery />
      </SponsorsBg>
    </div>
  );
};

export default Sponsors;

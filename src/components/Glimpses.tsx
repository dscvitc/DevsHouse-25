"use client";

import { useEffect } from "react";
import {
  Space_Grotesk,
  Hubot_Sans,
} from "next/font/google";
import Image from "next/image";

import Heading from "../components/ui/Heading";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const hubot = Hubot_Sans({
  subsets: ["latin"],
  weight: ["800", "700"],
});

const Panorama: React.FC = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://panorama-slider.uiinitiative.com/assets/index.c1d53924.css";
    document.head.appendChild(link);

    const preloadLink = document.createElement("link");
    preloadLink.rel = "modulepreload";
    preloadLink.href =
      "https://panorama-slider.uiinitiative.com/assets/vendor.dba6b2d2.js";
    document.head.appendChild(preloadLink);

    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src =
      "https://panorama-slider.uiinitiative.com/assets/index.d2ce9dca.js";
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preloadLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="my-8" id="glimpses">
        {/* <div
                    className="relative flex justify-center items-center my-3" style={{ height: 205 }} >
                    <Image className="absolute" src={Bgimage} alt="bgimage" width={200} height={200} />
                    <h2 className={`${mona.className} text-center text-6xl`}>GLIMPSES</h2>
                </div> */}
        <div
          className="relative flex justify-center items-center my-3"
          style={{ height: 205 }}
        >
          <Heading title="GLIMPSES" geometry="Sphere" />{" "}
          {/* Add margin-bottom here */}
        </div>
        <p className="text-center" style={space.style}>
          A sneak peek into the innovation, energy, and
        </p>
        <p className={` ${space.style} text-center`}>
          brilliance that shaped last year&apos;s incredible
          hackathon experience!
        </p>
        <h1
          className="text-center font-extrabold text-4xl md:text-7xl my-3 "
          style={hubot.style}
        >
          DEVSHOUSE&apos;24
        </h1>
        <div className="panorama-slider">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Image
                  className="slide-image w-[100px] h-[50px] sm:w-[100px] sm:h-[50px]"
                  src="/Glimpsesimages/image1.svg"
                  alt="image1"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image2.svg"
                  alt="image2"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image3.svg"
                  alt="image3"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image4.svg"
                  alt="image4"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image5.svg"
                  alt="image5"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image6.svg"
                  alt="image6"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image7.svg"
                  alt="image7"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image8.svg"
                  alt="image8"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image9.svg"
                  alt="image9"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panorama;

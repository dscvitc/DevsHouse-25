"use client";

import { useEffect } from "react";
import { Hubot_Sans, } from "next/font/google";
import Image from "next/image";
import Heading from "../components/ui/Heading";

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
      <div className=" py-20" id="glimpses">
        <div
          className="relative flex justify-center items-center mb-10"
          style={{ height: 205 }}
        >
          <Heading title="GLIMPSES" geometry="Sphere" />{" "}
        </div>
        <p className="text-center text-lg" style={hubot.style}>
          A sneak peek into the innovation, energy, and
        </p>
        <p className={` ${hubot.style} text-center text-lg`}>
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
                  src="/Glimpsesimages/image1.png"
                  alt="image1"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image2.png"
                  alt="image2"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image3.png"
                  alt="image3"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image4.png"
                  alt="image4"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image5.png"
                  alt="image5"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image6.png"
                  alt="image6"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image7.png"
                  alt="image7"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image8.png"
                  alt="image8"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Glimpsesimages/image9.png"
                  alt="image9"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image w-[100px] h-[50px] sm:w-[100px] sm:h-[50px]"
                  src="/Glimpsesimages/image10.png"
                  alt="image10"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image w-[100px] h-[50px] sm:w-[100px] sm:h-[50px]"
                  src="/Glimpsesimages/image11.png"
                  alt="image11"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image w-[100px] h-[50px] sm:w-[100px] sm:h-[50px]"
                  src="/Glimpsesimages/image12.png"
                  alt="image12"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
        <div className="flex justify-center items-center">
          <p className="text-center pr-2 pl-4" style={hubot.style}>
            Swipe Left
          </p>
          <Image
            src="/Glimpsesimages/arrow.png"
            alt="arrow"
            width={20}
            height={10}
          />
        </div>
      </div>
    </>
  );
};

export default Panorama;

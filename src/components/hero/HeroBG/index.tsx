"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type DeviceSize =
  | "mobile"
  | "tablet"
  | "laptop"
  | "monitor";

const HeroBG = ({ children }: Props) => {
  const [deviceSize, setDeviceSize] =
    useState<DeviceSize>("laptop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceSize("mobile");
      } else if (width < 800) {
        setDeviceSize("tablet");
      } else if (width < 1610) {
        setDeviceSize("laptop");
      } else {
        setDeviceSize("monitor");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const MonitorLayout = () => {
    return (
      <div className="flex justify-between">
        <Image
          src="/images/g91-2.svg"
          alt="bg-asset"
          height={400}
          width={360}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative max-[1599px]:border -top-20 max-md:-left-10 max-md:scale-75"
        />
        <Image
          src="/images/navbar-bg/cone.svg"
          alt="cone"
          height={700}
          width={700}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative max-[1599px]:left-7 max-[1588px]:-top-[10px] max-[1588px]:h-[200px] -left-10 -top-[10px] h-[250px]"
        />
        <Image
          src="/images/cube.svg"
          alt="bg-asset-cube"
          height={400}
          width={300}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative h-[400px] w-full  -left-[160px] -top-16 max-md:-top-20 max-md:hidden max-[1588px]:-left-48"
        />
        <Image
          src="/images/4-35.svg"
          alt="bg-asset"
          height={580}
          width={700}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-[320px] -top-[66px] max-[1588px]:-left-[292px]"
        />
        <Image
          src="/images/rectangle-67.svg"
          alt="bg-asset"
          height={420}
          width={450}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-[450px] -top-[70px] max-[1588px]:-left-[443px]"
        />
        <Image
          src="/images/holo-7.svg"
          alt="bg-asset"
          height={420}
          width={380}
          priority
          placeholder="empty"
          loading="eager"
          className="z-[1000] relative -top-12 right-[480px] max-md:left-auto max-md:right-0 max-[1588px]:-left-[490px]"
        />
      </div>
    );
  };
  const LaptopLayout = () => {
    return (
      <div className="flex justify-between">
        <Image
          src="/images/g91-2.svg"
          alt="bg-asset"
          height={400}
          width={280}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -top-20 max-md:-left-10 max-md:scale-75"
        />
        <Image
          src="/images/navbar-bg/cone.svg"
          alt="cone"
          height={100}
          width={200}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative left-7 -top-[10px] h-[200px]"
        />
        <Image
          src="/images/cube.svg"
          alt="bg-asset-cube"
          height={488}
          width={260}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-48 -top-16 max-md:-top-20 max-md:hidden"
        />
        <Image
          src="/images/4-35.svg"
          alt="bg-asset"
          height={580}
          width={600}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-[292px] -top-[66px]"
        />
        <Image
          src="/images/rectangle-67.svg"
          alt="bg-asset"
          height={420}
          width={380}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-[443px] -top-[70px]"
        />
        <Image
          src="/images/holo-7.svg"
          alt="bg-asset"
          height={420}
          width={380}
          priority
          placeholder="empty"
          loading="eager"
          className="z-[1000] relative -top-12 -left-[490px] right-0 max-md:left-auto max-md:right-0"
        />
      </div>
    );
  };
  const TabletLayout = () => {
    return (
      <div className="flex justify-between">
        <Image
          src="/images/g91-2.svg"
          alt="bg-asset"
          height={400}
          width={280}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -top-20 max-md:-left-10 max-md:scale-75"
        />
        <Image
          src="/images/navbar-bg/cone.svg"
          alt="cone"
          height={100}
          width={200}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative left-7 -top-[10px] h-[200px]"
        />
        <Image
          src="/images/cube.svg"
          alt="bg-asset-cube"
          height={488}
          width={260}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-48 -top-16 max-md:-top-20 max-md:hidden"
        />
        <Image
          src="/images/4-35.svg"
          alt="bg-asset"
          height={580}
          width={600}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-[292px] -top-[66px]"
        />
        <Image
          src="/images/rectangle-67.svg"
          alt="bg-asset"
          height={420}
          width={380}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-[443px] -top-[70px]"
        />
        <Image
          src="/images/holo-7.svg"
          alt="bg-asset"
          height={420}
          width={380}
          priority
          placeholder="empty"
          loading="eager"
          className="z-[1000] relative -top-12 -left-[490px] right-0 max-md:left-auto max-md:right-0"
        />
      </div>
    );
  };
  const MobileLayout = () => {
    return (
      <div className="flex justify-between">
        <Image
          src="/images/g91-2.svg"
          alt="bg-asset"
          height={400}
          width={280}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -top-20 max-md:-left-10 max-md:scale-75"
        />
        <Image
          src="/images/navbar-bg/cone.svg"
          alt="cone"
          height={100}
          width={200}
          priority
          placeholder="empty"
          loading="eager"
          className="hidden"
        />
        <Image
          src="/images/cube.svg"
          alt="bg-asset-cube"
          height={488}
          width={260}
          priority
          placeholder="empty"
          loading="eager"
          className="hidden"
        />
        <Image
          src="/images/4-35.svg"
          alt="bg-asset"
          height={580}
          width={600}
          priority
          placeholder="empty"
          loading="eager"
          className="-z-10 relative -left-[80px] -top-[66px]"
        />
        <Image
          src="/images/rectangle-67.svg"
          alt="bg-asset"
          height={420}
          width={380}
          priority
          placeholder="empty"
          loading="eager"
          className="hidden"
        />
        <Image
          src="/images/holo-7.svg"
          alt="bg-asset"
          height={420}
          width={380}
          priority
          placeholder="empty"
          loading="eager"
          className="z-[1000] relative -top-12 -left-[490px] right-0 max-md:left-auto max-md:right-0"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col justify-start relative inset-0 w-full overflow-hidden h-full">
        {/* First Row of Images */}

        {deviceSize === "laptop" && <LaptopLayout />}
        {deviceSize === "tablet" && <TabletLayout />}
        {deviceSize === "mobile" && <MobileLayout />}
        {deviceSize === "monitor" && <MonitorLayout />}
        {/* <div className="flex justify-between">
          <Image
            src="/images/g91-2.svg"
            alt="bg-asset"
            height={400}
            width={360}
            priority
            placeholder="empty"
            loading="eager"
            className="-z-10 relative max-[1599px]:border -top-20 max-md:-left-10 max-md:scale-75"
          />
          <Image
            src="/images/navbar-bg/cone.svg"
            alt="cone"
            height={700}
            width={700}
            priority
            placeholder="empty"
            loading="eager"
            className="-z-10 relative max-[1599px]:left-7 max-[1588px]:-top-[10px] max-[1588px]:h-[200px] -left-10 -top-[10px] h-[250px]"
          />
          <Image
            src="/images/cube.svg"
            alt="bg-asset-cube"
            height={400}
            width={300}
            priority
            placeholder="empty"
            loading="eager"
            className="-z-10 relative h-[400px] w-full  -left-[160px] -top-16 max-md:-top-20 max-md:hidden max-[1588px]:-left-48"
          />
          <Image
            src="/images/4-35.svg"
            alt="bg-asset"
            height={580}
            width={700}
            priority
            placeholder="empty"
            loading="eager"
            className="-z-10 relative -left-[320px] -top-[66px] max-[1588px]:-left-[292px]"
          />
          <Image
            src="/images/rectangle-67.svg"
            alt="bg-asset"
            height={420}
            width={450}
            priority
            placeholder="empty"
            loading="eager"
            className="-z-10 relative -left-[450px] -top-[70px] max-[1588px]:-left-[443px]"
          />
          <Image
            src="/images/holo-7.svg"
            alt="bg-asset"
            height={420}
            width={380}
            priority
            placeholder="empty"
            loading="eager"
            className="z-[1000] relative -top-12 right-[480px] max-md:left-auto max-md:right-0 max-[1588px]:-left-[490px]"
          />
        </div> */}

        {/* Second Row of Images */}
        <div className="flex justify-between w-full">
          <Image
            src="/images/wireframe-50.svg"
            alt="bg-asset"
            height={250}
            width={250}
            priority
            placeholder="empty"
            loading="eager"
            className="-z-10 relative -top-[100px] opacity-50 max-md:-left-28 max-md:opacity-30"
          />

          <Image
            src="/images/rectangle-66.svg"
            alt="bg-asset"
            height={402}
            width={424}
            priority
            placeholder="empty"
            loading="eager"
            className="-z-50 relative -right-50 -top-28"
          />

          <div className="-z-50 absolute right-0 top-[260px] w-[424px] h-[544px] bg-gradient-to-r from-transparent via-[#131313] to-[#131313] opacity-50 pointer-events-none"></div>
        </div>
      </div>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default HeroBG;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { Button } from "@mantine/core";
// Mantine's useMediaQuery hook
import { useMediaQuery } from "@mantine/hooks";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

interface ResponsiveCarouselProps {
  imageUrl: string;
  imageHeight: number; // original image height (770px)
}

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({
  imageUrl,
  imageHeight,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Hook to detect screens <= 640px
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Each slide width = total image width / 3 = 3134 / 3 ≈ 1044.67
  // Aspect ratio = imageHeight / (3134 / totalSlides)
  const aspectRatio = imageHeight / (3134 / totalSlides);
  const calculatedSlideHeight = slideWidth * aspectRatio;

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Generate dates starting from 4th April 2025
  const startDate = new Date(2025, 3, 4);
  const oneDay = 24 * 60 * 60 * 1000;
  const dates = Array.from({ length: totalSlides }, (_, i) => {
    const date = new Date(startDate.getTime() + i * oneDay);
    return {
      id: `date-${i}`,  // Add a stable id for key prop
      date: date
    };
  });

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const ordinal = (n: number) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString().slice(2); // '25'
    return `${day}${ordinal(day)} ${month}'${year}`;
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative mr-2 md:mx-auto w-full md:max-w-[44rem]">
        {/* Date Buttons (Top Center) */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-30">
          {dates.map((date, i) => {
            const isActive = currentSlide === i;
            return (
              <Button
                key={date.id}
                // Dynamically set size based on screen width
                size={isSmallScreen ? "sm" : "md"}
                className={`
                  button-Sponsor
                  mx-1 sm:mx-2
                  ${isActive ? "button-Sponsor--active" : ""}
                  px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base
                  ${spaceGrotesk.className}
                `}
                onClick={() => setCurrentSlide(i)}
              >
                {formatDate(date.date)}
              </Button>
            );
          })}
        </div>

        {/* Slides Container (with overflow-hidden) */}
        <div
          ref={containerRef}
          className="overflow-hidden my-12"
          style={{ height: calculatedSlideHeight || imageHeight }}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * slideWidth}px)`,
              width: slideWidth * totalSlides,
            }}
          >
            {slideWidth > 0 && (
              <Image
                src={imageUrl}
                alt="Timeline carousel"
                width={Math.round(slideWidth * totalSlides)}
                height={Math.round(calculatedSlideHeight)}
                style={{
                  width: slideWidth * totalSlides,
                  height: calculatedSlideHeight,
                }}
              />
            )}
          </div>
        </div>

        {/* Arrow Buttons (Bottom Left) */}
        <div className="absolute bottom-2 left-2 flex gap-2 z-20">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-10 h-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-10 h-10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Day Indicator (Bottom Right) */}
        <div
          className={`absolute bottom-2 right-2 text-gray-700 text-lg z-30 ${spaceGrotesk.className}`}
        >
          Day {currentSlide + 1}/{totalSlides}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;

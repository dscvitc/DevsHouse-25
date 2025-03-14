"use client";
import Image from "next/image";
import { FC } from "react";

interface ScrollButtonProps {}

const ScrollButton: FC<ScrollButtonProps> = () => {
  const handleScrollToTop = () => {
    // Use Lenis scrollTo method if available, otherwise fallback to native scrollTo
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <div className='text-center mb-8 lg:mb-0 lg:translate-y-full lg:text-start'>
      <button 
        onClick={handleScrollToTop} 
        className="top px-8 py-7 ml-10 -mt-40"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <div className="flex items-center">
          Go To Top
          <Image
            src="/footer/arrow.svg"
            alt="Up arrow"
            width={25}
            height={20}
            className="ml-2 -mt-1"
          />
        </div>
      </button>
    </div>
  );
};

export default ScrollButton;

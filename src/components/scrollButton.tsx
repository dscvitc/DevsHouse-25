"use client";
import Image from "next/image";

const ScrollButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
  };
  return (
    <div className='text-center mb-8 lg:mb-0 lg:translate-y-full lg:text-start'>
      <button onClick={handleScrollToTop} className="top px-8 py-7 ml-10 -mt-40">
        <div className="flex">
          Go To Top
          <Image
            src="footer/arrow.svg"
            alt="arrow"
            width="25"
            height="20"
            className="ml-2 -mt-1"
          />
        </div>
      </button>
    </div>
  );
};

export default ScrollButton;

"use client";

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TimelineCarouselProps {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
}

const TimelineCarousel: React.FC<TimelineCarouselProps> = ({
  imageSrc,
  imageWidth,
  imageHeight,
  alt
}) => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with Day 2 active
  const swiperRef = useRef<SwiperType | null>(null);
  
  const days = [
    { 
      title: 'Day 1',
      image: '/timeline/timeline_1.png'
    },
    { 
      title: 'Day 2',
      image: '/timeline/timeline_2.png'
    },
    { 
      title: 'Day 3',
      image: '/timeline/timeline_3.png'
    }
  ];

  const handleDayClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination'
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        initialSlide={activeIndex}
        className="timeline-swiper"
      >
        {days.map((day, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] md:h-[500px] bg-black">
              {/* Timeline image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={day.image}
                    alt={`${day.title} Timeline`}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
              
              {/* Day indicator */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 px-4 py-2 rounded-lg">
                <h3 className="text-white font-bold text-xl">Day {index + 1} / 3</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom navigation */}
      <div className="flex justify-between items-center mt-4">
        <button className="swiper-button-prev w-10 h-10 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="swiper-pagination"></div>
        <button className="swiper-button-next w-10 h-10 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      
      {/* Day selection buttons */}
      <div className="flex justify-center gap-4 mt-6">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDayClick(index)}
            className={`px-4 py-2 rounded-md font-bold transition-all ${
              activeIndex === index
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {day.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimelineCarousel; 
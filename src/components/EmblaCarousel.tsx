"use client";
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from './EmblaCarouselSelectedSnapDisplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

type PropType = {
  slides?: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  
  // Keep dragFree: true but adjust other options for better alignment
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    align: 'center', 
    containScroll: 'trimSnaps', 
    dragFree: true,  
    slidesToScroll: 1, 
    inViewThreshold: 0.7 
  });
  
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);
  
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);
  
  return (
    <section className="relative w-full mx-auto my-8">
      
      <div className="overflow-hidden w-full rounded-lg" ref={emblaRef}>
        
        <div className="flex select-none touch-none">
          
          <div className="relative min-w-full w-full">
            <div className="relative overflow-hidden h-full flex justify-center items-center">
              <Image
                src="/timeline/timeline_1.png"
                alt="Timeline Day 1"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative min-w-full w-full">
            <div className="relative overflow-hidden h-full flex justify-center items-center">
              <Image
                src="/timeline/timeline_2.png"
                alt="Timeline Day 2"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative min-w-full w-full">
            <div className="relative overflow-hidden h-full flex justify-center items-center">
              <Image
                src="/timeline/timeline_3.png"
                alt="Timeline Day 3"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="flex justify-between items-center mt-4 px-4">
        <div className="flex items-center gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="text-sm font-medium py-2 px-4 bg-black/70 text-white rounded">
          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
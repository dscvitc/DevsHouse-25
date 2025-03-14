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
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    align: 'start',
    containScroll: false,
    dragFree: true
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image 
              src="/timeline/timeline_1.png" 
              alt="Timeline Day 1" 
              width={800} 
              height={450} 
              className="w-full"
            />
          </div>
          <div className="embla__slide">
            <Image 
              src="/timeline/timeline_2.png" 
              alt="Timeline Day 2" 
              width={800} 
              height={450} 
              className="w-full"
            />
          </div>
          <div className="embla__slide">
            <Image 
              src="/timeline/timeline_3.png" 
              alt="Timeline Day 3" 
              width={800} 
              height={450} 
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      
      <div className="embla__selected-snap-display">
        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  );
};

export default EmblaCarousel; 
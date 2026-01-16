'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface GalleryProps {
  images: string[];
  productTitle: string;
}

export function Gallery({ images, productTitle }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToImage = useCallback((index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const thumbnails = scrollRef.current.querySelectorAll('button');
      if (thumbnails[index]) {
        thumbnails[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, []);

  const handlePrev = useCallback(() => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    scrollToImage(newIndex);
  }, [activeIndex, images.length, scrollToImage]);

  const handleNext = useCallback(() => {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    scrollToImage(newIndex);
  }, [activeIndex, images.length, scrollToImage]);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 group">
        <Image
          src={images[activeIndex]}
          alt={`${productTitle} - Afbeelding ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={activeIndex === 0}
        />

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white transition-colors shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Vorige afbeelding"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white transition-colors shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Volgende afbeelding"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all ${
              index === activeIndex
                ? 'ring-2 ring-emerald-500 ring-offset-2'
                : 'opacity-70 hover:opacity-100'
            }`}
            aria-label={`Bekijk afbeelding ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
          >
            <Image
              src={image}
              alt={`${productTitle} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

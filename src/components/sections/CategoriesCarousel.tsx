'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Icon } from '@/components/ui';
import { categories } from '@/data/categories';

export function CategoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const getScrollAmount = useCallback(() => {
    if (!scrollRef.current) return 300;
    const card = scrollRef.current.querySelector('article');
    if (card) {
      return card.offsetWidth + 32; // card width + gap
    }
    return scrollRef.current.clientWidth * 0.8;
  }, []);

  const scrollNext = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'smooth';
      scrollRef.current.scrollBy({ left: getScrollAmount() });
    }
  }, [getScrollAmount]);

  const scrollPrev = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'smooth';
      scrollRef.current.scrollBy({ left: -getScrollAmount() });
    }
  }, [getScrollAmount]);

  // Pointer event handlers for drag-to-scroll
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollBehavior = 'auto';
    scrollRef.current.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiplier for faster drag
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    
    setIsDragging(false);
    scrollRef.current.releasePointerCapture(e.pointerId);
    // Re-enable smooth scroll after a short delay
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.style.scrollBehavior = 'smooth';
      }
    }, 100);
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.scrollBehavior = 'smooth';
      }
    }
  }, [isDragging]);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <Container size="lg">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-emerald-600">
              Ons Assortiment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Categorieën
            </h2>
          </div>
          {/* Desktop prev/next buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center h-12 w-12 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Vorige categorie"
            >
              <Icon name="arrow" size="md" className="rotate-180" />
            </button>
            <button
              onClick={scrollNext}
              className="flex items-center justify-center h-12 w-12 rounded-full bg-slate-900 text-white hover:bg-emerald-600 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Volgende categorie"
            >
              <Icon name="arrow" size="md" />
            </button>
          </div>
        </div>
      </Container>

      {/* Carousel - Full width with left padding from container */}
      <div className="relative">
        <div
          ref={scrollRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          className={`
            flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth
            pl-4 md:pl-[max(1rem,calc((100vw-1280px)/2+1rem))] pr-6 pb-4
            touch-pan-x select-none
            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          `}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {categories.map((category) => (
            <article
              key={category.id}
              className="relative flex-shrink-0 snap-start w-[86%] sm:w-[70%] md:w-[48%] lg:w-[36%] xl:w-[30%] h-[440px] sm:h-[460px] md:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-xl group"
            >
              {/* Background image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                sizes="(max-width: 640px) 86vw, (max-width: 768px) 70vw, (max-width: 1024px) 48vw, (max-width: 1280px) 36vw, 30vw"
                draggable={false}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
                {/* Top description */}
                <p className="text-white/90 text-sm md:text-base leading-snug max-w-[280px]">
                  {category.description}
                </p>

                {/* Bottom row: title + arrow button */}
                <div className="flex items-end justify-between">
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight max-w-[70%]">
                    {category.title}
                  </h3>
                  <Link
                    href={category.href}
                    className="pointer-events-auto flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
                    aria-label={`Bekijk ${category.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon name="arrow" size="md" />
                  </Link>
                </div>
              </div>

              {/* Full card link overlay for accessibility */}
              <Link
                href={category.href}
                className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-label={`Bekijk ${category.title}`}
                tabIndex={0}
                draggable={false}
                onClick={(e) => {
                  // Prevent navigation if user was dragging
                  if (isDragging) {
                    e.preventDefault();
                  }
                }}
              />
            </article>
          ))}
        </div>

        {/* Mobile floating navigation buttons */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
          <button
            onClick={scrollPrev}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-white transition-colors shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Vorige categorie"
          >
            <Icon name="arrow" size="sm" className="rotate-180" />
          </button>
          <button
            onClick={scrollNext}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-900/90 backdrop-blur-sm text-white hover:bg-emerald-600 transition-colors shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Volgende categorie"
          >
            <Icon name="arrow" size="sm" />
          </button>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        @media (prefers-reduced-motion: reduce) {
          div {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

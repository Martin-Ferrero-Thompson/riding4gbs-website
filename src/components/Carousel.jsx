import React, { useState, useRef, useEffect } from 'react';

export function Carousel({ slides, i18n }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);
  const totalSlides = slides ? slides.length : 0;
  const scrollTimeoutRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    if (contentRef.current) {
      const scrollAmount = contentRef.current.offsetWidth * currentIndex;
      contentRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Sync index when the user swipes on mobile
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleScroll = () => {
      // debounce index calculation to end of momentum scroll
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        const width = el.offsetWidth || 1;
        const idx = Math.round(el.scrollLeft / width);
        if (idx !== currentIndex) {
          setCurrentIndex((prev) => (idx >= 0 && idx < totalSlides ? idx : prev));
        }
      }, 80);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentIndex, totalSlides]);

  const labels = i18n?.carousel || { previous: 'Previous Slide', next: 'Next Slide' };

  return (
    <div className="relative w-full mt-10 px-10">
      {/* Add items-start to prevent slides from stretching vertically */}
      <div ref={contentRef} className="flex overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory scroll-smooth items-start">
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 snap-start md:snap-center">
            <div className="p-4 md:p-8 bg-gray-50 rounded-lg"> 
              <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                {slide.title}
              </h3>
              <div 
                className="space-y-4 text-lg text-gray-600 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: slide.content }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Buttons remain the same */}
      <button 
        onClick={handlePrev} 
        title={labels.previous}
        aria-label={labels.previous}
        className="hidden md:block absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/80 rounded-full p-2 text-white z-10 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        onClick={handleNext} 
        title={labels.next}
        aria-label={labels.next}
        className="hidden md:block absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/80 rounded-full p-2 text-white z-10 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
import { useState, useRef, useEffect } from 'react';

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
    <div className="relative w-full mt-10 px-0 md:px-10">
      {/* Add items-start to prevent slides from stretching vertically */}
      <div ref={contentRef} className="flex overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory scroll-smooth items-start">
        {slides.map((slide, index) => {
          const offset = index - currentIndex;
          // determine transform and opacity classes based on position relative to current
          const motionClass = offset === 0
            ? 'opacity-100 translate-x-0'
            : offset < 0
              ? 'opacity-0 -translate-x-6'
              : 'opacity-0 translate-x-6';

          return (
            <div key={index} className="w-full flex-none snap-start md:snap-center">
              <div className={`p-4 md:p-8 bg-gray-50 rounded-lg transition-all ease-in-out duration-700 transform ${motionClass}`}>
                <h3 className="font-headline font-semibold text-lg md:text-xl lg:text-2xl text-gray-900 mb-4">
                  {slide.title}
                </h3>
                <div 
                  className="space-y-4 font-body text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: slide.content }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Buttons remain the same */}
      <button
        onClick={handlePrev}
        title={labels.previous}
        aria-label={labels.previous}
  className="flex absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full w-14 h-14 p-3 items-center justify-center text-brand-blue z-20 transition-colors shadow-lg backdrop-blur-sm ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="6" stroke="currentColor" className="w-8 h-8 drop-shadow-md">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        title={labels.next}
        aria-label={labels.next}
  className="flex absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full w-14 h-14 p-3 items-center justify-center text-brand-blue z-20 transition-colors shadow-lg backdrop-blur-sm ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="6" stroke="currentColor" className="w-8 h-8 drop-shadow-md">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
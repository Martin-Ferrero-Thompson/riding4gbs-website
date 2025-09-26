import React, { useState, useRef, useEffect } from 'react';

export function Carousel({ slides }) { // Now accepts a 'slides' prop
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);
  const totalSlides = slides ? slides.length : 0;

  useEffect(() => {
    if (contentRef.current) {
      const scrollAmount = contentRef.current.offsetWidth * currentIndex;
      contentRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      <div ref={contentRef} className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth">
        {/* We now map over the slides array to render the content */}
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 snap-center">
            <div className="p-4 md:p-8">
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
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

{/* Pill Navigation */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-3 p-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-6 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// The CarouselSlide component is no longer needed
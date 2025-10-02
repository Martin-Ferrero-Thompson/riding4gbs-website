import React, { useState, useEffect, useRef } from 'react';

export function LogoCarousel({ partners }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (container && scroller) {
      const resizeObserver = new ResizeObserver(() => {
        // Check if the scroller's content is wider than its container
        if (scroller.scrollWidth > container.offsetWidth) {
          setShouldAnimate(true);
        } else {
          setShouldAnimate(false);
        }
      });

      resizeObserver.observe(container);

      // Initial check
      if (scroller.scrollWidth > container.offsetWidth) {
        setShouldAnimate(true);
      }

      return () => resizeObserver.disconnect();
    }
  }, [partners]); // Re-run when the partners list changes

  // Duplicate partners only if animation is needed
  const extendedPartners = shouldAnimate ? [...partners, ...partners] : partners;

  return (
    <div 
      ref={containerRef} 
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul 
        ref={scrollerRef}
        className={`flex items-center ${shouldAnimate ? 'justify-start animate-infinite-scroll' : 'justify-center w-full'}`}
      >
        {extendedPartners.map((partner, index) => (
          <li key={index} className="mx-8 flex-shrink-0">
            <a href={partner.website} target="_blank" rel="noopener noreferrer" title={partner.name}>
              <img src={partner.logo} alt={partner.name} className="h-16 max-w-none opacity-90 hover:opacity-100 transition-opacity" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
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

  // Duplicate partners only if animation is needed at md+ (marquee)
  const extendedPartners = shouldAnimate ? [...partners, ...partners] : partners;

  return (
    <div 
      ref={containerRef} 
      className="w-full inline-flex flex-nowrap overflow-hidden px-4 md:px-0 [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul 
        ref={scrollerRef}
        className={`flex items-center w-full md:w-auto ${shouldAnimate ? 'justify-start md:animate-infinite-scroll pause-on-hover' : 'justify-start'} overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-0`}
      >
        {extendedPartners.map((partner, index) => (
          <li key={index} className="mx-4 md:mx-8 flex-shrink-0 snap-start">
            <a href={partner.website} target="_blank" rel="noopener noreferrer" title={partner.name}>
              <img src={partner.logo} alt={partner.name} className="h-12 md:h-16 max-w-none opacity-90 hover:opacity-100 transition-opacity object-contain" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
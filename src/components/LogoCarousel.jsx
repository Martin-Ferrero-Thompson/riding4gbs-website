import React, { useState, useEffect, useRef } from 'react';

export function LogoCarousel({ partners }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (!container || !scroller) return;

    const update = () => {
      const containerW = container.offsetWidth || 0;
      const contentW = scroller.scrollWidth || 0;
      setShouldAnimate(contentW > containerW);
    };

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(container);
    resizeObserver.observe(scroller);

    // Recalculate after images settle
    const imgs = scroller.querySelectorAll('img');
    imgs.forEach((img) => {
      if (img.complete) return; // already loaded
      img.addEventListener('load', update, { once: true });
      img.addEventListener('error', update, { once: true });
    });

    // Initial check
    update();

    // Also recalc on window resize for safety
    window.addEventListener('resize', update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [partners]); // Re-run when the partners list changes

  // Duplicate partners only if animation is needed at md+ (marquee)
  const extendedPartners = shouldAnimate ? [...partners, ...partners] : partners;

  const containerClasses = `w-full inline-flex flex-nowrap overflow-hidden px-4 md:px-0 ${
    shouldAnimate
      ? '[mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'
      : ''
  }`;

  const listClasses = `flex items-center ${
    shouldAnimate
      ? 'w-full md:w-auto justify-start md:animate-infinite-scroll motion-reduce:md:animate-none pause-on-hover overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none'
      : 'w-full justify-center overflow-x-hidden snap-none mx-auto'
  } gap-0`;

  return (
    <div ref={containerRef} className={containerClasses}>
      <ul ref={scrollerRef} className={listClasses}>
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
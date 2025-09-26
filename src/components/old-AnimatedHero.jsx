import { useEffect, useRef } from 'react';
import { animate } from 'motion';

function AnimatedHero() {
  const cardRef = useRef(null);

  useEffect(() => {
    // This script runs once when the component loads
    if (cardRef.current) {
      animate(
        cardRef.current,
        { 
          x: ['-100vw', '0vw'],
          opacity: [0, 1]
        },
        { 
          duration: 2.5, 
          easing: [0.22, 1, 0.36, 1]       }
      );
    }
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="m-4 md:m-12 p-6 md:p-8 bg-gray-900 bg-opacity-70 rounded-xl backdrop-blur-sm text-center text-white max-w-4xl mx-auto opacity-0"
    >
      <h1 className="font-display text-4xl md:text-7xl font-bold">The Slow Road Back</h1>
      <p className="font-display text-2xl md:text-4xl font-bold text-blue-500 mt-4">#RIDING4GBS</p>
      <p className="font-sans text-base md:text-lg mt-6 md:mt-8">September 30th &mdash; October 20th, 2026</p>
      <div id="countdown-timer" className="my-4 md:my-6">
        <p className="text-xl md:text-2xl font-sans tracking-widest">1Y : 6D : 18H : 42M : 8S</p>
      </div>
      <p className="font-sans text-sm md:text-lg max-w-3xl mx-auto">
        In September 2026, as a Guillain-Barré Syndrome (GBS) survivor, I will undertake a deeply personal solo cycling challenge...
      </p>
      <div className="mt-8 md:mt-12">
        <p className="font-sans font-bold">In proud partnership with</p>
        <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          <div className="flex flex-col items-center justify-between gap-4 p-6 bg-white rounded-lg h-40 w-64">
            <img src="/logos/INUK-Wordmark-Logo_RGB.png" alt="Inflammatory Neuropathies UK Logo" className="max-h-16 object-contain" />
            <a href="#" className="font-sans bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">Visit Website</a>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 p-6 bg-white rounded-lg h-40 w-64">
            <img src="/logos/GBS-CIDP_neuropatias-RC-3.png" alt="Neuropatías España Logo" className="max-h-16 object-contain" />
            <a href="#" className="font-sans bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">Visita el sitio web</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedHero;
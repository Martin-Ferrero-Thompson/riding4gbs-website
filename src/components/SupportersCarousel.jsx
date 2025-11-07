import React from 'react';

/**
 * @typedef {Object} SupportersCarouselProps
 * @property {any[]} supporters
 * @property {string} title
 * @property {string} [footerText]
 * @property {string} [footerHtml]
 */

/**
 * @param {SupportersCarouselProps} props
 */
export function SupportersCarousel({ supporters, title, footerText, footerHtml }) {
  // Duplicate the list for md+ marquee effect only; on mobile we rely on native swipe
  const extendedSupporters = supporters.length > 0 ? [...supporters, ...supporters] : [];

  return (
    <div className="bg-gray-100 rounded-xl p-6 md:p-12 text-center">
      <h2 className="font-headline font-semibold text-lg md:text-xl lg:text-2xl text-gray-900">
        {title}
      </h2>
      
      <div 
        className="w-full mt-6 md:mt-8 flex flex-nowrap overflow-hidden px-4 md:px-0 [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]"
      >
        <ul 
          className="flex items-center w-full md:w-auto justify-start md:animate-infinite-scroll pause-on-hover overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none"
        >
          {extendedSupporters.map((supporter, index) => (
            <li key={index} className="mx-3 md:mx-4 flex-shrink-0 bg-white p-4 rounded-lg shadow-sm w-48 md:w-56 snap-start">
              <p className="font-headline font-semibold text-lg md:text-xl lg:text-2xl text-gray-800 truncate">{supporter.name}</p>
              <p className="text-sm text-gray-500">{supporter.country}</p>
            </li>
          ))}
        </ul>
      </div>

      {footerHtml ? (
        <p className="mt-6 md:mt-8 max-w-2xl mx-auto font-body text-base md:text-lg lg:text-xl text-gray-600" dangerouslySetInnerHTML={{ __html: footerHtml }} />
      ) : footerText ? (
        <p className="mt-6 md:mt-8 max-w-2xl mx-auto font-body text-base md:text-lg lg:text-xl text-gray-600">{footerText}</p>
      ) : null}
    </div>
  );
}
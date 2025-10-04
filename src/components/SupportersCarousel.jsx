import React from 'react';

export function SupportersCarousel({ supporters, title, footerText, footerHtml }) {
  // We duplicate the list to create a seamless looping effect
  const extendedSupporters = supporters.length > 0 ? [...supporters, ...supporters] : [];

  return (
    <div className="bg-gray-100 rounded-xl p-8 md:p-12 text-center">
      <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900">
        {title}
      </h2>
      
      <div 
        className="w-full mt-8 flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]"
      >
        <ul 
          className="flex items-center justify-start animate-infinite-scroll pause-on-hover"
        >
          {extendedSupporters.map((supporter, index) => (
            <li key={index} className="mx-4 flex-shrink-0 bg-white p-4 rounded-lg shadow-sm w-56">
              <p className="font-bold text-lg text-gray-800 truncate">{supporter.name}</p>
              <p className="text-sm text-gray-500">{supporter.country}</p>
            </li>
          ))}
        </ul>
      </div>

      {footerHtml ? (
        <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: footerHtml }} />
      ) : footerText ? (
        <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600">{footerText}</p>
      ) : null}
    </div>
  );
}
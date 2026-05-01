'use client';

import { useState } from 'react';

export default function PayerLogo({ domain, name, fallbackName }) {
  const sources = [
    `https://logo.clearbit.com/${domain}?size=128`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      fallbackName || name
    )}&background=fff&color=09A882&bold=true&size=128`,
  ];

  const [idx, setIdx] = useState(0);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sources[idx]}
      alt={name}
      onError={() => {
        if (idx < sources.length - 1) setIdx(idx + 1);
      }}
    />
  );
}

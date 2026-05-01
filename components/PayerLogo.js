'use client';

import { useState, useRef, useEffect } from 'react';

export default function PayerLogo({ domain, name, fallbackName }) {
  const sources = [
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      fallbackName || name
    )}&background=fff&color=09A882&bold=true&size=128`,
  ];

  const [idx, setIdx] = useState(0);
  const imgRef = useRef(null);

  // Catches the case where the image fails to load before React hydrates
  // (common on static export / GitHub Pages). onError won't fire after the
  // fact, so we inspect the element directly once mounted.
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth === 0) {
      setIdx((i) => (i < sources.length - 1 ? i + 1 : i));
    }
  }, [idx]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={sources[idx]}
      alt={name}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => {
        setIdx((i) => (i < sources.length - 1 ? i + 1 : i));
      }}
    />
  );
}

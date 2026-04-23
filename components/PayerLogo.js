'use client';

export default function PayerLogo({ src, name, fallbackName }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
          fallbackName || name
        )}&background=fff&color=09A882&bold=true`;
      }}
    />
  );
}

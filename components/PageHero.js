import Link from 'next/link';

export default function PageHero({ crumbs = [], title, titleAccent, subtitle, bgImage }) {
  return (
    <section className="ph">
      {bgImage && (
        <div className="ph-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bgImage} alt="" />
        </div>
      )}
      <div className="ph-inner">
        {crumbs.length > 0 && (
          <div className="ph-crumb">
            <Link href="/">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <span className="sep">/</span>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </div>
        )}
        <h1 className="ph-title">
          {title} {titleAccent && <em>{titleAccent}</em>}
        </h1>
        {subtitle && <p className="ph-sub">{subtitle}</p>}
      </div>
    </section>
  );
}

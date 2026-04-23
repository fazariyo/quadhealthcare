import Link from 'next/link';

export default function PageCta({
  title = 'Ready to Get',
  titleAccent = 'In-Network?',
  text = 'Free consultation — most providers credentialed in 14–30 days depending on payer timelines.',
  primaryHref = '/contact',
  primaryLabel = 'Start Your Enrollment →',
  secondaryHref = '/services',
  secondaryLabel = 'View All Services',
}) {
  return (
    <section className="pcta">
      <div className="pcta-glow"></div>
      <div className="pcta-in">
        <h2 className="pcta-title">
          {title} <em>{titleAccent}</em>
        </h2>
        <p className="pcta-text">{text}</p>
        <div className="pcta-btns">
          <Link href={primaryHref} className="bteal">{primaryLabel}</Link>
          {secondaryHref && <Link href={secondaryHref} className="bghost">{secondaryLabel}</Link>}
        </div>
      </div>
    </section>
  );
}

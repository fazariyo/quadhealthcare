import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '../../../components/PageHero';
import PageCta from '../../../components/PageCta';
import ContentBlocks from '../../../components/ContentBlocks';
import { billing } from '../../../components/content/billing';

export function generateStaticParams() {
  return billing.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }) {
  const b = billing.find((x) => x.slug === params.slug);
  if (!b) return {};
  return {
    title: `${b.title} ${b.titleAccent} | Quad Healthcare Solutions`,
    description: b.tagline,
  };
}

export default function BillingDetail({ params }) {
  const item = billing.find((b) => b.slug === params.slug);
  if (!item) notFound();

  const related = billing.filter((b) => b.slug !== item.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Medical Billing', href: '/billing' }, { label: item.title }]}
        title={item.title}
        titleAccent={item.titleAccent}
        subtitle={item.tagline}
      />

      <section className="ipage">
        <div className="ipage-in">
          <div className="ipage-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={`${item.title} ${item.titleAccent}`} />
          </div>
          <ContentBlocks blocks={item.blocks} />
        </div>
      </section>

      <section className="related">
        <div className="related-in">
          <div className="related-head">
            <h3>Related Billing Services</h3>
            <p>End-to-end revenue-cycle coverage.</p>
          </div>
          <div className="related-grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/billing/${r.slug}`} className="related-card">
                <div className="related-num">{r.num} — BILLING</div>
                <div className="related-title">{r.title} {r.titleAccent}</div>
                <div className="related-text">{r.cardDescription}</div>
                <div className="related-link">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={item.ctaTitle}
        titleAccent={item.ctaAccent}
        text={item.ctaText}
        primaryLabel="Request Free Consultation →"
        secondaryHref="/billing"
        secondaryLabel="All Billing Services"
      />
    </>
  );
}

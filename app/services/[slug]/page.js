import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '../../../components/PageHero';
import PageCta from '../../../components/PageCta';
import ContentBlocks from '../../../components/ContentBlocks';
import { services } from '../../../components/content/services';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} ${s.titleAccent} | QUAD Healthcare Solutions`,
    description: s.tagline,
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const related = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Services', href: '/services' }, { label: svc.title }]}
        title={svc.title}
        titleAccent={svc.titleAccent}
        subtitle={svc.tagline}
      />

      <section className="ipage">
        <div className="ipage-in">
          <div className="ipage-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={svc.image} alt={`${svc.title} ${svc.titleAccent}`} />
          </div>
          <ContentBlocks blocks={svc.blocks} />
        </div>
      </section>

      <section className="related">
        <div className="related-in">
          <div className="related-head">
            <h3>Related Credentialing Services</h3>
            <p>We cover every step of the credentialing lifecycle.</p>
          </div>
          <div className="related-grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="related-card">
                <div className="related-num">{r.num} — CREDENTIALING</div>
                <div className="related-title">{r.title} {r.titleAccent}</div>
                <div className="related-text">{r.cardDescription}</div>
                <div className="related-link">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title={svc.ctaTitle}
        titleAccent={svc.ctaAccent}
        text={svc.ctaText}
        primaryLabel="Request Free Consultation →"
        secondaryHref="/services"
        secondaryLabel="All Services"
      />
    </>
  );
}

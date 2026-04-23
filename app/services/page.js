import Link from 'next/link';
import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';
import { services } from '../../components/content/services';

export const metadata = {
  title: 'Credentialing Services | Quad Healthcare Solutions',
  description:
    'Full-service medical credentialing — provider enrollment, CAQH, re-credentialing, contract negotiation, NPI & PECOS enrollment.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Services' }]}
        title="Medical Credentialing"
        titleAccent="Services"
        subtitle="Everything you need to get in-network, stay in-network, and maximize your contracted rates — handled end-to-end by specialists who do this every day."
      />

      <section className="hub-sec">
        <div className="hub-in">
          <div className="hub-grid">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="hub-card">
                <div className="hub-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="hub-card-body">
                  <div className="hub-card-num">{s.num} — CREDENTIALING</div>
                  <div className="hub-card-title">
                    {s.title} {s.titleAccent}
                  </div>
                  <div className="hub-card-text">{s.cardDescription}</div>
                  <div className="hub-card-link">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Get"
        titleAccent="Credentialed?"
        text="Free consultation and custom enrollment roadmap for your specialty and payer mix."
        primaryLabel="Start Your Enrollment →"
        secondaryHref="/billing"
        secondaryLabel="See Medical Billing"
      />
    </>
  );
}

import Link from 'next/link';
import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';
import { billing } from '../../components/content/billing';

export const metadata = {
  title: 'Medical Billing Services | Quad Healthcare Solutions',
  description:
    'End-to-end medical billing — coding, claim submission, denial management, A/R follow-up, payment posting, and patient invoicing.',
};

export default function BillingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Medical Billing' }]}
        title="Medical Billing"
        titleAccent="Services"
        subtitle="Full revenue-cycle management — from clean claim submission through denial appeals and patient collections. Get paid accurately and on time."
      />

      <section className="hub-sec">
        <div className="hub-in">
          <div className="hub-grid">
            {billing.map((b) => (
              <Link key={b.slug} href={`/billing/${b.slug}`} className="hub-card">
                <div className="hub-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.image} alt={b.title} />
                </div>
                <div className="hub-card-body">
                  <div className="hub-card-num">{b.num} — MEDICAL BILLING</div>
                  <div className="hub-card-title">
                    {b.title} {b.titleAccent}
                  </div>
                  <div className="hub-card-text">{b.cardDescription}</div>
                  <div className="hub-card-link">Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Ready to Maximize"
        titleAccent="Revenue?"
        text="Bundle credentialing and billing for complete revenue cycle support — typical clients see 20–30% collection lift within 90 days."
        primaryLabel="Request Free Consultation →"
        secondaryHref="/services"
        secondaryLabel="See Credentialing"
      />
    </>
  );
}

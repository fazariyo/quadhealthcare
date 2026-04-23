'use client';

import { useState } from 'react';
import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';

const faqs = [
  {
    q: 'How long does the credentialing process usually take?',
    a: 'While commercial payers generally state it takes 90–120 days to process an application, our proactive tracking and pristine application submissions often reduce this timeline significantly. On average, we see approvals in 14 to 45 days, depending on the specific payer and whether a site visit is required.',
  },
  {
    q: 'Do I have to get credentialed with every single insurance payer?',
    a: 'Not at all. During our Discovery phase, we consult with you to identify the most strategic payers for your specific specialty and local patient demographic. We focus on enrolling you with the networks that will drive the most value and volume to your practice.',
  },
  {
    q: 'What is the difference between credentialing and contracting?',
    a: 'Credentialing is the primary source verification process where payers confirm your education, licensing, and malpractice history (often via CAQH). Contracting is the subsequent step where we negotiate your reimbursement rates and you sign the agreement to officially become an in-network provider. We handle both seamlessly.',
  },
  {
    q: 'I have a gap in my work history. Will this cause a denial?',
    a: "It won't automatically cause a denial, but it will stall the process if not addressed correctly. CAQH and most payers require a continuous 5-year work history. We assist you in drafting the necessary written explanations for any gaps longer than 30 days so the application processes smoothly without pushback.",
  },
  {
    q: 'How do you price your credentialing services?',
    a: 'Our pricing is transparent and highly competitive. We offer flat-fee pricing per provider / per payer for standalone credentialing, as well as discounted bundled rates if you utilize our ongoing re-credentialing or medical billing services. We provide a custom quote after our initial free consultation.',
  },
  {
    q: 'Can you work with my existing practice management / billing software?',
    a: 'Yes. We integrate with all major PM/EHR systems — AdvancedMD, Athenahealth, Kareo/Tebra, DrChrono, eClinicalWorks, NextGen, Epic, Cerner, and many others. We can either log in directly with credentialed read/write access or work through API integrations where supported.',
  },
  {
    q: 'What happens if a payer denies my initial application?',
    a: 'Our job does not end at submission. If an application is denied, we analyze the specific reason, gather any additional documentation or corrections needed, and resubmit with an appeal or development response. Denials are almost always recoverable when addressed quickly and correctly.',
  },
  {
    q: 'Do you handle both individual and group/organizational credentialing?',
    a: 'Absolutely. We credential solo providers, multi-provider group practices, facility organizations, DME suppliers, behavioral health clinics, and telehealth entities. We also handle Type 2 NPI setup and linkage for your group entity to ensure claims are routed correctly.',
  },
  {
    q: 'How often do I need to be re-credentialed?',
    a: 'Commercial payers typically require re-credentialing every 2 to 3 years. Medicare requires revalidation every 5 years (3 years for DMEPOS suppliers). State Medicaid cycles vary. We track every cycle proactively so nothing lapses.',
  },
  {
    q: 'Is my data secure with Quad Healthcare Solutions?',
    a: 'Yes. We are HIPAA-aligned, sign a Business Associate Agreement (BAA) with every client, and use enterprise-grade encryption (AES-256 at rest, TLS 1.2+ in transit). All staff complete annual HIPAA and FWA training, and we undergo regular third-party security assessments.',
  },
  {
    q: 'What information do I need to provide to get started?',
    a: 'To begin, we typically need your NPI, CAQH ID (if one exists), current medical and DEA license copies, malpractice insurance face sheet, board certification, a complete CV with dates, W-9, and EIN documentation. We provide a simple intake checklist when you sign up.',
  },
  {
    q: 'Can you help me renegotiate my existing payer contracts?',
    a: 'Yes. Our contract negotiation service benchmarks your current rates against Medicare and regional peers, identifies underperforming contracts, and pursues rate increases focused on your top-billed CPT codes. Even a 3–5% increase on core codes typically covers our fee many times over.',
  },
];

export const dynamic = 'force-static';

export default function FAQPage() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'FAQ' }]}
        title="Frequently Asked"
        titleAccent="Questions"
        subtitle="Straight answers about credentialing timelines, pricing, payer strategy, compliance, and working with us."
      />

      <section className="faq" style={{ background: '#fff', padding: '90px 5.5% 110px' }}>
        <div className="faq-in">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${active === i ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setActive(active === i ? null : i)}>
                  {f.q} <div className="faq-icon">+</div>
                </div>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Still Have"
        titleAccent="Questions?"
        text="Book a free consultation and we will answer every question specific to your practice, specialty, and payer mix."
      />
    </>
  );
}

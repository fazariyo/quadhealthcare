import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';

export const metadata = {
  title: 'Our Credentialing Process | Quad Healthcare Solutions',
  description:
    'A structured six-phase credentialing process — discovery, data collection, submission, follow-up, approval, and ongoing maintenance.',
};

const phases = [
  {
    n: '01',
    t: 'Discovery & Audit',
    d: 'We begin with a comprehensive audit of your current enrollment status. Your dedicated account manager reviews your NPI, CAQH profile, and any existing payer contracts to identify gaps and build a customized enrollment roadmap specific to your practice, location, and specialty.',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85',
  },
  {
    n: '02',
    t: 'Data Collection & Preparation',
    d: 'We provide a streamlined checklist of required documents — state licenses, DEA, malpractice insurance, board certifications. Once received, we build or thoroughly update your CAQH profile, PECOS record, and ensure all foundational data is 100% accurate to prevent initial rejections.',
    img: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=85',
  },
  {
    n: '03',
    t: 'Application Submission',
    d: 'Our team expertly completes all payer-specific applications, state Medicaid forms, and Medicare enrollments. We submit everything simultaneously to your targeted payers — eliminating sequential delays and accelerating your overall timeline to in-network status.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85',
  },
  {
    n: '04',
    t: 'Proactive Follow-Up',
    d: 'This is where we truly excel. We do not wait for portal updates or mailed letters. Our team proactively calls payer representatives on a scheduled basis, tracking each application through initial review, committee review, and final approval — addressing every request for additional information immediately.',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=85',
  },
  {
    n: '05',
    t: 'Contract Review & Approval',
    d: 'Once an application is approved, we review the fee schedules and contract terms. We provide a clear, final confirmation packet containing your effective dates and specific provider identification numbers (like PTANs) so your billing team can immediately begin submitting clean claims.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85',
  },
  {
    n: '06',
    t: 'Ongoing Maintenance',
    d: 'Credentialing is not a one-time event — it requires constant upkeep. We continuously monitor your CAQH attestations, track document expirations, and proactively manage your 2-to-3-year re-credentialing cycles so you never experience a lapse in network status or revenue.',
    img: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=800&q=85',
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Our Process' }]}
        title="From Application"
        titleAccent="to Approval"
        subtitle="A structured, proven six-phase process that eliminates delays, reduces denials, and gets your practice generating revenue faster."
      />

      <section className="ipage">
        <div className="ipage-in">
          <p>
            At Quad Healthcare Solutions, we have refined our credentialing and enrollment process to be as seamless as possible. We handle the heavy lifting, allowing your providers to focus on what matters most: patient care. Here is exactly how we take you from application to approval.
          </p>

          {phases.map((p) => (
            <div key={p.n} style={{ margin: '40px 0' }}>
              <div
                style={{
                  height: 260,
                  borderRadius: 16,
                  overflow: 'hidden',
                  marginBottom: 24,
                  position: 'relative',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.t}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.88)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 18,
                    left: 18,
                    background: 'rgba(7,22,40,0.85)',
                    color: '#fff',
                    fontFamily: 'var(--serif)',
                    fontSize: 18,
                    fontWeight: 700,
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  {p.n}
                </div>
              </div>
              <h2 style={{ marginTop: 0 }}>
                Phase {p.n}: {p.t}
              </h2>
              <p>{p.d}</p>
            </div>
          ))}

          <h2>Why Our Process Works</h2>
          <ul>
            <li><strong>Simultaneous submission</strong> across payers cuts enrollment timelines by 60–70%.</li>
            <li><strong>Proactive follow-up</strong> catches payer-side delays within days, not months.</li>
            <li><strong>Primary-source verification</strong> before submission eliminates the most common rejection causes.</li>
            <li><strong>Dedicated account managers</strong> mean every decision is made with full context of your practice.</li>
            <li><strong>Transparent status reporting</strong> gives you weekly visibility into every application.</li>
          </ul>
        </div>
      </section>

      <PageCta
        title="Ready to Start"
        titleAccent="Phase One?"
        text="Book a free discovery call — we will audit your current enrollment status and build a custom roadmap within 48 hours."
      />
    </>
  );
}

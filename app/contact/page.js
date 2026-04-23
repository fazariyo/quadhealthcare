import PageHero from '../../components/PageHero';
import ConsultationForm from '../../components/ConsultationForm';

export const metadata = {
  title: 'Contact Us | Quad Healthcare Solutions',
  description:
    'Request a free consultation. Tell us about your practice and we will build a custom enrollment and revenue-cycle plan.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        title="Let's Start Your"
        titleAccent="Credentialing."
        subtitle="Tell us about your practice. We will build a custom enrollment strategy — free of charge. Most providers are credentialed in 14–30 days."
      />

      <section className="contact" style={{ padding: '90px 5.5% 110px' }}>
        <div className="contact-glow"></div>
        <div className="contact-in">
          <div className="cinfo">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal2)', marginBottom: 18 }}>
              <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal2)' }}></span>Get In Touch
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px,3.4vw,44px)', fontWeight: 600, color: '#fff', lineHeight: 1.1 }}>
              We&apos;re here to help your<br /><span style={{ color: 'var(--teal2)' }}>practice grow.</span>
            </h2>
            <p className="sdesc">
              Our specialists answer every inquiry within one business day. Whether you need new enrollments, help unsticking a stalled application, or a full revenue-cycle audit — we will map out a plan for your practice.
            </p>
            <div className="cdet">
              <div className="cdet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Email</div>
                <div className="cdet-val">info@quadhealthcaresolutions.com</div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Phone</div>
                <div className="cdet-val">+1 (000) 000-0000</div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Office</div>
                <div className="cdet-val">123 Healthcare Ave, Suite 400<br />Atlanta, GA 30301</div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Business Hours</div>
                <div className="cdet-val">Monday – Friday, 9 AM – 6 PM EST</div>
              </div>
            </div>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}

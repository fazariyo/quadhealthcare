'use client';

import Link from 'next/link';

const LogoSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
    <defs>
      <mask id="gap-foot">
        <rect width="24" height="24" fill="white" />
        <circle cx="21" cy="12" r="4" fill="black" />
      </mask>
    </defs>
    <path mask="url(#gap-foot)" d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" />
    <path d="M20.3 9.5 h1.4 v1.8 h1.8 v1.4 h-1.8 v1.8 h-1.4 v-1.8 h-1.8 v-1.4 h1.8 z" fill="#fff" />
    <text x="12" y="16.5" fontFamily="'Cormorant Garamond', serif" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle">Q</text>
  </svg>
);

export default function Footer() {
  return (
    <footer>
      <div className="foot-in">
        <div className="foot-top">
          <div>
            <Link href="/" className="nlogo" style={{ textDecoration: 'none' }}>
              <div className="nlm"><LogoSvg /></div>
              <div className="nltxt">
                <span className="nlt">Quad Healthcare</span>
                <span className="nls">Solutions</span>
              </div>
            </Link>
            <p className="foot-desc">
              Specialized medical credentialing and provider enrollment for healthcare practices across the United States.
            </p>
          </div>
          <div className="fcol">
            <h5>Credentialing</h5>
            <Link href="/services/provider-enrollment">Provider Enrollment</Link>
            <Link href="/services/caqh-management">CAQH Management</Link>
            <Link href="/services/re-credentialing">Re-Credentialing</Link>
            <Link href="/services/contract-negotiation">Contract Negotiation</Link>
            <Link href="/services/npi-registration">NPI Registration</Link>
          </div>
          <div className="fcol">
            <h5>Medical Billing</h5>
            <Link href="/billing/claim-submission">Claim Submission</Link>
            <Link href="/billing/denial-management">Denial Management</Link>
            <Link href="/billing/ar-follow-up">A/R Follow-up</Link>
            <Link href="/billing/payment-posting">Payment Posting</Link>
            <Link href="/billing/patient-invoicing">Patient Invoicing</Link>
          </div>
          <div className="fcol">
            <h5>Company</h5>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ&apos;s</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/process">Our Process</Link>
            <Link href="/payer-network">Payer Network</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="foot-bot">
          <div className="foot-copy">© 2025 Quad Healthcare Solutions. All rights reserved.</div>
          <div className="foot-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

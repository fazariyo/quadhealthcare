import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';

export const metadata = {
  title: 'Compliance & Security | Quad Healthcare Solutions',
  description:
    'HIPAA, HITECH, OIG/SAM screening, and enterprise data security — our commitment to safeguarding your practice and your patient data.',
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Compliance' }]}
        title="Compliance"
        titleAccent="& Security"
        subtitle="HIPAA-aligned processes, OIG/SAM screening, and enterprise-grade data protection — because healthcare administration demands it."
      />

      <section className="ipage">
        <div className="ipage-in">
          <p><strong>Last updated:</strong> April 2026</p>

          <h2>1. Our Commitment to Compliance</h2>
          <p>
            Quad Healthcare Solutions is dedicated to maintaining the highest standards of ethics, integrity, and legal compliance in all our medical credentialing and billing operations. We ensure that our practices align with all federal, state, and local healthcare regulations — every day, across every file.
          </p>

          <h2>2. HIPAA &amp; HITECH Act Compliance</h2>
          <p>
            We strictly adhere to the Health Insurance Portability and Accountability Act (HIPAA) and the Health Information Technology for Economic and Clinical Health (HITECH) Act. We safeguard all Protected Health Information (PHI) and electronic Protected Health Information (ePHI), and we readily execute comprehensive Business Associate Agreements (BAAs) with all our practice partners.
          </p>
          <ul>
            <li>Signed BAA on file for every client engagement.</li>
            <li>Minimum-necessary standard applied to all PHI access.</li>
            <li>Documented breach-notification procedures aligned with 45 CFR §164.</li>
            <li>Annual HIPAA refresher training and policy attestation for all staff.</li>
          </ul>

          <h2>3. OIG &amp; SAM Exclusion Monitoring</h2>
          <p>
            To protect your practice from compliance risks and penalties, our credentialing processes include thorough background checks and continuous screening against the Office of Inspector General (OIG) List of Excluded Individuals/Entities (LEIE) and the System for Award Management (SAM) database. Monthly automated re-screening ensures nothing slips through.
          </p>

          <h2>4. Fraud, Waste &amp; Abuse (FWA)</h2>
          <p>
            We maintain a strict zero-tolerance policy for healthcare fraud, waste, and abuse. Our entire staff undergoes rigorous, mandatory FWA training annually, equipping them to identify, prevent, and report any suspicious activities within the revenue cycle or enrollment processes. We also support clients with their own internal FWA policy development.
          </p>

          <h2>5. Data Security &amp; Infrastructure</h2>
          <p>
            Our technology infrastructure utilizes enterprise-grade encryption for data both in transit (TLS 1.2+) and at rest (AES-256). We enforce strict role-based access controls, multi-factor authentication (MFA), and conduct regular vulnerability assessments to prevent unauthorized access to sensitive provider and patient data.
          </p>
          <ul>
            <li>SOC 2-aligned access controls and logging.</li>
            <li>Encrypted document portals for all client file exchanges.</li>
            <li>Quarterly third-party penetration testing.</li>
            <li>Least-privilege access with complete audit trails.</li>
          </ul>

          <h2>6. Auditing &amp; Monitoring</h2>
          <p>
            Quad Healthcare Solutions conducts routine internal audits and quality-assurance reviews of our credentialing files, claim submissions, and billing workflows to ensure strict adherence to payer-specific guidelines and federal billing regulations. Audit findings feed back into process improvement so compliance continually strengthens.
          </p>

          <h2>7. Regulatory Standards We Align With</h2>
          <ul>
            <li><strong>HIPAA Privacy &amp; Security Rules</strong> — 45 CFR Parts 160, 162, 164.</li>
            <li><strong>HITECH Breach Notification Rule</strong> — 45 CFR §164.400-414.</li>
            <li><strong>False Claims Act</strong> — 31 U.S.C. §§3729-3733.</li>
            <li><strong>Anti-Kickback Statute</strong> — 42 U.S.C. §1320a-7b.</li>
            <li><strong>Stark Law</strong> — 42 U.S.C. §1395nn.</li>
            <li><strong>CMS Medicare Provider Enrollment Regulations</strong> — 42 CFR §424.</li>
          </ul>

          <h2>8. Reporting a Concern</h2>
          <p>
            If you suspect a compliance issue related to any work performed by Quad Healthcare Solutions, contact our Compliance Officer at{' '}
            <a href="mailto:compliance@quadhealthcaresolutions.com">compliance@quadhealthcaresolutions.com</a>. All reports are reviewed confidentially and without retaliation.
          </p>
        </div>
      </section>

      <PageCta
        title="Partner With a"
        titleAccent="Compliant Vendor."
        text="Request our HIPAA compliance package, sample BAA, and security overview during your consultation."
      />
    </>
  );
}

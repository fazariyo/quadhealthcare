import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';
import PayerLogo from '../../components/PayerLogo';

export const metadata = {
  title: 'Our Payer Network | Quad Healthcare Solutions',
  description:
    'Direct working relationships with every major commercial, government, and regional payer — Aetna, Humana, BCBS, Optum/UHC, Medicare, Medicaid, and more.',
};

const payers = [
  { name: 'Aetna', type: 'Commercial', logo: 'Aetna-Logo.png', fb: 'Aetna' },
  { name: 'Humana', type: 'Commercial & Medicare', logo: 'https://logo.clearbit.com/humana.com', fb: 'Humana' },
  { name: 'Blue Cross Blue Shield', type: 'Commercial', logo: 'https://logo.clearbit.com/bcbs.com', fb: 'BCBS' },
  { name: 'Optum / UHC', type: 'Commercial', logo: 'https://logo.clearbit.com/optum.com', fb: 'Optum' },
  { name: 'Cigna', type: 'Commercial', logo: 'https://logo.clearbit.com/cigna.com', fb: 'Cigna' },
  { name: 'Magellan Health', type: 'Behavioral Health', logo: 'https://logo.clearbit.com/magellanhealth.com', fb: 'Magellan' },
  { name: 'Molina Healthcare', type: 'Medicaid / Marketplace', logo: 'https://logo.clearbit.com/molinahealthcare.com', fb: 'Molina' },
  { name: 'CareSource', type: 'Medicaid / Medicare', logo: 'https://logo.clearbit.com/caresource.com', fb: 'CareSource' },
  { name: 'Centene / Ambetter', type: 'Marketplace', logo: 'https://logo.clearbit.com/centene.com', fb: 'Centene' },
  { name: 'Medicare & Medicaid', type: 'Federal Programs', logo: 'https://logo.clearbit.com/cms.gov', fb: 'CMS' },
  { name: 'Tricare', type: 'Military & Dependent', logo: 'https://logo.clearbit.com/tricare.mil', fb: 'Tricare' },
  { name: 'Anthem / Elevance', type: 'Commercial', logo: 'https://logo.clearbit.com/elevancehealth.com', fb: 'Anthem' },
];

export default function PayerNetworkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Payer Network' }]}
        title="Relationships That"
        titleAccent="Open Doors"
        subtitle="Years of direct payer relationships mean faster turnaround, fewer rejections, and better contracts for your practice."
      />

      <section className="payers" style={{ padding: '90px 5.5%' }}>
        <div className="payers-glow"></div>
        <div className="payers-in">
          <div className="pgrid" style={{ marginTop: 0 }}>
            {payers.map((p) => (
              <div key={p.name} className="pcard rv">
                <div className="pcard-icon">
                  <PayerLogo src={p.logo} name={p.name} fallbackName={p.fb} />
                </div>
                <div className="pcard-name">{p.name}</div>
                <div className="pcard-type">{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ipage">
        <div className="ipage-in">
          <p>
            At Quad Healthcare Solutions, we understand that your practice&apos;s revenue depends on swift and accurate enrollment with the right insurance carriers. Over the years, we have cultivated direct, high-level relationships with major commercial, government, and regional payers across the United States.
          </p>

          <h2>Commercial Insurance Carriers</h2>
          <p>
            We streamline the credentialing and contracting processes with all national commercial health plans, including but not limited to:
          </p>
          <ul>
            <li><strong>Aetna:</strong> Comprehensive commercial, Medicare Advantage, and specialty networks.</li>
            <li><strong>Anthem / Blue Cross Blue Shield (BCBS):</strong> State-specific BCBS affiliates, Elevance, and Highmark.</li>
            <li><strong>Cigna:</strong> Commercial PPO, HMO, and behavioral health networks (Cigna-Evernorth).</li>
            <li><strong>Humana:</strong> Commercial, Medicare Advantage, and Tricare networks.</li>
            <li><strong>UnitedHealthcare (Optum):</strong> UHC Commercial, United Behavioral Health (UBH), and Optum networks.</li>
          </ul>

          <h2>Government &amp; Federal Programs</h2>
          <p>
            Navigating government enrollment requires precision. We handle the complex paperwork and compliance requirements for:
          </p>
          <ul>
            <li><strong>Medicare:</strong> Part A, Part B, and PECOS enrollments and revalidations.</li>
            <li><strong>Medicaid:</strong> State-specific Medicaid programs and Managed Care Organizations (MCOs).</li>
            <li><strong>Tricare:</strong> East and West regions for military and dependent care.</li>
            <li><strong>VA &amp; VA Community Care Network (CCN):</strong> Regional VA and CCN enrollments for veteran services.</li>
          </ul>

          <h2>Regional, Managed Care &amp; Specialty Payers</h2>
          <p>
            Beyond the national giants, we ensure you are covered with localized and specialty-specific plans:
          </p>
          <ul>
            <li><strong>Magellan Health:</strong> Premier behavioral health and specialty networks.</li>
            <li><strong>Molina Healthcare &amp; CareSource:</strong> Essential Medicaid, Medicare, and Marketplace plans.</li>
            <li><strong>Ambetter &amp; Centene:</strong> Rapidly growing health insurance marketplace networks.</li>
            <li><strong>Workers&apos; Compensation:</strong> State-specific workers&apos; comp networks and third-party administrators (TPAs).</li>
            <li><strong>Local IPAs &amp; ACOs:</strong> Independent Practice Associations and Accountable Care Organizations in key metro markets.</li>
          </ul>

          <h2>The Quad Advantage</h2>
          <p>
            Our deep understanding of each payer&apos;s unique application quirks, portal systems (like CAQH ProView and Availity), and committee review schedules allows us to bypass common delays. We don&apos;t just submit applications — we aggressively track and follow up with our designated payer representatives until your contract effective date is secured.
          </p>

          <h2>Direct Representative Access</h2>
          <p>
            For many of our high-volume payer networks, our team has direct phone and email access to specific credentialing representatives. That means when an application stalls, we don&apos;t wait on a generic call center queue — we escalate directly to someone who can resolve the issue.
          </p>
        </div>
      </section>

      <PageCta
        title="Get Into"
        titleAccent="The Right Networks."
        text="Tell us your specialty and location, and we will recommend the ideal payer mix for your practice — free consultation."
      />
    </>
  );
}

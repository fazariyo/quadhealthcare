import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';

export const metadata = {
  title: 'Privacy Policy | Quad Healthcare Solutions',
  description: 'How Quad Healthcare Solutions collects, uses, and protects your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Privacy Policy' }]} title="Privacy" titleAccent="Policy" subtitle="How we collect, use, and protect your data." />

      <section className="ipage">
        <div className="ipage-in">
          <p><strong>Last updated:</strong> April 2026</p>

          <h2>1. Introduction</h2>
          <p>
            Quad Healthcare Solutions (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we look after your personal data when you visit our website, engage us for services, or communicate with our team.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect, use, store, and transfer the following categories of personal data about you:</p>
          <ul>
            <li><strong>Identity Data:</strong> First name, last name, professional title, NPI number.</li>
            <li><strong>Contact Data:</strong> Email address, telephone numbers, practice address.</li>
            <li><strong>Professional Data:</strong> Practice name, specialty, licensure, board certifications, malpractice insurance details, CAQH ID, PECOS enrollment data.</li>
            <li><strong>Financial Data:</strong> Tax ID (EIN), banking details for EFT setup with payers (only as required for enrollment tasks).</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, analytics cookies used to operate our website.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data only where the law allows us to, principally to:</p>
          <ul>
            <li>Provide the credentialing, enrollment, and revenue-cycle services you have requested.</li>
            <li>Communicate with payers, licensing boards, and other credentialing bodies on your behalf.</li>
            <li>Manage our relationship with you, including billing and contract administration.</li>
            <li>Improve our website, service delivery, and internal processes.</li>
            <li>Comply with legal, regulatory, and contractual obligations (including HIPAA).</li>
          </ul>

          <h2>4. HIPAA &amp; PHI</h2>
          <p>
            Where we handle Protected Health Information (PHI), we do so under a signed Business Associate Agreement (BAA) with your practice. We apply the HIPAA minimum-necessary standard, maintain access logs, and safeguard PHI using administrative, physical, and technical controls aligned with 45 CFR Part 164.
          </p>

          <h2>5. Data Sharing</h2>
          <p>
            We share your data only with: (a) the insurance payers and government bodies required to complete your enrollments; (b) subprocessors who support our operations under contracts that impose strict confidentiality and security duties; and (c) legal authorities where required by law. We do not sell your personal data.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. These include encryption in transit and at rest, role-based access controls, multi-factor authentication, and regular vulnerability assessments.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Credentialing files are typically retained for the duration of your engagement plus seven years to meet payer audit timelines.
          </p>

          <h2>8. Your Legal Rights</h2>
          <p>
            Under applicable data protection laws, you may have rights to access, correct, erase, or restrict processing of your personal data, as well as to object to processing and request portability. To exercise these rights, contact{' '}
            <a href="mailto:privacy@quadhealthcaresolutions.com">privacy@quadhealthcaresolutions.com</a>.
          </p>

          <h2>9. Opt-In &amp; Opt-Out Policies</h2>
          <p>
            <strong>Email Communications:</strong> If you opt-in to our communications, you may receive promotional and informational emails. You can opt-out at any time by clicking the &quot;Unsubscribe&quot; link at the bottom of our emails or by contacting us directly.
          </p>
          <p>
            <strong>SMS / Text Messages:</strong> By providing your phone number and checking the consent box on our forms, you explicitly opt-in to receive text messages. You can opt-out of receiving SMS messages at any time by replying &quot;STOP&quot; to any message you receive from us. Standard message and data rates may apply.
          </p>

          <h2>10. Cookies</h2>
          <p>
            Our website uses essential cookies required for operation and analytics cookies to understand aggregate traffic patterns. You can control cookies through your browser settings. Disabling cookies may affect site functionality.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about this policy can be directed to <a href="mailto:privacy@quadhealthcaresolutions.com">privacy@quadhealthcaresolutions.com</a>.
          </p>
        </div>
      </section>

      <PageCta
        title="Have Questions About"
        titleAccent="Your Data?"
        text="We are happy to explain how we handle any specific data scenario for your practice."
      />
    </>
  );
}

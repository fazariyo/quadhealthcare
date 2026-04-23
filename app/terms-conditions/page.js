import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';

export const metadata = {
  title: 'Terms & Conditions | Quad Healthcare Solutions',
  description: 'Terms of service for the Quad Healthcare Solutions website and engagements.',
};

export default function TermsConditions() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Terms & Conditions' }]} title="Terms" titleAccent="& Conditions" subtitle="The rules for using our website and engaging our services." />

      <section className="ipage">
        <div className="ipage-in">
          <p><strong>Last updated:</strong> April 2026</p>

          <h2>1. Terms</h2>
          <p>
            By accessing the Quad Healthcare Solutions website, you agree to be bound by these terms of service, all applicable laws and regulations, and acknowledge you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Quad Healthcare Solutions&apos; website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display;</li>
            <li>attempt to decompile or reverse engineer any software contained on our website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Quad Healthcare Solutions at any time.
          </p>

          <h2>3. Services &amp; Engagement</h2>
          <p>
            Specific terms of any credentialing, enrollment, or medical billing services engagement are governed by the separately executed Services Agreement and Business Associate Agreement (BAA) between Quad Healthcare Solutions and your practice. In the event of any conflict between these website Terms and the Services Agreement, the Services Agreement controls.
          </p>

          <h2>4. Disclaimer</h2>
          <p>
            The materials on our website are provided on an &quot;as is&quot; basis. Quad Healthcare Solutions makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Content on the website is for general informational purposes and does not constitute legal, regulatory, or billing advice. Specific credentialing, billing, and compliance decisions should be made in consultation with qualified professionals.
          </p>

          <h2>5. Limitations</h2>
          <p>
            In no event shall Quad Healthcare Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if Quad Healthcare Solutions or a Quad Healthcare Solutions authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>6. Accuracy of Materials</h2>
          <p>
            The materials appearing on our website could include technical, typographical, or photographic errors. Quad Healthcare Solutions does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
          </p>

          <h2>7. Links</h2>
          <p>
            Quad Healthcare Solutions has not reviewed all sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement. Use of any linked website is at the user&apos;s own risk.
          </p>

          <h2>8. Modifications</h2>
          <p>
            Quad Healthcare Solutions may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then-current version of these terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States and the State of Georgia, and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these Terms can be sent to <a href="mailto:legal@quadhealthcaresolutions.com">legal@quadhealthcaresolutions.com</a>.
          </p>
        </div>
      </section>

      <PageCta
        title="Ready to"
        titleAccent="Get Started?"
        text="Reach out and we will share a full Services Agreement and BAA tailored to your practice."
      />
    </>
  );
}

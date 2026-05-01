import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';

export const metadata = {
  title: 'Terms & Conditions | Quad Healthcare Solutions',
  description: 'Terms of service for the Quad Healthcare Solutions website and engagements.',
};

export default function TermsConditions() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Terms & Conditions' }]}
        title="Terms"
        titleAccent="& Conditions"
        subtitle="The rules for using our website and engaging our services."
      />

      <section className="ipage">
        <div className="ipage-in">
          <p>
            Welcome to Quad Healthcare Solutions website. By accessing or using this Site, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these Terms, you must not use this Site.
          </p>

          <h2>Consent</h2>
          <p>
            By submitting phone number in the contact us form or initiating a message to Quad Healthcare Solutions phone number, you consent to receive marketing messages from Quad Healthcare Solutions. Message and data rates may apply. Message frequency varies. Unsubscribe anytime by replying STOP. Reply HELP for help.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify, update, or replace these Terms at any time. Your continued use of the Site after any changes indicate your acceptance of those changes.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this Site, including text, graphics, logos, images, audio clips, and software, is the property of Quad Healthcare Solutions and protected by intellectual property laws. You may not use, reproduce, distribute, modify, or create derivative works without our express written consent.
          </p>

          <h2>Privacy</h2>
          <p>
            Your use of this Site is also governed by our Privacy Policy, which is incorporated into these Terms. Please review our Privacy Policy to understand our practices.
          </p>

          <h2>User Conduct</h2>
          <p>
            You agree to use the Site for lawful purposes and in a manner consistent with all applicable laws and regulations. You may not engage in any conduct that could damage, disable, or impair the functionality or security of the Site.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites or resources. We are not responsible for the content, products, or services on these sites. Your use of third-party websites is at your own risk.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The information provided on this Site is for general informational purposes only. We make no warranties about the accuracy, completeness, or reliability of the content. Your use of the Site is at your own risk.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Quad Healthcare Solutions not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of Wyoming, without regard to its conflict of law principles.
          </p>

          <h2>Prohibited Activities</h2>
          <p>
            You agree not to engage in any activity that disrupts or interferes with the proper functioning of the Site or services.
          </p>

          <h2>Email Communication</h2>
          <p>
            By providing your email address, you consent to receive communications from us, including promotional emails. You may opt-out at any time.
          </p>

          <h2>Termination of Access</h2>
          <p>
            We reserve the right to terminate or suspend your access to the Site without prior notice for any violation of these Terms.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold us harmless from any claims, damages, losses, or liabilities arising out of your use of the Site.
          </p>

          <h2>Cookies</h2>
          <p>
            The Site may use cookies to enhance your user experience. You can choose to disable cookies in your browser settings.
          </p>

          <h2>Mobile Services</h2>
          <p>
            If you access the Site via a mobile device, standard messaging, data, and other fees may apply according to your carrier&apos;s terms.
          </p>

          <h2>Governing Language</h2>
          <p>
            In case of discrepancies between translated versions of these Terms, the English version prevails.
          </p>

          <h2>Accessibility</h2>
          <p>
            We strive to ensure the accessibility of the Site to individuals with disabilities and welcome feedback on how we can improve.
          </p>

          <h2>Testimonials</h2>
          <p>
            By submitting a testimonial, you grant us the right to use, reproduce, and publish it on the Site.
          </p>

          <h2>Force Majeure</h2>
          <p>
            We are not liable for any failure or delay in performing obligations due to events beyond our reasonable control.
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and Quad Healthcare Solutions regarding the Site.
          </p>

          <h2>Headings</h2>
          <p>
            The headings used in these Terms are for convenience and do not affect the interpretation of the provisions.
          </p>

          <h2>Waiver</h2>
          <p>
            Any waiver of a provision of these Terms will only be effective if in writing and signed by us.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at{' '}
            <a href="mailto:info@quadhealthcaresolutions.com">info@quadhealthcaresolutions.com</a>.
          </p>

          <p>
            By using this Site, you acknowledge that you have read, understood, and agree to these Terms and our Privacy Policy.
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

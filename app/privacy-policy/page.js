import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';

export const metadata = {
  title: 'Privacy Policy | Quad Healthcare Solutions',
  description: 'How Quad Healthcare Solutions collects, uses, and protects your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Privacy Policy' }]}
        title="Privacy"
        titleAccent="Policy"
        subtitle="How we collect, use, and protect your data."
      />

      <section className="ipage">
        <div className="ipage-in">
          <p>
            Quad Healthcare Solutions (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is dedicated to safeguarding your privacy and protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to ensure its security. By using our services, you agree to the terms of this Privacy Policy.
          </p>

          <h2>1. Information Collection and Use</h2>
          <p>
            While using our site, we may ask you to provide certain personally identifiable information that can be used to contact or identify you. This information may include, but is not limited to, your name, email address, and phone number (&ldquo;Personal Information&rdquo;).
          </p>
          <p>
            Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>

          <h2>2. Log Data</h2>
          <p>
            We collect information that your browser sends whenever you visit our site (&ldquo;Log Data&rdquo;). This Log Data may include details such as your computer&apos;s Internet Protocol (&ldquo;IP&rdquo;) address, browser type, browser version, and the pages of our site that you visit.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Cookies are small files with data, including an anonymous unique identifier, sent to your browser from a website and stored on your computer&apos;s hard drive. For more details, please refer to our Cookie Policy below.
          </p>

          <h2>4. Security</h2>
          <p>
            The security of your Personal Information is important to us. We employ commercially acceptable means to protect your Personal Information.
          </p>

          <h2>5. Opt-Out</h2>
          <p>
            If you wish to be removed from receiving future communications, you can opt-out by texting STOP.
          </p>

          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            This Privacy Policy is effective as of January 01, 2025, and will remain in effect except for any changes in its provisions in the future, which will take effect immediately upon being posted on this page.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:info@quadhealthcaresolutions.com">info@quadhealthcaresolutions.com</a>.
          </p>

          <h2>Cookie Policy</h2>

          <h3>1. Introduction</h3>
          <p>
            This Cookie Policy explains how we use cookies and similar tracking technologies when you visit our website. It informs you about the types of cookies we use, the purposes for which we use them, and your choices regarding their use.
          </p>

          <h3>2. What Are Cookies</h3>
          <p>
            Cookies are small text files stored on your computer or mobile device when you visit a website. They help the website recognize your device and remember information about your visit, such as your preferences and settings.
          </p>

          <h3>3. Types of Cookies We Use</h3>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Necessary for the proper functioning of our website. They enable you to navigate the site and use its features.
            </li>
            <li>
              <strong>Analytical/Performance Cookies:</strong> Help us analyze how visitors use our website, allowing us to improve its performance.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Enable our website to remember choices you make, such as language preferences, and provide enhanced features.
            </li>
            <li>
              <strong>Targeting/Advertising Cookies:</strong> Used to deliver content that is more relevant to you and your interests.
            </li>
          </ul>

          <h3>4. Your Choices</h3>
          <p>
            By using our website, you consent to the use of cookies as described in this policy. You can control and manage cookies in various ways. Please refer to your browser settings for more information on how to block or delete cookies.
          </p>

          <h3>5. Changes to This Cookie Policy</h3>
          <p>
            By using our website, you consent to the use of cookies as described in this policy. You can control and manage cookies in various ways. Please refer to your browser settings for more information on how to block or delete cookies.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about our Cookie Policy, please contact us at{' '}
            <a href="mailto:info@quadhealthcaresolutions.com">info@quadhealthcaresolutions.com</a>.
          </p>

          <p>
            By using our services, you acknowledge that you have read and understood this Privacy Policy and Cookie Policy, and agree to their terms.
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

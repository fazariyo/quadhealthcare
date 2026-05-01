import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';

export const metadata = {
  title: 'Compliance & Security | Quad Healthcare Solutions',
  description:
    'HIPAA-aligned processes and enterprise-grade data security — our commitment to safeguarding your practice and your patient data.',
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Compliance' }]}
        title="Compliance"
        titleAccent="& Security"
        subtitle="Ensuring data security and compliance in healthcare administration."
      />

      <section className="ipage">
        <div className="ipage-in">
          <h2>Ensuring Data Security and Compliance in Healthcare</h2>
          <p>
            Quad Healthcare Solutions takes data security and privacy seriously. We adhere to all industry compliance regulations to protect your practice&apos;s and your patients&apos; data. Our proactive measures include regular monitoring of employees to prevent data breaches and ensure privacy. Rest assured, we prioritize your data security and privacy to maintain the highest standards of compliance in healthcare administration.
          </p>

          <h2>HIPAA Compliance</h2>
          <h3>Adherence to HIPAA Regulations for Data Security and Privacy of PHI</h3>
          <p>
            Quad Healthcare Solutions understands the critical importance of complying with the Health Insurance Portability and Accountability Act (HIPAA) regulations to ensure the security and privacy of protected health information (PHI). HIPAA regulations are designed to protect sensitive patient information from being disclosed without the patient&apos;s consent or knowledge.
          </p>
          <p>
            We adhere to HIPAA regulations by implementing strict policies and procedures to safeguard patient data. This includes ensuring that only authorized personnel have access to patient information, using secure methods for transmitting data, and regularly auditing our systems for compliance. Additionally, we provide ongoing training to our staff to ensure they understand the importance of HIPAA compliance and how to properly handle patient information. By following HIPAA regulations, we are able to protect patient privacy and maintain the integrity of their health information.
          </p>
        </div>
      </section>

      <PageCta
        title="Partner With a"
        titleAccent="Compliant Vendor."
        text="Request our HIPAA compliance package and security overview during your consultation."
      />
    </>
  );
}

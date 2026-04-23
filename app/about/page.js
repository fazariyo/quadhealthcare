import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';

export const metadata = {
  title: 'About Us | Quad Healthcare Solutions',
  description:
    'Quad Healthcare Solutions is a specialized medical credentialing and revenue-cycle firm serving healthcare practices across the United States.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'About Us' }]}
        title="About Quad Healthcare"
        titleAccent="Solutions"
        subtitle="A specialized credentialing and revenue-cycle firm built for the realities of modern healthcare administration — precise, proactive, relentless."
      />

      <section className="ipage">
        <div className="ipage-in">
          <div className="ipage-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1400&q=85" alt="Healthcare team" />
          </div>

          <h2>Who We Are</h2>
          <p>
            Quad Healthcare Solutions is a premier provider of medical credentialing, provider enrollment, and comprehensive medical billing services. Founded with a deep understanding of the administrative challenges healthcare providers face, our goal is to simplify the complex business side of medicine. Our team of seasoned industry experts works as an extension of your practice — ensuring you remain compliant, in-network, and financially optimized.
          </p>

          <h2>Our Mission</h2>
          <p>
            To empower healthcare practices by delivering exceptional, transparent, and efficient credentialing and revenue-cycle management solutions. We remove the administrative barriers between providers and their patients, enabling practices to focus entirely on delivering high-quality care while we handle the rest.
          </p>

          <h2>Our Vision</h2>
          <p>
            To be the most trusted healthcare administrative partner in the nation — recognized for our unwavering commitment to client success, operational excellence, and industry integrity.
          </p>

          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards, ensuring honesty and compliance in every interaction with payers and providers.</li>
            <li><strong>Excellence:</strong> We strive for perfection in every application submitted, contract negotiated, and claim processed.</li>
            <li><strong>Transparency:</strong> We believe in clear, consistent, and proactive communication. You will always know the exact status of your enrollments and billing.</li>
            <li><strong>Partnership:</strong> We view our clients as partners. Your practice&apos;s growth and financial health are our benchmarks for success.</li>
            <li><strong>Accountability:</strong> We own every deadline, every follow-up, and every outcome. No ticket queues, no call centers — just a dedicated account manager who knows your file.</li>
          </ul>

          <h2>Who We Serve</h2>
          <p>
            We work with solo practitioners, group practices, hospitals, ambulatory surgery centers, behavioral health clinics, physical therapy groups, chiropractors, DME suppliers, and telehealth providers. From credentialing a single new physician to onboarding a 50-provider multi-specialty group, our model scales with your practice.
          </p>

          <h2>What Makes Us Different</h2>
          <p>
            What sets Quad Healthcare Solutions apart is our relentless dedication to follow-up and our deep relationships with major insurance networks. We don&apos;t believe in ticket queues or automated responses. Every client is assigned a dedicated account manager who knows your practice inside and out. From solo practitioners to large multi-specialty groups, we tailor our approach to meet your specific goals — ensuring you get credentialed faster and paid accurately.
          </p>

          <h2>By the Numbers</h2>
          <ul>
            <li><strong>500+ providers credentialed</strong> across all 50 states.</li>
            <li><strong>98% approval rate</strong> on first-pass payer submissions.</li>
            <li><strong>14-day average enrollment</strong> vs. the industry norm of 90–120 days.</li>
            <li><strong>7+ major payer networks</strong> with direct working relationships.</li>
          </ul>
        </div>
      </section>

      <PageCta
        title="Let's Build Your"
        titleAccent="Credentialing Strategy."
        text="Book a free consultation and we will map out a custom enrollment and revenue-cycle plan for your practice."
      />
    </>
  );
}

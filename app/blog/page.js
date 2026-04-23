import Link from 'next/link';
import PageHero from '../../components/PageHero';
import PageCta from '../../components/PageCta';
import { blog } from '../../components/content/blog';

export const metadata = {
  title: 'Healthcare Credentialing Blog | Quad Healthcare Solutions',
  description:
    'Expert articles on medical credentialing, CAQH, PECOS, payer contracting, and revenue-cycle best practices.',
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Blog' }]}
        title="Healthcare Credentialing"
        titleAccent="Blog"
        subtitle="Stay ahead of CAQH, PECOS, and commercial-payer changes with practical insights from our credentialing and revenue-cycle specialists."
      />

      <section className="blog" style={{ padding: '90px 5.5% 110px' }}>
        <div className="blog-in">
          <div className="blog-grid">
            {blog.map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}`} className="bcard">
                <div className="bcard-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.image} alt={b.title} />
                </div>
                <div className="bcard-body">
                  <div className="bcard-tag">{b.category}</div>
                  <div className="bcard-title">{b.title}</div>
                  <div className="bcard-excerpt">{b.excerpt}</div>
                  <div className="bcard-link">
                    Read Full Article <span style={{ fontSize: 16 }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Want Expert Help"
        titleAccent="On Your Practice?"
        text="Get a free credentialing or revenue-cycle audit tailored to your specialty and payer mix."
      />
    </>
  );
}

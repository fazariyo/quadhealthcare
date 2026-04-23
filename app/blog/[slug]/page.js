import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '../../../components/PageHero';
import PageCta from '../../../components/PageCta';
import ContentBlocks from '../../../components/ContentBlocks';
import { blog } from '../../../components/content/blog';

export function generateStaticParams() {
  return blog.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }) {
  const b = blog.find((x) => x.slug === params.slug);
  if (!b) return {};
  return { title: `${b.title} | Quad Healthcare Solutions`, description: b.excerpt };
}

export default function BlogPost({ params }) {
  const post = blog.find((b) => b.slug === params.slug);
  if (!post) notFound();

  const related = blog.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Blog', href: '/blog' }, { label: post.category }]}
        title={post.title}
        subtitle={post.excerpt}
      />

      <section className="ipage">
        <div className="ipage-in">
          <p style={{ color: 'var(--gm)', fontSize: 14, marginBottom: 24 }}>
            <strong style={{ color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: 1.5 }}>
              {post.category}
            </strong>{' '}
            &nbsp;•&nbsp; Published {post.date}
          </p>
          <div className="ipage-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} />
          </div>
          <ContentBlocks blocks={post.blocks} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="related">
          <div className="related-in">
            <div className="related-head">
              <h3>More From the Blog</h3>
              <p>Keep learning about credentialing and revenue-cycle best practices.</p>
            </div>
            <div className="related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="related-card">
                  <div className="related-num">{r.category}</div>
                  <div className="related-title">{r.title}</div>
                  <div className="related-text">{r.excerpt}</div>
                  <div className="related-link">Read article →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCta
        title="Need Help With"
        titleAccent="Your Credentialing?"
        text="Free consultation — our team will audit your enrollment status and build a custom roadmap."
      />
    </>
  );
}

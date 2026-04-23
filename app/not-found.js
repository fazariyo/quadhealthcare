import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <h1>404</h1>
        <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="bteal">← Back to Home</Link>
      </div>
    </section>
  );
}

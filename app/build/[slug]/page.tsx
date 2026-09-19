import { notFound } from "next/navigation";
import { getBuildBySlug, buildData, BuildData } from "../../../data/build";
import { Metadata } from "next";

export async function generateStaticParams() {
  return buildData.map((build: BuildData) => ({
    slug: build.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const build = getBuildBySlug(params.slug);
  if (!build) return {};
  
  return {
    title: build.seoTitle,
    description: build.seoDescription,
    openGraph: {
      title: build.seoTitle,
      description: build.seoDescription,
    }
  };
}

export default function BuildPage({ params }: { params: { slug: string } }) {
  const build = getBuildBySlug(params.slug);
  if (!build) notFound();

  return (
    <main className="solution-page">
      <section className="hero section-pad">
        <div className="container">
          <div className="section-kicker">/ Development Guide / {build.title}</div>
          <h1>{build.heroHeading}</h1>
          <p className="hero-subheading">{build.heroSubheading}</p>
        </div>
      </section>

      <section className="overview section-pad">
        <div className="container">
          <h2>Overview & Architecture</h2>
          <p>{build.overview}</p>
        </div>
      </section>

      <section className="features section-pad">
        <div className="container">
          <h2>Core Requirements</h2>
          <div className="feature-grid" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '2rem' }}>
            {build.features.map((feature: { title: string, description: string }, i: number) => (
              <div key={i} className="feature-card" style={{ padding: '2rem', border: '1px solid #333', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '1rem', color: '#fff' }}>{feature.title}</h3>
                <p style={{ color: '#aaa' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {build.faqs.map((faq: { question: string, answer: string }, i: number) => (
              <div key={i} className="faq-item">
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>{faq.question}</h4>
                <p style={{ color: '#aaa' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": build.title,
            "author": {
              "@type": "Organization",
              "name": "Tecnobij Solutions"
            },
            "description": build.seoDescription
          })
        }}
      />
    </main>
  );
}

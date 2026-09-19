import { notFound } from "next/navigation";
import { getBusinessSystemBySlug, businessSystemsData, BusinessSystemData } from "../../../data/business-systems";
import { Metadata } from "next";

export async function generateStaticParams() {
  return businessSystemsData.map((system: BusinessSystemData) => ({
    slug: system.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const system = getBusinessSystemBySlug(params.slug);
  if (!system) return {};
  
  return {
    title: system.seoTitle,
    description: system.seoDescription,
    openGraph: {
      title: system.seoTitle,
      description: system.seoDescription,
    }
  };
}

export default function BusinessSystemPage({ params }: { params: { slug: string } }) {
  const system = getBusinessSystemBySlug(params.slug);
  if (!system) notFound();

  return (
    <main className="solution-page">
      <section className="hero section-pad">
        <div className="container">
          <div className="section-kicker">/ Business Core Systems / {system.title}</div>
          <h1>{system.heroHeading}</h1>
          <p className="hero-subheading">{system.heroSubheading}</p>
        </div>
      </section>

      <section className="overview section-pad">
        <div className="container">
          <h2>Overview</h2>
          <p>{system.overview}</p>
        </div>
      </section>

      <section className="features section-pad">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '2rem' }}>
            {system.features.map((feature: { title: string, description: string }, i: number) => (
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
            {system.faqs.map((faq: { question: string, answer: string }, i: number) => (
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
            "@type": "SoftwareApplication",
            "name": system.title,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, Mobile, Desktop",
            "provider": {
              "@type": "Organization",
              "name": "Tecnobij Solutions"
            },
            "description": system.seoDescription
          })
        }}
      />
    </main>
  );
}

import { notFound } from "next/navigation";
import { getSolutionBySlug, solutionsData, SolutionData } from "../../../data/solutions";
import { Metadata } from "next";

export async function generateStaticParams() {
  return solutionsData.map((solution: SolutionData) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};
  
  return {
    title: solution.seoTitle,
    description: solution.seoDescription,
    openGraph: {
      title: solution.seoTitle,
      description: solution.seoDescription,
    }
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  // Basic SEO Page layout
  return (
    <main className="solution-page">
      <section className="hero section-pad">
        <div className="container">
          <div className="section-kicker">/ Solutions / {solution.title}</div>
          <h1>{solution.heroHeading}</h1>
          <p className="hero-subheading">{solution.heroSubheading}</p>
        </div>
      </section>

      <section className="overview section-pad">
        <div className="container">
          <h2>Overview</h2>
          <p>{solution.overview}</p>
        </div>
      </section>

      <section className="features section-pad">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '2rem' }}>
            {solution.features.map((feature: { title: string, description: string }, i: number) => (
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
            {solution.faqs.map((faq: { question: string, answer: string }, i: number) => (
              <div key={i} className="faq-item">
                <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>{faq.question}</h4>
                <p style={{ color: '#aaa' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Dynamic JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": solution.title,
            "provider": {
              "@type": "Organization",
              "name": "Tecnobij Solutions"
            },
            "description": solution.seoDescription
          })
        }}
      />
    </main>
  );
}

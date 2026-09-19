import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Process | How We Build | Tecnobij Solutions",
  description: "Our step-by-step transparent development process from discovery and UI/UX to development, testing, and deployment.",
};

export default function ProcessPage() {
  return (
    <main className="solution-page">
      <section className="hero section-pad">
        <div className="container">
          <div className="section-kicker">/ Development Process</div>
          <h1>How We Build<br /><em>Your Product.</em></h1>
          <p className="hero-subheading">A transparent look at how we take your idea from concept to a working business solution.</p>
        </div>
      </section>

      <section className="process-timeline section-pad">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px' }}>
          
          <div className="process-step" style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--lime)', color: 'var(--deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>1</div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Discovery & Requirements</h3>
              <p style={{ color: '#a2b1bd', lineHeight: 1.6 }}>We begin by understanding your business model, current bottlenecks, and exactly what this software needs to achieve. We don't just take an order; we analyze the business case.</p>
            </div>
          </div>

          <div className="process-step" style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--lime)', color: 'var(--deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>2</div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Solution Architecture</h3>
              <p style={{ color: '#a2b1bd', lineHeight: 1.6 }}>Before writing a single line of code, we design the database schema, API structures, and select the right technology stack (e.g., Next.js, Flutter, Node.js) to ensure scalability and security.</p>
            </div>
          </div>

          <div className="process-step" style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--lime)', color: 'var(--deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>3</div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>UI / UX Design</h3>
              <p style={{ color: '#a2b1bd', lineHeight: 1.6 }}>We create high-fidelity wireframes and interactive prototypes. You get to see and "feel" the application before development begins, ensuring the user experience matches your expectations.</p>
            </div>
          </div>

          <div className="process-step" style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--lime)', color: 'var(--deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>4</div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Development</h3>
              <p style={{ color: '#a2b1bd', lineHeight: 1.6 }}>Our engineering team builds the frontend and backend in parallel. We work in sprints, providing regular updates and test builds so you have complete visibility into the progress.</p>
            </div>
          </div>

          <div className="process-step" style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--lime)', color: 'var(--deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>5</div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Testing (QA)</h3>
              <p style={{ color: '#a2b1bd', lineHeight: 1.6 }}>Rigorous testing for functionality, security, performance, and cross-device compatibility. We ensure the software behaves correctly under stress and handles edge cases gracefully.</p>
            </div>
          </div>

          <div className="process-step" style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--lime)', color: 'var(--deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>6</div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Deployment & Launch</h3>
              <p style={{ color: '#a2b1bd', lineHeight: 1.6 }}>We deploy the backend to secure cloud infrastructure (AWS/Vercel/DigitalOcean) and publish mobile apps to the Apple App Store and Google Play Store.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="included section-pad" style={{ backgroundColor: '#0b0f13', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-kicker">/ transparency</div>
          <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem', color: '#fff' }}>What is included?</h2>
          <p style={{ color: '#a2b1bd', marginBottom: '2rem', maxWidth: '600px', lineHeight: 1.6 }}>Your project isn't just code. Depending on the engagement, a standard bespoke software project with Tecnobij includes:</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {[
              "Requirement Analysis", "UI/UX Design", "System Architecture",
              "Frontend Development", "Backend/API Development", "Database Setup",
              "QA & Testing", "Cloud Deployment", "App Store Publishing",
              "Source Code Handover", "Admin Documentation", "Post-Launch Support"
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 'bold' }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

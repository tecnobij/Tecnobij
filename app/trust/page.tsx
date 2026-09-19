import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust Center | Security & Transparency | Tecnobij Solutions",
  description: "Learn how we handle your IP, source code, data security, and long-term support. Complete transparency in how we build business software.",
};

export default function TrustPage() {
  return (
    <main className="solution-page">
      <section className="hero section-pad">
        <div className="container">
          <div className="section-kicker">/ Tecnobij Trust Center</div>
          <h1>Transparency. Security.<br /><em>Ownership.</em></h1>
          <p className="hero-subheading">A clear outline of how we handle your intellectual property, data security, and long-term support.</p>
        </div>
      </section>

      <section className="trust-content section-pad">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px' }}>
          
          <div className="trust-block">
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Your Product. Your Data. Your Ownership.</h2>
            <p style={{ color: '#a2b1bd', marginBottom: '1rem', lineHeight: 1.6 }}>We believe that if you pay for custom software, you should own it. We do not hold your code hostage or force you into proprietary lock-in.</p>
            <ul style={{ color: '#a2b1bd', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <li><strong>Source Code Ownership:</strong> Upon project completion and final payment, the complete source code is handed over to you.</li>
              <li><strong>Intellectual Property:</strong> You own the IP of the custom solution we build for your business.</li>
              <li><strong>No Vendor Lock-in:</strong> We build using open-source and industry-standard technologies (Next.js, Flutter, Node.js, Python), ensuring any competent team can take over if needed.</li>
              <li><strong>Non-Disclosure Agreements (NDA):</strong> We sign strict NDAs before you even share your initial idea. Your business logic remains confidential.</li>
            </ul>
          </div>

          <div className="trust-block">
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>How We Protect Your Application</h2>
            <p style={{ color: '#a2b1bd', marginBottom: '1rem', lineHeight: 1.6 }}>Security isn't an afterthought. It's built into the architecture from day one.</p>
            <ul style={{ color: '#a2b1bd', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <li><strong>Authentication & Authorization:</strong> Secure token-based authentication and strict Role-Based Access Control (RBAC) to ensure users only see what they are allowed to see.</li>
              <li><strong>Data Encryption:</strong> All data is encrypted in transit (HTTPS/TLS) and at rest.</li>
              <li><strong>Database Security:</strong> We enforce strict database rules, parameterized queries to prevent SQL injection, and regular automated backups.</li>
              <li><strong>Secrets Management:</strong> API keys and sensitive credentials are never hardcoded and are managed securely via environment variables.</li>
            </ul>
          </div>

          <div className="trust-block">
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Company Verification</h2>
            <p style={{ color: '#a2b1bd', marginBottom: '1rem', lineHeight: 1.6 }}>We are a registered technology company operating from Pune, India, with a track record of delivering real systems for real businesses.</p>
            <div style={{ padding: '2rem', backgroundColor: '#11151a', borderRadius: '12px', border: '1px solid #1a222c', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div>
                <div style={{ color: 'var(--lime)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Operating Since</div>
                <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>2021</div>
              </div>
              <div>
                <div style={{ color: 'var(--lime)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Location</div>
                <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>Pune, Maharashtra</div>
              </div>
              <div>
                <div style={{ color: 'var(--lime)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Projects Delivered</div>
                <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>100+</div>
              </div>
              <div>
                <div style={{ color: 'var(--lime)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Academic Partnerships</div>
                <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>2 Official MoUs</div>
              </div>
            </div>
          </div>

          <div className="trust-block">
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Support After Launch</h2>
            <p style={{ color: '#a2b1bd', marginBottom: '1rem', lineHeight: 1.6 }}>The launch is just the beginning. A major concern for businesses is what happens after the software goes live.</p>
            <ul style={{ color: '#a2b1bd', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <li><strong>Bug Support:</strong> Immediate resolution for any critical issues that arise post-launch.</li>
              <li><strong>Maintenance & Monitoring:</strong> We actively monitor server health, uptime, and error logs to ensure smooth operations.</li>
              <li><strong>Scaling & New Features:</strong> As your business grows, we act as your ongoing tech team to build and integrate new modules.</li>
            </ul>
          </div>
          
        </div>
      </section>
    </main>
  );
}

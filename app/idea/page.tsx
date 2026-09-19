import { Metadata } from "next";
import { OutcomeForm } from "../../components/OutcomeForm";

export const metadata: Metadata = {
  title: "Start Your Project | Tecnobij Solutions",
  description: "Tell us about your business idea or problem, and we'll help you architect the right software solution.",
};

export default function IdeaPage() {
  return (
    <main className="solution-page">
      <section className="hero section-pad">
        <div className="container">
          <div className="section-kicker">/ Let's Build</div>
          <h1>From Idea to<br /><em>Technology.</em></h1>
          <p className="hero-subheading">Tell us what you're trying to achieve, and we'll build the system around it.</p>
        </div>
      </section>

      <section className="form-section section-pad">
        <div className="container">
          <OutcomeForm />
        </div>
      </section>
    </main>
  );
}

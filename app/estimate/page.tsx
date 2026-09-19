import { Metadata } from "next";
import { CostCalculator } from "../../components/CostCalculator";

export const metadata: Metadata = {
  title: "Project Cost Calculator | Tecnobij Solutions",
  description: "Estimate the complexity and cost of your custom software, app, or website project.",
};

export default function EstimatePage() {
  return (
    <main className="solution-page">
      <section className="hero section-pad">
        <div className="container">
          <div className="section-kicker">/ Pricing Transparency</div>
          <h1>Estimate Your<br /><em>Project.</em></h1>
          <p className="hero-subheading">Get an initial idea of the complexity of your software build.</p>
        </div>
      </section>

      <section className="calculator section-pad">
        <div className="container">
          <CostCalculator />
        </div>
      </section>
    </main>
  );
}

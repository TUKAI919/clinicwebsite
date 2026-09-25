import HeroSection from './components/HeroSection';
import TransformationShowcase from './components/TransformationShowcase';
import GraftCalculator from './components/GraftCalculator';
import TechniqueComparison from './components/TechniqueComparison';
import SurgeonCredentials from './components/SurgeonCredentials';
import PatientReviews from './components/PatientReviews';
import MedicalFAQ from './components/MedicalFAQ';
import FinalSection from './components/FinalSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Section 1: Hero & Navbar */}
      <header id="home" className="scroll-mt-24">
        <HeroSection />
      </header>

      <main>
        {/* Section 2: Before & After Transformations */}
        <section id="results" className="scroll-mt-24">
          <TransformationShowcase />
        </section>

        {/* Section 3: Graft & Cost Calculator */}
        <section id="calculator" className="scroll-mt-24">
          <GraftCalculator />
        </section>

        {/* Section 4: Technique Comparison */}
        <section id="techniques" className="scroll-mt-24">
          <TechniqueComparison />
        </section>

        {/* Section 5: Surgeon Credentials */}
        <section id="surgeon" className="scroll-mt-24">
          <SurgeonCredentials />
        </section>

        {/* Section 6: Patient Reviews */}
        <section id="reviews" className="scroll-mt-24">
          <PatientReviews />
        </section>

        {/* Section 7: Medical FAQ */}
        <section id="faq" className="scroll-mt-24">
          <MedicalFAQ />
        </section>
      </main>

      {/* Section 8: Footer & Pre-Footer CTA */}
      <footer>
        <FinalSection />
      </footer>
    </div>
  );
}

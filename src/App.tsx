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
      <HeroSection />
      <TransformationShowcase />
      <GraftCalculator />
      <TechniqueComparison />
      <SurgeonCredentials />
      <PatientReviews />
      <MedicalFAQ />
      <FinalSection />
    </div>
  );
}

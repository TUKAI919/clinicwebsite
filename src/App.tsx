import HeroSection from './components/HeroSection';
import TransformationShowcase from './components/TransformationShowcase';
import GraftCalculator from './components/GraftCalculator';
import TechniqueComparison from './components/TechniqueComparison';
import SurgeonCredentials from './components/SurgeonCredentials';
import PatientReviews from './components/PatientReviews';
import MedicalFAQ from './components/MedicalFAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TransformationShowcase />
      <GraftCalculator />
      <TechniqueComparison />
      <SurgeonCredentials />
      <PatientReviews />
      <MedicalFAQ />
    </div>
  );
}

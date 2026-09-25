import HeroSection from './components/HeroSection';
import TransformationShowcase from './components/TransformationShowcase';
import GraftCalculator from './components/GraftCalculator';
import TechniqueComparison from './components/TechniqueComparison';
import SurgeonCredentials from './components/SurgeonCredentials';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TransformationShowcase />
      <GraftCalculator />
      <TechniqueComparison />
      <SurgeonCredentials />
    </div>
  );
}

import HeroSection from './components/HeroSection';
import TransformationShowcase from './components/TransformationShowcase';
import GraftCalculator from './components/GraftCalculator';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TransformationShowcase />
      <GraftCalculator />
    </div>
  );
}

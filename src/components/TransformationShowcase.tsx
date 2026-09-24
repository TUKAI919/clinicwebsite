import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Scissors,
  Clock,
  ShieldCheck,
  User,
  CheckCircle2,
  ArrowRight,
  Award,
  Eye,
} from 'lucide-react';

interface CaseData {
  id: string;
  tabLabel: string;
  patientName: string;
  age: number;
  norwoodStage: string;
  grafts: string;
  technique: string;
  timeframe: string;
  donorHealing: string;
  surgeonNote: string;
  beforeDate: string;
  afterDate: string;
  beforePattern: string;
  afterPattern: string;
}

const caseStudies: CaseData[] = [
  {
    id: 'norwood-3',
    tabLabel: 'Receding Hairline (Norwood Stage 3)',
    patientName: 'Rahul M.',
    age: 32,
    norwoodStage: 'Norwood Stage 3V',
    grafts: '3,450 Follicular Units',
    technique: 'Sapphire Micro-FUE 0.8mm Punches',
    timeframe: 'Full Density achieved at Month 8',
    donorHealing: 'Grade A (Zero visible scarring)',
    surgeonNote: 'The hairline was meticulously designed with a slight M-shape curvature to match his facial symmetry. We used single-hair grafts at the frontal zone for a feathered, natural transition that is undetectable even at close range.',
    beforeDate: 'Pre-Op: January 2024',
    afterDate: '9 Months Post-Op • 100% Natural Density',
    beforePattern: 'sparse',
    afterPattern: 'dense',
  },
  {
    id: 'norwood-4',
    tabLabel: 'Crown & Vertex Thinning (Stage 4)',
    patientName: 'Arjun K.',
    age: 38,
    norwoodStage: 'Norwood Stage 4',
    grafts: '4,800 Follicular Units',
    technique: 'DHI + Sapphire FUE Hybrid Protocol',
    timeframe: 'Full Density achieved at Month 10',
    donorHealing: 'Grade A+ (Micro-dot healing)',
    surgeonNote: 'Crown and vertex restoration required strategic angulation at 30-45 degrees to replicate natural whorl patterns. Density was built in two passes for optimal blood supply and graft survival.',
    beforeDate: 'Pre-Op: March 2024',
    afterDate: '10 Months Post-Op • Crown Fully Restored',
    beforePattern: 'crown-thin',
    afterPattern: 'crown-full',
  },
  {
    id: 'norwood-5-6',
    tabLabel: 'Extensive Restoration (Norwood Stage 5-6)',
    patientName: 'Vikram S.',
    age: 45,
    norwoodStage: 'Norwood Stage 5-6',
    grafts: '6,200 Follicular Units (2 Sessions)',
    technique: 'Body Hair Transplant + FUE Combination',
    timeframe: 'Full Density achieved at Month 12',
    donorHealing: 'Grade A (Beard + Scalp donor)',
    surgeonNote: 'Extensive coverage required BHT supplementation. We prioritized frontal zone density and used beard follicles for mid-scalp coverage. Results exceeded patient expectations with natural-looking coverage.',
    beforeDate: 'Pre-Op: November 2023',
    afterDate: '12 Months Post-Op • Maximum Coverage Achieved',
    beforePattern: 'extensive',
    afterPattern: 'extensive-restored',
  },
  {
    id: 'hairline-refinement',
    tabLabel: 'High-Density Hairline Refinement',
    patientName: 'Ananya P.',
    age: 28,
    norwoodStage: 'Female Pattern Hair Loss (Ludwig II)',
    grafts: '2,100 Follicular Units',
    technique: 'Ultra-Fine FUE 0.6mm Needles',
    timeframe: 'Full Density achieved at Month 7',
    donorHealing: 'Grade A+ (Invisible to naked eye)',
    surgeonNote: 'Female hairline requires delicate, rounded geometry. We used single-hair grafts exclusively and maintained a soft, non-linear frontal boundary for a completely undetectable result.',
    beforeDate: 'Pre-Op: June 2024',
    afterDate: '7 Months Post-Op • Seamless Integration',
    beforePattern: 'female-thin',
    afterPattern: 'female-restored',
  },
];

// SVG Pattern Components for Before/After visuals
const BeforePattern: React.FC<{ type: string }> = ({ type }) => {
  if (type === 'sparse') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="scalp1" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#f5e6d3" />
            <stop offset="100%" stopColor="#e8d5c0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#scalp1)" />
        {/* Sparse hair strands */}
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={i}
            x1={50 + Math.random() * 300}
            y1={40 + Math.random() * 100}
            x2={50 + Math.random() * 300 + (Math.random() - 0.5) * 10}
            y2={20 + Math.random() * 60}
            stroke="#4a3728"
            strokeWidth="0.8"
            opacity={0.3 + Math.random() * 0.3}
          />
        ))}
        {/* Receding hairline area - visible scalp */}
        <ellipse cx="200" cy="80" rx="80" ry="30" fill="#f0dcc5" opacity="0.6" />
        <text x="200" y="260" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">Visible thinning at frontal zone</text>
      </svg>
    );
  }
  if (type === 'crown-thin') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="scalp2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5e6d3" />
            <stop offset="100%" stopColor="#e8d5c0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#scalp2)" />
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={i}
            x1={30 + Math.random() * 340}
            y1={30 + Math.random() * 240}
            x2={30 + Math.random() * 340 + (Math.random() - 0.5) * 8}
            y2={20 + Math.random() * 200}
            stroke="#4a3728"
            strokeWidth="0.7"
            opacity={0.2 + Math.random() * 0.3}
          />
        ))}
        {/* Thinning crown area */}
        <ellipse cx="200" cy="150" rx="60" ry="50" fill="#f0dcc5" opacity="0.7" />
        <text x="200" y="270" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">Crown & vertex thinning visible</text>
      </svg>
    );
  }
  if (type === 'extensive') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="scalp3" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f5e6d3" />
            <stop offset="100%" stopColor="#e8d5c0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#scalp3)" />
        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={i}
            x1={100 + Math.random() * 200}
            y1={150 + Math.random() * 100}
            x2={100 + Math.random() * 200 + (Math.random() - 0.5) * 6}
            y2={140 + Math.random() * 80}
            stroke="#4a3728"
            strokeWidth="0.6"
            opacity={0.2 + Math.random() * 0.2}
          />
        ))}
        <ellipse cx="200" cy="100" rx="120" ry="60" fill="#f0dcc5" opacity="0.7" />
        <text x="200" y="270" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">Extensive hair loss - frontal & crown</text>
      </svg>
    );
  }
  // female-thin
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="scalp4" cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#f8ede0" />
          <stop offset="100%" stopColor="#eedcc8" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#scalp4)" />
      {Array.from({ length: 80 }).map((_, i) => (
        <line
          key={i}
          x1={50 + Math.random() * 300}
          y1={60 + Math.random() * 200}
          x2={50 + Math.random() * 300 + (Math.random() - 0.5) * 12}
          y2={40 + Math.random() * 180}
          stroke="#5c3d2e"
          strokeWidth="0.5"
          opacity={0.15 + Math.random() * 0.25}
        />
      ))}
      <ellipse cx="200" cy="80" rx="60" ry="25" fill="#f0dcc5" opacity="0.5" />
      <text x="200" y="270" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="500">Diffuse thinning - widened part line</text>
    </svg>
  );
};

const AfterPattern: React.FC<{ type: string }> = ({ type }) => {
  if (type === 'dense') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="scalpAfter1" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#e8d5c0" />
            <stop offset="100%" stopColor="#dcc8b0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#scalpAfter1)" />
        {Array.from({ length: 200 }).map((_, i) => (
          <line
            key={i}
            x1={20 + Math.random() * 360}
            y1={30 + Math.random() * 220}
            x2={20 + Math.random() * 360 + (Math.random() - 0.5) * 15}
            y2={10 + Math.random() * 180}
            stroke="#2d1f14"
            strokeWidth="1"
            opacity={0.5 + Math.random() * 0.4}
          />
        ))}
        <text x="200" y="270" textAnchor="middle" fill="#0284c7" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">Full natural density restored</text>
      </svg>
    );
  }
  if (type === 'crown-full') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="scalpAfter2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8d5c0" />
            <stop offset="100%" stopColor="#dcc8b0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#scalpAfter2)" />
        {Array.from({ length: 250 }).map((_, i) => (
          <line
            key={i}
            x1={20 + Math.random() * 360}
            y1={20 + Math.random() * 260}
            x2={20 + Math.random() * 360 + (Math.random() - 0.5) * 12}
            y2={10 + Math.random() * 220}
            stroke="#2d1f14"
            strokeWidth="0.9"
            opacity={0.5 + Math.random() * 0.4}
          />
        ))}
        {/* Natural whorl pattern */}
        <circle cx="200" cy="150" r="15" fill="none" stroke="#2d1f14" strokeWidth="0.5" opacity="0.3" />
        <text x="200" y="270" textAnchor="middle" fill="#0284c7" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">Crown fully restored with natural whorl</text>
      </svg>
    );
  }
  if (type === 'extensive-restored') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="scalpAfter3" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#e8d5c0" />
            <stop offset="100%" stopColor="#dcc8b0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#scalpAfter3)" />
        {Array.from({ length: 280 }).map((_, i) => (
          <line
            key={i}
            x1={20 + Math.random() * 360}
            y1={20 + Math.random() * 260}
            x2={20 + Math.random() * 360 + (Math.random() - 0.5) * 14}
            y2={10 + Math.random() * 220}
            stroke="#2d1f14"
            strokeWidth="0.9"
            opacity={0.5 + Math.random() * 0.4}
          />
        ))}
        <text x="200" y="270" textAnchor="middle" fill="#0284c7" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">Maximum coverage achieved naturally</text>
      </svg>
    );
  }
  // female-restored
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="scalpAfter4" cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#f0e0d0" />
          <stop offset="100%" stopColor="#e5d3c0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#scalpAfter4)" />
      {Array.from({ length: 220 }).map((_, i) => (
        <line
          key={i}
          x1={30 + Math.random() * 340}
          y1={30 + Math.random() * 240}
          x2={30 + Math.random() * 340 + (Math.random() - 0.5) * 14}
          y2={20 + Math.random() * 200}
          stroke="#3d2518"
          strokeWidth="0.7"
          opacity={0.5 + Math.random() * 0.4}
        />
      ))}
      <text x="200" y="270" textAnchor="middle" fill="#0284c7" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">Seamless hairline integration</text>
    </svg>
  );
};

const TransformationShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentCase = caseStudies[activeCase];

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: false });
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove]);

  // Handle case switching with fade transition
  const switchCase = (index: number) => {
    if (index === activeCase) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCase(index);
      setSliderPosition(50);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-50/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-50/60 backdrop-blur-sm shadow-sm mb-6">
            <Sparkles size={16} className="text-amber-600" />
            <span className="text-sm font-semibold text-slate-700">Clinically Documented Transformations</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Real Patients. Permanent Results.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-900">
              Zero Compromise.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Natural hairline curvature, precise angle of growth, and zero linear scarring — every transformation is engineered for lifelong confidence.
          </p>

          {/* Verified Case Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/5 border border-slate-200/80 backdrop-blur-sm">
            <ShieldCheck size={16} className="text-blue-600" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">100% Untouched Medical Photography • Standardized Clinic Lighting</span>
          </div>
        </div>

        {/* Dynamic Case Selection Tabs */}
        <div className="mb-10 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-2.5 sm:gap-3 min-w-max justify-start sm:justify-center">
            {caseStudies.map((caseStudy, index) => (
              <button
                key={caseStudy.id}
                onClick={() => switchCase(index)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 min-h-[44px] ${
                  activeCase === index
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md'
                }`}
              >
                {caseStudy.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Before/After Slider - Takes 2 columns on desktop */}
          <div className="lg:col-span-2">
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 bg-white transition-opacity duration-200 ${isTransitioning ? 'opacity-60' : 'opacity-100'}`}>
              {/* Slider Container */}
              <div
                ref={sliderRef}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] cursor-ew-resize select-none touch-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                {/* BEFORE Image (Left Side) */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <BeforePattern type={currentCase.beforePattern} />
                </div>

                {/* AFTER Image (Right Side) */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                >
                  <AfterPattern type={currentCase.afterPattern} />
                </div>

                {/* BEFORE Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1.5 rounded-lg bg-slate-900/85 backdrop-blur-sm text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                  <Eye size={12} />
                  BEFORE
                  <span className="text-[10px] font-normal opacity-80 hidden sm:inline">• {currentCase.beforeDate}</span>
                </div>

                {/* AFTER Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 rounded-lg bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold shadow-lg">
                  AFTER
                </div>

                {/* Slider Handle Line */}
                <div
                  className="absolute top-0 bottom-0 z-10 pointer-events-none"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  {/* Vertical line */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white shadow-[0_0_8px_rgba(2,132,199,0.5)]" />
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-blue-500" />
                </div>

                {/* Drag Puck */}
                <div
                  className="absolute top-1/2 z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div
                    className={`w-11 h-11 rounded-full bg-white border-[3px] shadow-xl flex items-center justify-center transition-all duration-200 ${
                      isDragging
                        ? 'border-amber-500 shadow-amber-500/40 scale-110'
                        : 'border-blue-500 shadow-blue-500/30 hover:scale-105'
                    }`}
                  >
                    <div className="flex items-center gap-0.5">
                      <ChevronLeft size={13} className="text-slate-700" strokeWidth={2.5} />
                      <div className="w-px h-4 bg-slate-300 mx-0.5"></div>
                      <ChevronRight size={13} className="text-slate-700" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interaction Guide Pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-4">
                <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-lg flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-700 whitespace-nowrap">
                    Drag slider left & right to inspect follicle density
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Dossier Card */}
          <div className="lg:col-span-1">
            <div className={`lg:sticky lg:top-8 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 p-5 sm:p-6 space-y-5 transition-opacity duration-200 ${isTransitioning ? 'opacity-60' : 'opacity-100'}`}>
              {/* Patient Profile */}
              <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 ring-2 ring-blue-100">
                  <User size={22} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Patient {currentCase.patientName} (Age {currentCase.age})</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 flex items-center gap-1">
                    <Award size={12} className="text-amber-600" />
                    {currentCase.norwoodStage}
                  </p>
                </div>
              </div>

              {/* Diagnostic Metrics */}
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100/80">
                  <div className="p-1.5 rounded-lg bg-blue-100/80 flex-shrink-0">
                    <Scissors size={16} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="text-[11px] text-blue-600 font-semibold uppercase tracking-wide">Grafts Implanted</p>
                    <p className="text-sm font-bold text-blue-900 mt-0.5">{currentCase.grafts}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                  <div className="p-1.5 rounded-lg bg-slate-100 flex-shrink-0">
                    <ShieldCheck size={16} className="text-slate-700" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide">Technique</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{currentCase.technique}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                  <div className="p-1.5 rounded-lg bg-slate-100 flex-shrink-0">
                    <Clock size={16} className="text-slate-700" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide">Growth Timeframe</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{currentCase.timeframe}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-green-50/60 border border-green-100/80">
                  <div className="p-1.5 rounded-lg bg-green-100/80 flex-shrink-0">
                    <CheckCircle2 size={16} className="text-green-700" />
                  </div>
                  <div>
                    <p className="text-[11px] text-green-600 font-semibold uppercase tracking-wide">Donor Area Healing</p>
                    <p className="text-sm font-bold text-green-900 mt-0.5">{currentCase.donorHealing}</p>
                  </div>
                </div>
              </div>

              {/* Surgeon's Clinical Note */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0 ring-2 ring-amber-100">
                    <User size={18} className="text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xs font-bold text-slate-900">Dr. Mehta, Lead Surgeon</p>
                      <CheckCircle2 size={12} className="text-blue-600" />
                    </div>
                    <blockquote className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-amber-300 pl-3">
                      "{currentCase.surgeonNote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Micro-Conversion Trigger */}
        <div className="text-center py-10 sm:py-14 px-6 sm:px-10 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-amber-50/40 border border-blue-100/60 shadow-lg shadow-blue-900/5 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 dot-grid opacity-[0.03]"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/30 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Notice a similar hair thinning pattern to yours?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Get a personalized graft estimate and treatment plan from our board-certified surgeons in just 48 hours.
            </p>
            <button className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98] min-h-[52px]">
              <Calendar size={20} />
              Calculate Grafts Needed For Your Scalp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .dot-grid {
          background-image: radial-gradient(circle, #94a3b8 0.8px, transparent 0.8px);
          background-size: 24px 24px;
        }
      `}</style>
    </section>
  );
};

export default TransformationShowcase;

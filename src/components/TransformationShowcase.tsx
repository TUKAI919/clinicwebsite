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
  Crosshair,
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
  beforeImg: string;
  afterImg: string;
}

const caseStudies: CaseData[] = [
  {
    id: 'stage3',
    tabLabel: 'Receding Hairline (Norwood Stage 3)',
    patientName: 'Rahul M.',
    age: 32,
    norwoodStage: 'Norwood Stage 3V',
    grafts: '3,450 Follicular Units',
    technique: 'Sapphire Micro-FUE 0.8mm',
    timeframe: 'Full Density achieved at Month 8',
    donorHealing: 'Grade A (Zero visible scarring)',
    surgeonNote: 'Restored temporal triangles with single-hair follicular units for an undetectable, feathered hairline.',
    beforeDate: 'Pre-Op: January 2024',
    afterDate: '9 Months Post-Op • 100% Natural Density',
    beforeImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'stage4',
    tabLabel: 'Crown & Vertex Thinning (Stage 4)',
    patientName: 'Arjun K.',
    age: 39,
    norwoodStage: 'Norwood Stage 4 Vertex',
    grafts: '4,100 Follicular Units',
    technique: 'Direct Hair Implantation (DHI)',
    timeframe: 'Full Coverage at Month 10',
    donorHealing: 'Grade A (Preserved donor density)',
    surgeonNote: 'Spiraled whorl pattern recreated in the crown area matching natural hair exit angles.',
    beforeDate: 'Pre-Op: March 2024',
    afterDate: '10 Months Post-Op • Crown Fully Restored',
    beforeImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'stage5',
    tabLabel: 'Extensive Restoration (Norwood Stage 5-6)',
    patientName: 'Vikram S.',
    age: 45,
    norwoodStage: 'Norwood Stage 5',
    grafts: '4,850 Follicular Units',
    technique: 'Sapphire FUE + DHI Hybrid',
    timeframe: '12 Months Result',
    donorHealing: 'Grade A (Beard donor supplement)',
    surgeonNote: 'Maximum graft redistribution focusing 60% density in the front zone and 40% in mid-scalp.',
    beforeDate: 'Pre-Op: November 2023',
    afterDate: '12 Months Post-Op • Maximum Coverage Achieved',
    beforeImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
  },
];

// Futuristic HUD Overlay Component
const HUDOverlay: React.FC<{ side: 'before' | 'after' }> = ({ side }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/60"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/60"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/60"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/60"></div>

      {/* Scanning Line Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-scan ${side === 'after' ? 'animation-delay-1000' : ''}`}></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Data Readout - Top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-sm rounded border border-cyan-400/30">
        <Crosshair size={10} className="text-cyan-400" />
        <span className="text-[9px] font-mono text-cyan-300 uppercase tracking-wider">
          {side === 'before' ? 'Pre-Op Analysis' : 'Post-Op Result'}
        </span>
        <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse"></div>
      </div>

      {/* Side Data Markers */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-px bg-cyan-400/60"></div>
          <span className="text-[8px] font-mono text-cyan-400/80">0.8mm</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-px bg-cyan-400/60"></div>
          <span className="text-[8px] font-mono text-cyan-400/80">HD</span>
        </div>
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
    </div>
  );
};

const TransformationShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({ before: false, after: false });
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

  const switchCase = (index: number) => {
    if (index === activeCase) return;
    setIsTransitioning(true);
    setImagesLoaded({ before: false, after: false });
    setTimeout(() => {
      setActiveCase(index);
      setSliderPosition(50);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const handleImageLoad = (side: 'before' | 'after') => {
    setImagesLoaded(prev => ({ ...prev, [side]: true }));
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-50/60 backdrop-blur-sm shadow-sm mb-6">
            <Sparkles size={16} className="text-amber-600" />
            <span className="text-sm font-semibold text-slate-700">Clinically Documented Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Real Patients. Permanent Results.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-900">
              Zero Compromise.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Natural hairline curvature, precise angle of growth, and zero linear scarring — every transformation is engineered for lifelong confidence.
          </p>

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
          {/* Before/After Slider */}
          <div className="lg:col-span-2">
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 bg-slate-900 transition-opacity duration-200 ${isTransitioning ? 'opacity-60' : 'opacity-100'}`}>
              <div
                ref={sliderRef}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] cursor-ew-resize select-none touch-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                {/* BEFORE Image */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={currentCase.beforeImg}
                    alt="Before treatment"
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad('before')}
                  />
                  {!imagesLoaded.before && (
                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                    </div>
                  )}
                  <HUDOverlay side="before" />
                </div>

                {/* AFTER Image */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                >
                  <img
                    src={currentCase.afterImg}
                    alt="After treatment"
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad('after')}
                  />
                  {!imagesLoaded.after && (
                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                    </div>
                  )}
                  <HUDOverlay side="after" />
                </div>

                {/* BEFORE Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/10">
                  <Eye size={12} />
                  BEFORE
                  <span className="text-[10px] font-normal opacity-80 hidden sm:inline">• {currentCase.beforeDate}</span>
                </div>

                {/* AFTER Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-3 py-1.5 rounded-lg bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold shadow-lg border border-blue-400/30">
                  AFTER
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 pointer-events-none"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-cyan-400" />
                </div>

                {/* Drag Puck */}
                <div
                  className="absolute top-1/2 z-40 pointer-events-none"
                  style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm border-[3px] shadow-2xl flex items-center justify-center transition-all duration-200 ${
                      isDragging
                        ? 'border-amber-500 shadow-amber-500/50 scale-110'
                        : 'border-cyan-400 shadow-cyan-400/40 hover:scale-105'
                    }`}
                  >
                    <div className="flex items-center gap-0.5">
                      <ChevronLeft size={14} className="text-slate-700" strokeWidth={2.5} />
                      <div className="w-px h-4 bg-slate-300 mx-0.5"></div>
                      <ChevronRight size={14} className="text-slate-700" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Interaction Guide */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-4 z-20">
                  <div className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/30 shadow-lg flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                    </div>
                    <p className="text-[11px] sm:text-xs font-semibold text-white whitespace-nowrap">
                      Drag slider left & right to inspect follicle density
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Dossier Card */}
          <div className="lg:col-span-1">
            <div className={`lg:sticky lg:top-8 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 p-5 sm:p-6 space-y-5 transition-opacity duration-200 ${isTransitioning ? 'opacity-60' : 'opacity-100'}`}>
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

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0 ring-2 ring-amber-100">
                    <User size={18} className="text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xs font-bold text-slate-900">Lead Surgeon</p>
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
        @keyframes scan {
          0% {
            top: -2px;
          }
          100% {
            top: 100%;
          }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default TransformationShowcase;

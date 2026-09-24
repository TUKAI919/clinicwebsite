import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Sparkles,
  Check,
  Clock,
  ShieldCheck,
  Scissors,
  MessageCircle,
  Calendar,
  Info,
  TrendingUp,
  Zap,
} from 'lucide-react';

interface NorwoodStage {
  id: number;
  name: string;
  label: string;
  description: string;
  graftRange: [number, number];
  costPerGraft: number;
  procedureHours: string;
  technique: string;
}

const norwoodStages: NorwoodStage[] = [
  {
    id: 2,
    name: 'Stage 2',
    label: 'Hairline M-Shape',
    description: 'Mild temporal recession',
    graftRange: [1200, 1800],
    costPerGraft: 25,
    procedureHours: '4-5 Hours',
    technique: 'Sapphire Micro-FUE',
  },
  {
    id: 3,
    name: 'Stage 3',
    label: 'Deep Receding Hairline',
    description: 'Visible temple thinning & forehead widening',
    graftRange: [2200, 3000],
    costPerGraft: 25,
    procedureHours: '5-6 Hours',
    technique: 'Sapphire Micro-FUE',
  },
  {
    id: 4,
    name: 'Stage 4',
    label: 'Crown/Vertex Thinning',
    description: 'Hairline recession + thinning spot at the back',
    graftRange: [3000, 4200],
    costPerGraft: 25,
    procedureHours: '6-7 Hours',
    technique: 'Sapphire FUE + DHI',
  },
  {
    id: 5,
    name: 'Stage 5',
    label: 'Advanced Front & Crown',
    description: 'Bridge thinning between front and vertex',
    graftRange: [4200, 5500],
    costPerGraft: 25,
    procedureHours: '7-8 Hours (2 sessions)',
    technique: 'Sapphire FUE + DHI Hybrid',
  },
  {
    id: 6,
    name: 'Stage 6-7',
    label: 'Extensive Baldness',
    description: 'Large bald surface requiring maximum graft redistribution',
    graftRange: [5500, 7000],
    costPerGraft: 25,
    procedureHours: '8-10 Hours (2-3 sessions)',
    technique: 'FUE + BHT Combination',
  },
];

const densityOptions = [
  {
    id: 'natural',
    label: 'Natural Standard Density',
    value: '35-40 FU/cm²',
    multiplier: 1,
    description: 'Standard coverage',
  },
  {
    id: 'maximum',
    label: 'Maximum High-Density Pack',
    value: '45-55 FU/cm²',
    multiplier: 1.35,
    description: 'Premium Sapphire Option',
  },
];

// SVG Silhouette Components for each Norwood stage
const NorwoodSilhouette: React.FC<{ stage: number; isActive: boolean }> = ({ stage, isActive }) => {
  const strokeColor = isActive ? '#0284C7' : '#64748B';
  const fillColor = isActive ? '#0284C7' : '#94A3B8';

  const renderStage = () => {
    switch (stage) {
      case 2:
        return (
          <g>
            {/* Head outline */}
            <ellipse cx="50" cy="55" rx="28" ry="32" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            {/* Hair - slight M recession */}
            <path
              d="M 25 45 Q 30 35, 40 38 Q 45 32, 50 35 Q 55 32, 60 38 Q 70 35, 75 45"
              fill="none"
              stroke={fillColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Temporal recession indicators */}
            <path d="M 30 40 L 35 45" stroke={fillColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M 70 40 L 65 45" stroke={fillColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </g>
        );
      case 3:
        return (
          <g>
            <ellipse cx="50" cy="55" rx="28" ry="32" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            {/* Deeper M recession */}
            <path
              d="M 25 48 Q 32 38, 38 42 Q 43 35, 50 38 Q 57 35, 62 42 Q 68 38, 75 48"
              fill="none"
              stroke={fillColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* More pronounced temporal areas */}
            <path d="M 28 43 L 35 48" stroke={fillColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <path d="M 72 43 L 65 48" stroke={fillColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            {/* Forehead widening indicator */}
            <ellipse cx="50" cy="38" rx="12" ry="4" fill="none" stroke={fillColor} strokeWidth="0.8" strokeDasharray="2,2" opacity="0.4" />
          </g>
        );
      case 4:
        return (
          <g>
            <ellipse cx="50" cy="55" rx="28" ry="32" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            {/* Receded hairline */}
            <path
              d="M 25 50 Q 33 40, 40 44 Q 45 38, 50 40 Q 55 38, 60 44 Q 67 40, 75 50"
              fill="none"
              stroke={fillColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Crown thinning spot */}
            <ellipse cx="50" cy="70" rx="8" ry="6" fill="none" stroke={fillColor} strokeWidth="1.5" strokeDasharray="3,2" />
            <circle cx="50" cy="70" r="2" fill={fillColor} opacity="0.3" />
          </g>
        );
      case 5:
        return (
          <g>
            <ellipse cx="50" cy="55" rx="28" ry="32" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            {/* Advanced recession */}
            <path
              d="M 25 52 Q 35 42, 42 46 Q 47 40, 50 42 Q 53 40, 58 46 Q 65 42, 75 52"
              fill="none"
              stroke={fillColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Larger crown area */}
            <ellipse cx="50" cy="68" rx="12" ry="8" fill="none" stroke={fillColor} strokeWidth="1.5" strokeDasharray="3,2" />
            {/* Bridge thinning */}
            <path d="M 45 50 Q 50 55, 55 50" fill="none" stroke={fillColor} strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
          </g>
        );
      case 6:
        return (
          <g>
            <ellipse cx="50" cy="55" rx="28" ry="32" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            {/* Minimal hair remaining */}
            <path
              d="M 25 55 Q 30 50, 35 52 Q 40 48, 45 50"
              fill="none"
              stroke={fillColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 55 50 Q 60 48, 65 52 Q 70 50, 75 55"
              fill="none"
              stroke={fillColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Large bald area */}
            <ellipse cx="50" cy="60" rx="18" ry="14" fill="none" stroke={fillColor} strokeWidth="1.5" strokeDasharray="3,2" />
            <ellipse cx="50" cy="45" rx="10" ry="6" fill="none" stroke={fillColor} strokeWidth="1" strokeDasharray="2,2" opacity="0.4" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {renderStage()}
    </svg>
  );
};

const GraftCalculator: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [selectedDensity, setSelectedDensity] = useState('natural');

  const currentStage = useMemo(
    () => norwoodStages.find((s) => s.id === selectedStage),
    [selectedStage]
  );

  const currentDensity = useMemo(
    () => densityOptions.find((d) => d.id === selectedDensity),
    [selectedDensity]
  );

  const calculations = useMemo(() => {
    if (!currentStage || !currentDensity) return null;

    const baseGrafts = currentStage.graftRange;
    const adjustedMin = Math.round(baseGrafts[0] * currentDensity.multiplier);
    const adjustedMax = Math.round(baseGrafts[1] * currentDensity.multiplier);

    const costMin = adjustedMin * currentStage.costPerGraft;
    const costMax = adjustedMax * currentStage.costPerGraft;

    const emiMin = Math.round(costMin / 12);
    const emiMax = Math.round(costMax / 12);

    return {
      graftMin: adjustedMin,
      graftMax: adjustedMax,
      costMin,
      costMax,
      emiMin,
      emiMax,
    };
  }, [currentStage, currentDensity]);

  const whatsappMessage = useMemo(() => {
    if (!currentStage || !calculations) return '';
    return encodeURIComponent(
      `Hello Doctor, I calculated my hairline at Norwood Stage ${currentStage.id} (${currentStage.label}). My estimated grafts are ${calculations.graftMin}-${calculations.graftMax}. I want to claim the free digital scalp analysis.`
    );
  }, [currentStage, calculations]);

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-100/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-50/60 backdrop-blur-sm shadow-sm mb-6">
            <Calculator size={16} className="text-amber-600" />
            <span className="text-sm font-semibold text-slate-700">Transparent Clinical Estimation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Calculate Your Required Grafts &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-900">
              Estimated Procedure Cost.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Select your current hair thinning stage below. Get a medically calibrated estimate based on international follicle density standards in real-time.
          </p>
        </div>

        {/* Norwood Stage Selector */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-4 text-center sm:text-left">
            Step 1: Select Your Norwood Stage
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {norwoodStages.map((stage) => {
              const isActive = selectedStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className={`relative group p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 text-left min-h-[180px] flex flex-col ${
                    isActive
                      ? 'border-sky-500 bg-sky-50/50 shadow-lg shadow-sky-500/20 scale-[1.02]'
                      : 'border-slate-200 bg-white hover:border-sky-300 hover:shadow-md hover:scale-[1.01]'
                  }`}
                >
                  {/* Radio checkmark */}
                  <div
                    className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive ? 'border-sky-500 bg-sky-500' : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isActive && <Check size={12} className="text-white" strokeWidth={3} />}
                  </div>

                  {/* SVG Silhouette */}
                  <div className="w-full h-20 sm:h-24 mb-3 flex items-center justify-center">
                    <NorwoodSilhouette stage={stage.id} isActive={isActive} />
                  </div>

                  {/* Stage Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isActive ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {stage.name}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 mb-1">{stage.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{stage.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Density Toggle */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-4 text-center sm:text-left">
            Step 2: Choose Your Desired Density
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto sm:mx-0">
            {densityOptions.map((option) => {
              const isActive = selectedDensity === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedDensity(option.id)}
                  className={`relative p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isActive
                      ? 'border-sky-500 bg-sky-50/50 shadow-lg shadow-sky-500/20'
                      : 'border-slate-200 bg-white hover:border-sky-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-bold text-slate-900 mb-1">{option.label}</p>
                      <p className="text-xs text-slate-500">{option.description}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        isActive ? 'border-sky-500 bg-sky-500' : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isActive && <Check size={12} className="text-white" strokeWidth={3} />}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Zap size={14} className={isActive ? 'text-sky-600' : 'text-slate-400'} />
                    <span className={`text-xs font-semibold ${isActive ? 'text-sky-700' : 'text-slate-600'}`}>
                      {option.value}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Results Dashboard */}
        {calculations && currentStage && (
          <div className="mb-10 animate-fade-in">
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-900/10 p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Your Personalized Estimate</h3>
                  <p className="text-sm text-slate-500">
                    Norwood Stage {currentStage.id} • {currentDensity?.label}
                  </p>
                </div>
              </div>

              {/* Main Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Graft Count */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Scissors size={18} className="text-sky-600" />
                    <span className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
                      Estimated Follicular Units
                    </span>
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                    {calculations.graftMin.toLocaleString()} – {calculations.graftMax.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-600">Grafts (Follicular Units)</p>
                </div>

                {/* Cost Estimate */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={18} className="text-amber-600" />
                    <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">
                      Estimated Total Cost
                    </span>
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                    ₹{calculations.costMin.toLocaleString()} – ₹{calculations.costMax.toLocaleString()}*
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-200">
                      <span className="text-xs font-semibold text-emerald-700">
                        0% Interest EMI from ₹{calculations.emiMin.toLocaleString()}/mo
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Procedure Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
                    <Clock size={18} className="text-slate-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
                      Procedure Duration
                    </p>
                    <p className="text-sm font-bold text-slate-900">{currentStage.procedureHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
                    <ShieldCheck size={18} className="text-slate-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
                      Technique
                    </p>
                    <p className="text-sm font-bold text-slate-900">{currentStage.technique}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
                  <div className="p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
                    <Check size={18} className="text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">
                      Donor Area Safety
                    </p>
                    <p className="text-sm font-bold text-green-900">100% Safe Margin Preserved</p>
                  </div>
                </div>
              </div>

              {/* Conversion Block */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle size={20} />
                    <span>Lock Estimate via WhatsApp</span>
                  </a>

                  {/* Consultation Button */}
                  <button className="group flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]">
                    <Calendar size={20} />
                    <span>Book In-Clinic Microscopic Scalp Scan</span>
                  </button>
                </div>

                {/* Medical Disclaimer */}
                <div className="flex items-start gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <Info size={16} className="text-slate-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold">Note:</span> Exact graft requirements are finalized during physical dermoscopy examination by our board-certified hair surgeons. No hidden surgical or anesthesia charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedStage && (
          <div className="text-center py-12 px-6 rounded-2xl bg-slate-50/50 border border-slate-200/50">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 flex items-center justify-center">
              <Calculator size={32} className="text-slate-400" />
            </div>
            <p className="text-slate-600 font-medium mb-2">Select a Norwood stage above to see your estimate</p>
            <p className="text-sm text-slate-500">Your personalized graft and cost calculation will appear here</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default GraftCalculator;

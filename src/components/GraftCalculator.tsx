import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Sparkles,
  Check,
  Clock,
  ShieldCheck,
  MessageCircle,
  Calendar,
  Info,
  MapPin,
} from 'lucide-react';

interface NorwoodStage {
  id: number;
  name: string;
  label: string;
  description: string;
  defaultZones: number[];
}

interface ScalpZone {
  id: number;
  name: string;
  grafts: number;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  hotspotPositions: Array<{ top: string; left?: string; right?: string; transform?: string }>;
}

const norwoodStages: NorwoodStage[] = [
  {
    id: 2,
    name: 'Stage 2',
    label: 'Hairline M-Shape',
    description: 'Subtle temple recession',
    defaultZones: [1, 2],
  },
  {
    id: 3,
    name: 'Stage 3',
    label: 'Deep Receding Frontal',
    description: 'Visible temple triangles & forehead widening',
    defaultZones: [1, 2, 3],
  },
  {
    id: 4,
    name: 'Stage 4',
    label: 'Crown & Vertex Thinning',
    description: 'Frontal recession with isolated thinning crown',
    defaultZones: [1, 2, 3, 5, 6],
  },
  {
    id: 5,
    name: 'Stage 5',
    label: 'Advanced Front & Bridge',
    description: 'Narrow bridge separating frontal and vertex',
    defaultZones: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 6,
    name: 'Stage 6-7',
    label: 'Extensive Baldness',
    description: 'Wide bald expanse merging front and vertex',
    defaultZones: [1, 2, 3, 4, 5, 6],
  },
];

const scalpZones: ScalpZone[] = [
  {
    id: 1,
    name: 'Temples / Lateral Peaks',
    grafts: 500,
    color: 'sky',
    bgColor: 'bg-sky-50/80',
    borderColor: 'border-sky-500',
    textColor: 'text-sky-700',
    hotspotPositions: [
      { top: '72%', left: '34%' },
      { top: '72%', right: '34%' },
    ],
  },
  {
    id: 2,
    name: 'Frontal Hairline Band',
    grafts: 1500,
    color: 'blue',
    bgColor: 'bg-blue-50/80',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-700',
    hotspotPositions: [
      { top: '60%', left: '42%' },
      { top: '60%', right: '42%' },
    ],
  },
  {
    id: 3,
    name: 'Mid-Frontal Core',
    grafts: 500,
    color: 'indigo',
    bgColor: 'bg-indigo-50/80',
    borderColor: 'border-indigo-500',
    textColor: 'text-indigo-700',
    hotspotPositions: [
      { top: '52%', left: '50%', transform: '-translate-x-1/2' },
    ],
  },
  {
    id: 4,
    name: 'Mid-Scalp Transition',
    grafts: 1750,
    color: 'violet',
    bgColor: 'bg-violet-50/80',
    borderColor: 'border-violet-500',
    textColor: 'text-violet-700',
    hotspotPositions: [
      { top: '40%', left: '38%' },
      { top: '40%', right: '38%' },
    ],
  },
  {
    id: 5,
    name: 'Crown Bridge & Vertex',
    grafts: 1900,
    color: 'purple',
    bgColor: 'bg-purple-50/80',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-700',
    hotspotPositions: [
      { top: '26%', left: '50%', transform: '-translate-x-1/2' },
    ],
  },
  {
    id: 6,
    name: 'Vertex Whirlpool',
    grafts: 1500,
    color: 'fuchsia',
    bgColor: 'bg-fuchsia-50/80',
    borderColor: 'border-fuchsia-500',
    textColor: 'text-fuchsia-700',
    hotspotPositions: [
      { top: '14%', left: '50%', transform: '-translate-x-1/2' },
    ],
  },
];

// Accurate Norwood SVG Illustrations
const NorwoodIllustration: React.FC<{ stage: number; isActive: boolean }> = ({ stage, isActive }) => {
  const strokeColor = isActive ? '#0284C7' : '#94A3B8';
  const hairColor = isActive ? '#0369A1' : '#64748B';

  const renderStage = () => {
    switch (stage) {
      case 2:
        return (
          <g>
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <path
              d="M 20 35 Q 25 25, 35 28 Q 40 22, 50 25 Q 60 22, 65 28 Q 75 25, 80 35"
              fill="none"
              stroke={hairColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path d="M 25 30 L 30 35" stroke={hairColor} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M 75 30 L 70 35" stroke={hairColor} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </g>
        );
      case 3:
        return (
          <g>
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <path
              d="M 20 38 Q 28 28, 35 32 Q 42 25, 50 28 Q 58 25, 65 32 Q 72 28, 80 38"
              fill="none"
              stroke={hairColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path d="M 23 33 L 30 38" stroke={hairColor} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M 77 33 L 70 38" stroke={hairColor} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <ellipse cx="50" cy="32" rx="15" ry="5" fill="none" stroke={hairColor} strokeWidth="0.8" strokeDasharray="2,2" opacity="0.4" />
          </g>
        );
      case 4:
        return (
          <g>
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <path
              d="M 20 40 Q 30 30, 38 34 Q 44 28, 50 30 Q 56 28, 62 34 Q 70 30, 80 40"
              fill="none"
              stroke={hairColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <ellipse cx="50" cy="65" rx="10" ry="8" fill="none" stroke={hairColor} strokeWidth="2" strokeDasharray="3,2" />
            <circle cx="50" cy="65" r="3" fill={hairColor} opacity="0.3" />
          </g>
        );
      case 5:
        return (
          <g>
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <path
              d="M 20 42 Q 32 32, 40 36 Q 46 30, 50 32 Q 54 30, 60 36 Q 68 32, 80 42"
              fill="none"
              stroke={hairColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <ellipse cx="50" cy="62" rx="14" ry="10" fill="none" stroke={hairColor} strokeWidth="2" strokeDasharray="3,2" />
            <path d="M 42 45 Q 50 50, 58 45" fill="none" stroke={hairColor} strokeWidth="1.5" strokeDasharray="2,2" opacity="0.5" />
          </g>
        );
      case 6:
        return (
          <g>
            <ellipse cx="50" cy="50" rx="35" ry="40" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <path
              d="M 20 45 Q 28 40, 35 42 Q 40 38, 45 40"
              fill="none"
              stroke={hairColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 55 40 Q 60 38, 65 42 Q 72 40, 80 45"
              fill="none"
              stroke={hairColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <ellipse cx="50" cy="55" rx="22" ry="18" fill="none" stroke={hairColor} strokeWidth="2" strokeDasharray="3,2" />
            <ellipse cx="50" cy="38" rx="12" ry="8" fill="none" stroke={hairColor} strokeWidth="1.5" strokeDasharray="2,2" opacity="0.4" />
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
  const [selectedZones, setSelectedZones] = useState<Set<number>>(new Set());

  const currentStage = useMemo(
    () => norwoodStages.find((s) => s.id === selectedStage),
    [selectedStage]
  );

  // Handle Norwood stage selection
  const handleStageSelect = (stageId: number) => {
    setSelectedStage(stageId);
    const stage = norwoodStages.find(s => s.id === stageId);
    if (stage) {
      setSelectedZones(new Set(stage.defaultZones));
    }
  };

  // Handle zone toggle
  const toggleZone = (zoneId: number) => {
    const newZones = new Set(selectedZones);
    if (newZones.has(zoneId)) {
      newZones.delete(zoneId);
    } else {
      newZones.add(zoneId);
    }
    setSelectedZones(newZones);
  };

  // Calculate totals
  const calculations = useMemo(() => {
    if (selectedZones.size === 0) return null;

    let totalGrafts = 0;
    selectedZones.forEach(zoneId => {
      const zone = scalpZones.find(z => z.id === zoneId);
      if (zone) {
        totalGrafts += zone.grafts;
      }
    });

    const costPerGraft = 25;
    const costMin = totalGrafts * costPerGraft;
    const costMax = Math.round(totalGrafts * 1.15 * costPerGraft);
    const emiMonthly = Math.round(costMin / 12);

    return {
      totalGrafts,
      costMin,
      costMax,
      emiMonthly,
    };
  }, [selectedZones]);

  // Generate WhatsApp message
  const whatsappMessage = useMemo(() => {
    if (!currentStage || !calculations) return '';
    const selectedZoneNames = Array.from(selectedZones)
      .map(id => scalpZones.find(z => z.id === id)?.name)
      .filter(Boolean)
      .join(', ');
    
    return encodeURIComponent(
      `Hello Doctor, I calculated my hairline at Norwood Stage ${currentStage.id} (${currentStage.label}).\n\nSelected Zones: ${selectedZoneNames}\nEstimated Grafts: ${calculations.totalGrafts.toLocaleString()}\n\nI want to claim the free digital scalp analysis.`
    );
  }, [currentStage, calculations, selectedZones]);

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 via-[#F8FAFC] to-slate-100/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-50/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] mb-6">
            <Calculator size={16} className="text-amber-700" />
            <span className="text-sm font-semibold text-slate-700">Transparent Clinical Estimation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Calculate Your Required Grafts &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-slate-800">
              Estimated Cost
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Select your Norwood baldness stage or tap specific scalp zones to calculate real-time graft requirements and pricing.
          </p>
        </div>

        {/* STEP 1: Norwood Stage Selector */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(2,132,199,0.3)]">
              <span className="text-sm font-bold text-white">1</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Select Your Norwood Stage</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {norwoodStages.map((stage) => {
              const isActive = selectedStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleStageSelect(stage.id)}
                  className={`relative group p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 text-left min-h-[200px] flex flex-col ${
                    isActive
                      ? 'border-sky-500 bg-sky-50/50 shadow-[0_12px_35px_-4px_rgba(2,132,199,0.12)] ring-2 ring-sky-400/20 scale-[1.02]'
                      : 'border-slate-200/70 bg-white/70 backdrop-blur-sm shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] hover:border-slate-300 hover:bg-white/80 hover:shadow-[0_8px_28px_-4px_rgba(15,23,42,0.08)] hover:-translate-y-0.5'
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

                  {/* SVG Illustration */}
                  <div className="w-full h-24 sm:h-28 mb-3 flex items-center justify-center">
                    <NorwoodIllustration stage={stage.id} isActive={isActive} />
                  </div>

                  {/* Stage Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isActive ? 'bg-sky-100 text-sky-800' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {stage.name}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 mb-1">{stage.label}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{stage.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 2: Interactive Scalp Zone Map */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(2,132,199,0.3)]">
              <span className="text-sm font-bold text-white">2</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Select Scalp Zones for Treatment</h3>
          </div>

          {/* Interactive 16:9 Scalp Image Map */}
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] bg-slate-900 aspect-[16/9]">
            {/* Scalp Image */}
            <img
              src="https://i.ibb.co/RG3DmKYX/scalp-zones.jpg"
              alt="Interactive Scalp Graft Zones"
              className="w-full h-full object-contain select-none pointer-events-none"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"%3E%3Crect fill="%230f172a" width="1600" height="900"/%3E%3Cellipse cx="800" cy="450" rx="300" ry="380" fill="%231e293b" stroke="%23475569" stroke-width="3"/%3E%3Ctext x="800" y="450" text-anchor="middle" fill="%2394a3b8" font-size="24" font-family="sans-serif"%3EScalp Zone Map%3C/text%3E%3C/svg%3E';
              }}
            />

            {/* Interactive Hotspots */}
            {scalpZones.map((zone) => {
              const isSelected = selectedZones.has(zone.id);
              return zone.hotspotPositions.map((pos, idx) => (
                <button
                  key={`${zone.id}-${idx}`}
                  onClick={() => toggleZone(zone.id)}
                  className={`absolute min-h-[36px] min-w-[36px] rounded-full transition-all duration-300 ease-out cursor-pointer z-10 ${
                    isSelected
                      ? 'bg-[#0284C7] text-white border-2 border-white ring-4 ring-sky-400/40 text-xs font-semibold px-3 py-1 shadow-lg scale-110 flex items-center gap-1'
                      : 'bg-slate-900/80 text-white border border-white/40 text-xs px-2.5 py-1 rounded-full backdrop-blur-sm hover:scale-110'
                  }`}
                  style={{
                    top: pos.top,
                    left: pos.left,
                    right: pos.right,
                    transform: pos.transform,
                  }}
                  title={`Zone ${zone.id}: ${zone.name} (${zone.grafts} grafts)`}
                >
                  {isSelected && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                  )}
                  <span>{zone.id}</span>
                </button>
              ));
            })}

            {/* Image Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
              <p className="text-xs sm:text-sm text-white/90 text-center font-medium">
                Clinical Scalp Graft Mapping — Zones 1 to 6 (ISHRS Reference Standard)
              </p>
            </div>
          </div>

          {/* Helper Text */}
          <p className="text-sm text-slate-600 text-center mt-4 italic">
            Tap any zone on the scalp diagram above to add or remove grafts from your calculation.
          </p>

          {/* Selected Zones Summary Pills */}
          {selectedZones.size > 0 && (
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {Array.from(selectedZones).sort().map((zoneId) => {
                const zone = scalpZones.find(z => z.id === zoneId);
                if (!zone) return null;
                return (
                  <button
                    key={zoneId}
                    onClick={() => toggleZone(zoneId)}
                    className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 hover:bg-red-50 hover:border-red-200 transition-all duration-200"
                  >
                    <Check size={14} className="text-sky-600 group-hover:hidden" />
                    <span className="text-xs font-semibold text-slate-700">
                      Zone {zone.id}: {zone.name.split(' / ')[0]} ({zone.grafts.toLocaleString()})
                    </span>
                    <span className="hidden group-hover:inline text-red-500 text-xs">✕</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* STEP 3: Estimate & Conversion CTAs */}
        {calculations && (
          <div className="mb-10 animate-fade-in">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(2,132,199,0.3)]">
                <span className="text-sm font-bold text-white">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">Your Personalized Estimate</h3>
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.06)] rounded-3xl p-6 sm:p-8 lg:p-10">
              {/* Main Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Box 1: Total Grafts */}
                <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-100/60 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={18} className="text-sky-700" />
                    <span className="text-sm font-semibold text-sky-800 uppercase tracking-wide">
                      Total Calculated Grafts
                    </span>
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                    {calculations.totalGrafts.toLocaleString()} Grafts
                  </p>
                  <p className="text-sm text-slate-600">Based on 40-45 Follicles/cm² international density standard</p>
                </div>

                {/* Box 2: Price Range */}
                <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/50 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Calculator size={18} className="text-amber-800" />
                    <span className="text-sm font-semibold text-amber-800 uppercase tracking-wide">
                      Total Price Range
                    </span>
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                    ₹{calculations.costMin.toLocaleString()} – ₹{calculations.costMax.toLocaleString()}*
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="px-2.5 py-1 rounded-full bg-emerald-50/80 border border-emerald-200/60">
                      <span className="text-xs font-medium text-emerald-800">
                        0% Interest EMI from ₹{calculations.emiMonthly.toLocaleString()}/month
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50/60 border border-slate-100/60">
                  <Clock size={18} className="text-slate-700 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-900">6-7 Hours (Single Day Session)</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/60">
                  <ShieldCheck size={18} className="text-emerald-700 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-900">100% Pain-Free Local Anesthesia</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-sky-50/50 border border-sky-100/60">
                  <Check size={18} className="text-sky-700 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-900">100% Safe Donor Margin Preserved</span>
                </div>
              </div>

              {/* Dual CTA Buttons */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-[0_8px_20px_-3px_rgba(4,120,87,0.25)] hover:shadow-[0_12px_28px_-3px_rgba(4,120,87,0.35)] transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle size={20} />
                    <span>Lock Estimate via WhatsApp</span>
                  </a>

                  {/* In-Clinic Button */}
                  <button className="group flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold rounded-xl shadow-[0_8px_20px_-3px_rgba(2,132,199,0.25)] hover:shadow-[0_12px_28px_-3px_rgba(2,132,199,0.35)] transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]">
                    <Calendar size={20} />
                    <span>Book In-Clinic Microscopic Scalp Scan</span>
                  </button>
                </div>

                {/* Medical Disclaimer */}
                <div className="flex items-start gap-2 p-4 rounded-xl bg-slate-50/60 border border-slate-100/60">
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
        {selectedZones.size === 0 && (
          <div className="text-center py-12 px-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)]">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 flex items-center justify-center">
              <Calculator size={32} className="text-slate-400" />
            </div>
            <p className="text-slate-600 font-medium mb-2">Select a Norwood stage and scalp zones to see your estimate</p>
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

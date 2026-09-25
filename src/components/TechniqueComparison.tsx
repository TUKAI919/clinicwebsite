import React, { useState } from 'react';
import {
  Sparkles,
  Microscope,
  Zap,
  Clock,
  Scissors,
  ShieldCheck,
  Check,
  ChevronDown,
  MessageCircle,
  Calculator,
  Stethoscope,
  Award,
} from 'lucide-react';

interface ComparisonRow {
  parameter: string;
  sapphire: string;
  dhi: string;
}

const comparisonData: ComparisonRow[] = [
  {
    parameter: 'Blade Material',
    sapphire: 'Sapphire Crystal',
    dhi: 'Choi Titanium Needle',
  },
  {
    parameter: 'Grafts Per Session',
    sapphire: 'Max Coverage (4,500+)',
    dhi: 'Ultra-High Density (3,500)',
  },
  {
    parameter: 'Ideal Candidate',
    sapphire: 'Wide Bald Areas',
    dhi: 'Thinning / Hairline Recalibration',
  },
  {
    parameter: 'Graft Out-of-Body Time',
    sapphire: 'Minimal',
    dhi: 'Near-Instantaneous',
  },
];

const TechniqueComparison: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (index: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 via-[#F8FAFC] to-slate-100/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-50/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] mb-6">
            <Microscope size={16} className="text-amber-700" />
            <span className="text-sm font-semibold text-slate-700">Next-Generation Surgical Technology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Two World-Class Techniques.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-slate-800">
              One Guaranteed Lifelong Density.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We do not believe in one-size-fits-all. Our surgeons deploy customized micro-instrumentation tailored to your specific scalp thickness, follicle curl, and aesthetic goals.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Sapphire Micro-FUE */}
          <div className="group relative bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out hover:shadow-[0_18px_40px_-8px_rgba(15,23,42,0.07)] hover:-translate-y-1.5">
            {/* Header Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50/80 border border-sky-200/60 mb-4">
              <Award size={14} className="text-sky-700" />
              <span className="text-xs font-semibold text-sky-800">Best for Extensive Baldness (Norwood 3-7)</span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Sapphire Micro-FUE</h3>
            <p className="text-sm text-slate-600 mb-6">Ultra-sharp sapphire gemstone blades for microscopic incisions.</p>

            {/* Key Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-sky-50/80 flex-shrink-0">
                  <Zap size={16} className="text-sky-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">Gemstone Precision</p>
                  <p className="text-xs text-slate-600 leading-relaxed">Real sapphire crystal blades (0.7mm - 0.9mm) prevent tissue trauma.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-50/80 flex-shrink-0">
                  <Clock size={16} className="text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">Faster Healing</p>
                  <p className="text-xs text-slate-600 leading-relaxed">Up to 30% quicker scabbing clearance compared to traditional steel needles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50/80 flex-shrink-0">
                  <Scissors size={16} className="text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">Natural Angles</p>
                  <p className="text-xs text-slate-600 leading-relaxed">3D channel opening allows precise angling to mimic natural hair flow.</p>
                </div>
              </div>
            </div>

            {/* Diagnostic Spec Bar */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <ShieldCheck size={14} className="text-sky-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Session Capacity</p>
                  <p className="text-xs font-bold text-slate-900">Up to 4,500+ Grafts</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock size={14} className="text-sky-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Recovery Time</p>
                  <p className="text-xs font-bold text-slate-900">5 to 7 Days</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Scissors size={14} className="text-sky-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Shaving</p>
                  <p className="text-xs font-bold text-slate-900">Standard Trimming</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check size={14} className="text-emerald-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Pain Level</p>
                  <p className="text-xs font-bold text-slate-900">Zero (Pain-free)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: DHI */}
          <div className="group relative bg-white/80 backdrop-blur-md border-2 border-sky-400/80 shadow-[0_12px_35px_-4px_rgba(2,132,199,0.12)] rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out hover:shadow-[0_20px_45px_-8px_rgba(2,132,199,0.18)] hover:-translate-y-1.5">
            {/* Most Popular Badge */}
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-sky-600 to-sky-700 text-white text-xs font-bold shadow-[0_4px_12px_-2px_rgba(2,132,199,0.3)]">
              Most Popular for Hairlines
            </div>

            {/* Header Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50/80 border border-sky-200/60 mb-4">
              <Award size={14} className="text-sky-700" />
              <span className="text-xs font-semibold text-sky-800">Best for Crown, Temples & Unshaven Procedures</span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Direct Hair Implantation (DHI)</h3>
            <p className="text-sm text-slate-600 mb-6">Using patented Choi Implanter Pens for simultaneous channel creation & placement.</p>

            {/* Key Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-sky-50/80 flex-shrink-0">
                  <Zap size={16} className="text-sky-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">Zero Prior Incisions</p>
                  <p className="text-xs text-slate-600 leading-relaxed">Follicles are loaded into hollow needles and directly implanted.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-50/80 flex-shrink-0">
                  <Sparkles size={16} className="text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">Maximum Density Pack</p>
                  <p className="text-xs text-slate-600 leading-relaxed">Allows tight packing (up to 55 follicles/cm²) for ultra-thick hairlines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-50/80 flex-shrink-0">
                  <ShieldCheck size={16} className="text-emerald-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">No Shaving Needed</p>
                  <p className="text-xs text-slate-600 leading-relaxed">Ideal for working professionals needing discreet recovery.</p>
                </div>
              </div>
            </div>

            {/* Diagnostic Spec Bar */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <ShieldCheck size={14} className="text-sky-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Session Capacity</p>
                  <p className="text-xs font-bold text-slate-900">2,500 - 3,500 Grafts</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock size={14} className="text-sky-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Recovery Time</p>
                  <p className="text-xs font-bold text-slate-900">3 to 5 Days</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Scissors size={14} className="text-sky-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Shaving</p>
                  <p className="text-xs font-bold text-slate-900">No Shave Option</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check size={14} className="text-emerald-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Follicle Survival</p>
                  <p className="text-xs font-bold text-slate-900">99%+ (Under 2 min)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Table */}
        <div className="mb-12 bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Microscope size={20} className="text-sky-700" />
              Quick Diagnostic Comparison
            </h3>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisonData.map((row, index) => (
              <div key={index} className="transition-colors duration-200">
                <button
                  onClick={() => toggleRow(index)}
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-slate-900">{row.parameter}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-300 ${
                      expandedRows.has(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedRows.has(index) && (
                  <div className="px-5 sm:px-6 pb-4 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3 rounded-xl bg-sky-50/50 border border-sky-100/60">
                        <p className="text-xs font-semibold text-sky-800 mb-1">Sapphire Micro-FUE</p>
                        <p className="text-sm text-slate-900">{row.sapphire}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-100/60">
                        <p className="text-xs font-semibold text-amber-800 mb-1">DHI</p>
                        <p className="text-sm text-slate-900">{row.dhi}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Surgeon Advisory CTA Bridge */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Doctor Avatar & Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_-3px_rgba(2,132,199,0.25)]">
                <Stethoscope size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-base font-bold text-slate-900">Surgeon's Advisory</h4>
                  <Check size={16} className="text-sky-700" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Unsure which technique matches your scalp density? Let our surgical team examine your hair follicle thickness via dermoscopy.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href="https://wa.me/919999999999?text=Hello%20Doctor%2C%20I%20want%20to%20understand%20which%20technique%20is%20best%20for%20my%20case."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-xl shadow-[0_8px_20px_-3px_rgba(4,120,87,0.25)] hover:shadow-[0_12px_28px_-3px_rgba(4,120,87,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MessageCircle size={18} />
                <span>Get Surgeon's Recommendation</span>
              </a>

              <button className="group flex items-center justify-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/70 text-slate-800 text-sm font-semibold rounded-xl shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_28px_-4px_rgba(15,23,42,0.08)] hover:border-slate-300 transition-all duration-300 ease-out hover:-translate-y-0.5 whitespace-nowrap">
                <Calculator size={18} />
                <span>Compare Pricing ↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TechniqueComparison;

import React from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Video,
  MessageCircle,
  Wind,
  Package,
  Droplet,
  Activity,
  Quote,
  Stethoscope,
  Users,
  Microscope,
} from 'lucide-react';

const SurgeonCredentials: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 via-[#F8FAFC] to-slate-100/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-50/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] mb-6">
            <ShieldCheck size={16} className="text-amber-700" />
            <span className="text-sm font-semibold text-slate-700">Surgical Leadership & Clinical Safety</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Procedures Executed By{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-slate-800">
              Board-Certified Surgeons,
            </span>
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-slate-800">
              {' '}Never Technicians.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unlike generic aesthetic chains, every follicle at our center is harvested, sorted, and implanted directly under the surgical supervision of board-certified plastic and aesthetic surgeons.
          </p>
        </div>

        {/* Lead Surgeon Spotlight */}
        <div className="mb-16 bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Left Column - Doctor Visual */}
            <div className="relative p-8 sm:p-10 bg-gradient-to-br from-sky-50/50 to-slate-50/50 flex items-center justify-center">
              {/* Doctor Portrait Frame */}
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/60">
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/60 flex items-center justify-center">
                        <Stethoscope size={64} className="text-slate-400" />
                      </div>
                      <p className="text-sm font-semibold text-slate-600">Chief Surgeon Portrait</p>
                    </div>
                  </div>
                  
                  {/* Glassmorphic overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-white/60 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">VS</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate">Dr. Vikramaditya Sharma</p>
                        <p className="text-[10px] text-slate-600 truncate">M.S., M.Ch. Plastic Surgery</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Badges */}
                <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] border border-slate-200/60">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-amber-600" />
                    <span className="text-xs font-semibold text-slate-800">12+ Years Experience</span>
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] border border-slate-200/60">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-sky-700" />
                    <span className="text-xs font-semibold text-slate-800">ISHRS Member</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Clinical Pedigree */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Dr. Vikramaditya Sharma, M.S., M.Ch.</h3>
                <p className="text-sm text-sky-700 font-semibold mb-1">Plastic & Aesthetic Surgery</p>
                <p className="text-sm text-slate-600">Chief Hair Restoration Surgeon & Hairline Aesthetician</p>
              </div>

              {/* Key Credential Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-amber-50/80 flex-shrink-0">
                    <ShieldCheck size={16} className="text-amber-700" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">Over 4,500+ Documented High-Density Hairlines Designed</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-amber-50/80 flex-shrink-0">
                    <ShieldCheck size={16} className="text-amber-700" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">Fellowship in Advanced Robotic & Sapphire Micro-FUE (Istanbul & UK)</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-amber-50/80 flex-shrink-0">
                    <ShieldCheck size={16} className="text-amber-700" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">Zero-Linear-Scar Protocol Specialization</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-amber-50/80 flex-shrink-0">
                    <ShieldCheck size={16} className="text-amber-700" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">Personalized Facial Angle Alignment for 100% Natural Hairlines</p>
                </div>
              </div>

              {/* Surgeon's Direct Quote */}
              <div className="relative bg-slate-50/80 rounded-xl p-5 border border-slate-200/60">
                <Quote size={24} className="text-sky-600/30 absolute top-3 left-3" />
                <p className="text-sm text-slate-700 italic leading-relaxed pl-6">
                  "A successful hair transplant is not just about moving hair; it is an artistic science of matching angle, direction, and curl to your facial architecture."
                </p>
                <p className="text-xs text-slate-500 mt-3 pl-6 font-semibold">— Dr. Vikramaditya Sharma</p>
              </div>
            </div>
          </div>
        </div>

        {/* Surgical Infrastructure & Sterility Protocols */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">Hospital-Grade Sterility Protocols</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1: Laminar Air Flow */}
            <div className="group bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 transition-all duration-300 ease-out hover:shadow-[0_18px_40px_-8px_rgba(15,23,42,0.07)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50/80 flex items-center justify-center mb-4">
                <Wind size={24} className="text-sky-700" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Ultra-Clean Laminar Air Flow OT</h4>
              <p className="text-xs text-slate-600 leading-relaxed">HEPA-14 filtered positive-pressure operating suites eliminating 99.97% of airborne pathogens.</p>
            </div>

            {/* Card 2: Single-Use Consumables */}
            <div className="group bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 transition-all duration-300 ease-out hover:shadow-[0_18px_40px_-8px_rgba(15,23,42,0.07)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-50/80 flex items-center justify-center mb-4">
                <Package size={24} className="text-emerald-700" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">100% Single-Use Micro-Consumables</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Zero cross-contamination. Brand-new sapphire blades and Choi implanter needles unsealed in front of every patient.</p>
            </div>

            {/* Card 3: Tumescent Anesthesia */}
            <div className="group bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 transition-all duration-300 ease-out hover:shadow-[0_18px_40px_-8px_rgba(15,23,42,0.07)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-50/80 flex items-center justify-center mb-4">
                <Droplet size={24} className="text-amber-700" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Painless Tumescent Anesthesia Protocol</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Two-step needleless pressure injection technique ensuring a completely pain-free, comfortable 6-hour procedure.</p>
            </div>

            {/* Card 4: Digital Monitoring */}
            <div className="group bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 transition-all duration-300 ease-out hover:shadow-[0_18px_40px_-8px_rgba(15,23,42,0.07)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-sky-50/80 flex items-center justify-center mb-4">
                <Activity size={24} className="text-sky-700" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Digital Follicular Viability Monitoring</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Extracted follicular units stored in chilled hypothermic preservation solutions (HypoThermosol) for maximum graft survival.</p>
            </div>
          </div>
        </div>

        {/* Accreditation & Medical Affiliation Strip */}
        <div className="mb-16 bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">Recognized Medical Accreditations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
              <Microscope size={32} className="text-slate-400 mb-2" />
              <p className="text-xs font-semibold text-slate-700 text-center">ISHRS</p>
              <p className="text-[10px] text-slate-500 text-center mt-1">International Society of Hair Restoration Surgery</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
              <Users size={32} className="text-slate-400 mb-2" />
              <p className="text-xs font-semibold text-slate-700 text-center">AHRS India</p>
              <p className="text-[10px] text-slate-500 text-center mt-1">Association of Hair Restoration Surgeons</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
              <ShieldCheck size={32} className="text-slate-400 mb-2" />
              <p className="text-xs font-semibold text-slate-700 text-center">US-FDA Approved</p>
              <p className="text-[10px] text-slate-500 text-center mt-1">Micro-Instrumentation Standard</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
              <Award size={32} className="text-slate-400 mb-2" />
              <p className="text-xs font-semibold text-slate-700 text-center">NABH Accredited</p>
              <p className="text-[10px] text-slate-500 text-center mt-1">Facility Standards</p>
            </div>
          </div>
        </div>

        {/* Direct Doctor Consultation CTA Block */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.2)]">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Speak Directly With Our Chief Surgeon Before Making Any Decision.
            </h3>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              No sales consultants or aggressive pushy agents. Get an honest clinical evaluation of your donor area.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-2.5 px-6 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl shadow-[0_8px_20px_-3px_rgba(2,132,199,0.4)] hover:shadow-[0_12px_28px_-3px_rgba(2,132,199,0.5)] transition-all duration-300 ease-out hover:-translate-y-0.5">
              <Video size={20} />
              <span>Book Direct Video Consultation With Surgeon</span>
            </button>

            <a
              href="https://wa.me/919999999999?text=Hello%20Doctor%2C%20I%20would%20like%20to%20discuss%20my%20hair%20restoration%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-[0_8px_20px_-3px_rgba(4,120,87,0.4)] hover:shadow-[0_12px_28px_-3px_rgba(4,120,87,0.5)] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              <span>Ask Doctor on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgeonCredentials;

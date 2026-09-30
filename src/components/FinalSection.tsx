import React from 'react';
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Award,
  Stethoscope,
  Heart,
  Sparkles,
} from 'lucide-react';

const FinalSection: React.FC = () => {
  return (
    <>
      {/* HIGH-IMPACT PRE-FOOTER CONVERSION BANNER */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Glowing radial gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Top Status Pill */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-amber-300">
                Limited Consultation Slots For This Week
              </span>
            </div>
          </div>

          {/* Punchy Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center mb-4 tracking-tight leading-tight">
            Take The First Step Toward{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-300">
              Permanent Hair Restoration
            </span>{' '}
            Today.
          </h2>

          {/* Value Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Book a complimentary in-clinic microscopic follicular density scan (Worth ₹1,500 — Free for first-time visitors). Get an exact graft count directly from our surgeons.
          </p>

          {/* Action Deck */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* Primary Button */}
            <button className="shimmer-btn group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold text-base rounded-xl shadow-[0_8px_20px_-3px_rgba(2,132,199,0.4)] hover:shadow-[0_12px_28px_-3px_rgba(2,132,199,0.5)] transition-all duration-300 ease-out hover:-translate-y-0.5">
              <Calendar size={20} />
              <span>Claim Free Scalp Analysis & Slot</span>
            </button>

            {/* Secondary Button */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20free%20scalp%20analysis%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border-2 border-emerald-500/60 hover:border-emerald-400 text-white font-semibold text-base rounded-xl transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              <span>Direct Chat with Surgeon on WhatsApp</span>
            </a>
          </div>

          {/* Trust Reassurance Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Zero Obligation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* HIGH-END CLINICAL FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Column 1: Clinic Identity & Brand Authority */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">AURA HAIR</h3>
                  <p className="text-xs text-slate-400">RESTORATION CLINIC</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                India's premier surgical hair restoration center specializing in high-density Sapphire Micro-FUE and Direct Hair Implantation (DHI).
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Award size={14} className="text-slate-400" />
                  <span className="text-xs font-semibold text-slate-400">ISHRS</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <Award size={14} className="text-slate-400" />
                  <span className="text-xs font-semibold text-slate-400">AHRS</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  <ShieldCheck size={14} className="text-slate-400" />
                  <span className="text-xs font-semibold text-slate-400">NABH</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Navigation & Clinical Services */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Clinical Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2">
                    <Sparkles size={14} />
                    <span>Sapphire Micro-FUE Technique</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2">
                    <Stethoscope size={14} />
                    <span>Direct Hair Implantation (DHI)</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2">
                    <Calendar size={14} />
                    <span>Interactive Graft & Cost Calculator</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2">
                    <ExternalLink size={14} />
                    <span>Before & After Transformations</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center gap-2">
                    <ShieldCheck size={14} />
                    <span>Doctor Credentials & Sterility Standards</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Clinic Locations & Timings */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Visit Our Clinic</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-300 font-semibold">Aura Aesthetic Centre</p>
                    <p className="text-xs text-slate-400">Medical Enclave, City Centre</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-300 font-semibold">Operating Hours</p>
                    <p className="text-xs text-slate-400">Monday – Sunday: 09:30 AM – 07:30 PM</p>
                    <p className="text-xs text-slate-500 italic">(By Prior Appointment Only)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-300 font-semibold">Emergency Helpline</p>
                    <p className="text-xs text-slate-400">+91 98765 43210</p>
                    <p className="text-xs text-slate-400">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-300 font-semibold">Email</p>
                    <a href="mailto:consult@aurahairclinic.com" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">
                      consult@aurahairclinic.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Regulatory & Medical Disclaimer */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Medical Disclaimer</h4>
              <div className="space-y-4">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Results vary depending on patient age, donor area quality, and physiological factors. All surgical procedures are conducted in NABH-standard OT environments by certified surgeons.
                </p>
                <div className="pt-3 border-t border-slate-800">
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-400">Clinic Reg No:</span> MH-MED-2024-8842
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    <span className="font-semibold text-slate-400">Medical Council:</span> Govt. Medical Council Registered
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Sub-Footer Bar */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 text-center sm:text-left">
                © 2026 Aura Hair Restoration Clinic. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-slate-400 hover:text-sky-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-slate-400 hover:text-sky-400 transition-colors">
                  Patient Rights
                </a>
                <a href="#" className="text-xs text-slate-400 hover:text-sky-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* PERSISTENT MOBILE STICKY ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-3">
        <div className="grid grid-cols-2 gap-3">
          {/* Direct Phone Call Button */}
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl transition-all duration-200"
          >
            <Phone size={18} />
            <span>Call Clinic</span>
          </a>

          {/* Instant WhatsApp Doctor Button */}
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20free%20scalp%20analysis%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all duration-200"
          >
            <div className="relative">
              <MessageCircle size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full animate-pulse"></span>
            </div>
            <span>WhatsApp Doctor</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FinalSection;

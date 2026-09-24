import {
  Calendar,
  ArrowRight,
  Play,
  ShieldCheck,
  CheckCircle2,
  Star,
  Activity,
  TrendingUp,
  BadgeCheck,
  Award,
  Users,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Mesh & Lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(2,132,199,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(15,23,42,0.05)_0%,_transparent_50%)]" />
      
      {/* Dot Grid Overlay */}
      <div className="absolute inset-0 dot-grid opacity-[0.06]" />
      
      {/* Ambient Backlight */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#0284C7]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#D97706]/5 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* LEFT COLUMN - Copy & Conversion */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Live Status Pill */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D97706]/30 bg-[#FEF3C7]/50 backdrop-blur-sm shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#0F172A]">
                  Live Consultation Slots Available Today
                </span>
              </div>
              <div className="mt-2 ml-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-full">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  US-FDA Approved Sapphire FUE & DHI Tech
                </span>
              </div>
            </div>

            {/* Impactful Headline */}
            <div className="animate-fade-in-up-delay-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-bold leading-[1.1] tracking-tight text-[#0F172A]">
                Permanent,{' '}
                <span className="bg-gradient-to-r from-[#0284C7] to-[#0F172A] bg-clip-text text-transparent">
                  Natural Hair Restoration
                </span>{' '}
                — Engineered With Micro-Precision.
              </h1>
            </div>

            {/* Value Proposition Subtitle */}
            <div className="animate-fade-in-up-delay-2">
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
                Painless, scarless micro-grafting supervised by board-certified hair surgeons. 
                Walk in with thinning hair, walk out with guaranteed lifelong density.{' '}
                <span className="font-semibold text-[#0F172A]">0% Interest EMI Available.</span>
              </p>
            </div>

            {/* Interactive Dual CTA Group */}
            <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Primary CTA */}
              <button className="shimmer-btn group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 min-h-[52px] bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg shadow-[#0284C7]/25 hover:shadow-xl hover:shadow-[#0284C7]/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <Calendar className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                <span>Claim Free Scalp Analysis & Graft Estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 min-h-[52px] bg-white/80 backdrop-blur-sm border border-[#D97706]/30 text-[#0F172A] font-semibold text-sm sm:text-base rounded-xl hover:bg-[#FEF3C7]/30 hover:border-[#D97706]/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <Play className="w-4 h-4 text-[#D97706]" />
                <span>Explore 1-Year Transformations</span>
              </button>
            </div>

            {/* Quick Trust Micro-Stats */}
            <div className="animate-fade-in-up-delay-4 pt-4 sm:pt-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-0">
                <div className="flex items-center gap-2 px-3 sm:px-4">
                  <TrendingUp className="w-5 h-5 text-[#0284C7]" />
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-[#0F172A]">15,000+</p>
                    <p className="text-xs text-[#64748B]">Grafts Implanted</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-[#CBD5E1] to-transparent" />
                <div className="flex items-center gap-2 px-3 sm:px-4">
                  <Activity className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-[#0F172A]">99.4%</p>
                    <p className="text-xs text-[#64748B]">Follicle Survival Rate</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-[#CBD5E1] to-transparent" />
                <div className="flex items-center gap-2 px-3 sm:px-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                    ))}
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-[#0F172A]">4.9/5</p>
                    <p className="text-xs text-[#64748B]">Google & Practo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Photographic Showcase */}
          <div className="relative flex items-center justify-center animate-fade-in-up-delay-2">
            
            {/* Ambient glow behind photo container */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0284C7]/10 to-[#D97706]/5 rounded-[2.5rem] blur-2xl scale-95" />

            {/* Main Photo Container - overflow-visible for floating badges */}
            <div className="relative w-full max-w-md lg:max-w-lg overflow-visible">
              
              {/* Photo Frame with Color Grading */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#0284C7]/15 ring-1 ring-sky-500/20 transition-all duration-500 hover:scale-[1.01]">
                
                {/* Main Clinical Image */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop"
                    alt="Board-certified hair restoration specialist in clinical environment"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Color Grade Overlay - Bottom to Top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                  
                  {/* Subtle top gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-transparent" />
                  
                  {/* Luxury border inner glow */}
                  <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />

                  {/* Doctor Dossier Bar - Full Width Bottom Anchor */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-slate-950/85 backdrop-blur-md rounded-2xl p-4 border border-white/15 shadow-2xl">
                      <div className="flex justify-between items-center gap-3">
                        {/* Left Side - Doctor Info */}
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          {/* Avatar */}
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0369A1] flex items-center justify-center flex-shrink-0 ring-2 ring-white/20">
                            <span className="text-white font-bold text-xs sm:text-sm">AS</span>
                          </div>
                          
                          {/* Doctor Details */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <p className="text-xs sm:text-sm font-bold text-white truncate">Dr. A. Sen, M.Ch.</p>
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                            </div>
                            <p className="text-[10px] sm:text-[11px] text-white/80 font-medium truncate">Board-Certified Hair Restoration Specialist</p>
                            <div className="flex items-center gap-1 mt-0.5">
                              <Award className="w-3 h-3 text-amber-400 flex-shrink-0" />
                              <span className="text-[9px] sm:text-[10px] text-amber-300/90 font-medium">12+ Yrs Experience</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - CTA Button */}
                        <button className="group flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md shrink-0">
                          <Users className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Meet Team</span>
                          <span className="sm:hidden">Meet</span>
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating: Stats Badge - TOP RIGHT (outside photo frame) */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20 animate-float">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-sky-100 transition-all duration-300 hover:scale-[1.05]">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <p className="text-lg sm:text-xl font-bold text-[#0284C7]">3000+</p>
                      <p className="text-[9px] sm:text-[10px] text-[#64748B] font-medium">Grafts/Session</p>
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#CBD5E1] to-transparent" />
                    <div className="flex flex-col items-center">
                      <p className="text-lg sm:text-xl font-bold text-[#D97706]">45 min</p>
                      <p className="text-[9px] sm:text-[10px] text-[#64748B] font-medium">Procedure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating: Norwood Scale Badge - TOP LEFT (outside photo frame) */}
              <div className="absolute top-6 -left-4 sm:-left-6 z-20">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-100 transition-all duration-300 hover:scale-[1.05] cursor-default">
                  <p className="text-[10px] sm:text-xs font-semibold text-[#0F172A] whitespace-nowrap">
                    Treating Norwood Stages{' '}
                    <span className="text-[#0284C7]">2 to 7</span>
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#64748B]">Maximum Density</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

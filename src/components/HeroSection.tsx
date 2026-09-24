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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50/80 via-[#F8FAFC] to-slate-100/50">
      {/* Background Mesh & Lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 via-transparent to-amber-50/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(2,132,199,0.04)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(15,23,42,0.03)_0%,_transparent_50%)]" />
      
      {/* Ambient Soft Blurs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-amber-50/20 rounded-full blur-3xl" />
      
      {/* Dot Grid Overlay */}
      <div className="absolute inset-0 dot-grid opacity-[0.04]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* LEFT COLUMN - Copy & Conversion */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Live Status Pill */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-200/60 bg-emerald-50/50 backdrop-blur-sm shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-800">
                  Live Now • Consultation Open
                </span>
              </div>
              <div className="mt-2 ml-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 bg-sky-50/80 px-2.5 py-1 rounded-full border border-sky-200/60">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  US-FDA Approved Sapphire FUE & DHI Tech
                </span>
              </div>
            </div>

            {/* Impactful Headline */}
            <div className="animate-fade-in-up-delay-1">
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                Permanent Natural Hair.
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-slate-900 bg-clip-text text-transparent">
                  Micro-Precision Density.
                </span>
              </h1>
            </div>

            {/* Value Proposition Subtitle */}
            <div className="animate-fade-in-up-delay-2">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-3">
                Painless micro-grafting supervised by board-certified hair surgeons. 
                Lifelong natural density with zero visible linear scarring.
              </p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                ✓ 0% Interest EMI Available
              </span>
            </div>

            {/* Interactive Dual CTA Group */}
            <div className="animate-fade-in-up-delay-3 flex flex-wrap sm:flex-nowrap items-center gap-3.5 pt-2">
              {/* Primary CTA */}
              <button className="shimmer-btn group relative inline-flex items-center justify-center gap-2 px-6 h-12 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-sky-600/20 hover:shadow-xl hover:shadow-sky-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
                <Calendar className="w-4 h-4" />
                <span>Free Scalp Analysis & Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button className="group inline-flex items-center justify-center gap-2 px-6 h-12 bg-white/80 backdrop-blur-sm border border-amber-200/60 text-slate-800 font-semibold text-sm rounded-xl hover:bg-amber-50/60 hover:border-amber-300/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
                <Play className="w-4 h-4 text-amber-700" />
                <span>Explore Results</span>
              </button>
            </div>

            {/* Quick Trust Micro-Stats */}
            <div className="animate-fade-in-up-delay-4 pt-4 sm:pt-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-0">
                <div className="flex items-center gap-2 px-3 sm:px-4">
                  <TrendingUp className="w-5 h-5 text-sky-700" />
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-slate-900">15,000+</p>
                    <p className="text-xs text-slate-600">Grafts Implanted</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                <div className="flex items-center gap-2 px-3 sm:px-4">
                  <Activity className="w-5 h-5 text-emerald-700" />
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-slate-900">99.4%</p>
                    <p className="text-xs text-slate-600">Follicle Survival Rate</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                <div className="flex items-center gap-2 px-3 sm:px-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                    ))}
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-slate-900">4.9/5</p>
                    <p className="text-xs text-slate-600">Google & Practo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Photographic Showcase */}
          <div className="relative flex items-center justify-center animate-fade-in-up-delay-2">
            
            {/* Ambient glow behind photo container */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/20 to-amber-50/10 rounded-[2.5rem] blur-2xl scale-95" />

            {/* Main Photo Container - overflow-visible for floating badges */}
            <div className="relative w-full max-w-md lg:max-w-lg overflow-visible">
              
              {/* Photo Frame with Color Grading */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/60 transition-all duration-500 hover:scale-[1.01]">
                
                {/* Main Clinical Image */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop"
                    alt="Board-certified hair restoration specialist in clinical environment"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Color Grade Overlay - Bottom to Top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />
                  
                  {/* Subtle top gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 via-transparent to-transparent" />
                  
                  {/* Luxury border inner glow */}
                  <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />

                  {/* Doctor Dossier Bar - Full Width Bottom Anchor */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl">
                      <div className="flex justify-between items-center gap-3">
                        {/* Left Side - Doctor Info */}
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          {/* Avatar */}
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center flex-shrink-0 ring-2 ring-white/20">
                            <span className="text-white font-bold text-xs sm:text-sm">AS</span>
                          </div>
                          
                          {/* Doctor Details */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <p className="text-xs sm:text-sm font-bold text-white truncate">Dr. A. Sen, M.Ch.</p>
                              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                            </div>
                            <p className="text-[10px] sm:text-[11px] text-white/70 font-medium truncate">Board-Certified Hair Restoration Specialist</p>
                            <div className="flex items-center gap-1 mt-0.5">
                              <Award className="w-3 h-3 text-amber-500 flex-shrink-0" />
                              <span className="text-[9px] sm:text-[10px] text-amber-400/90 font-medium">12+ Yrs Experience</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - CTA Button */}
                        <button className="group flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-xl transition-all duration-300 shadow-md shrink-0">
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
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg shadow-slate-900/5 border border-slate-200/60 transition-all duration-300 hover:scale-[1.05]">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <p className="text-lg sm:text-xl font-bold text-sky-800">3000+</p>
                      <p className="text-[9px] sm:text-[10px] text-slate-600 font-medium">Grafts/Session</p>
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                    <div className="flex flex-col items-center">
                      <p className="text-lg sm:text-xl font-bold text-amber-800">45 min</p>
                      <p className="text-[9px] sm:text-[10px] text-slate-600 font-medium">Procedure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating: Norwood Scale Badge - TOP LEFT (outside photo frame) */}
              <div className="absolute top-6 -left-4 sm:-left-6 z-20">
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-lg shadow-slate-900/5 border border-slate-200/60 transition-all duration-300 hover:scale-[1.05] cursor-default">
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-800 whitespace-nowrap">
                    Treating Norwood Stages{' '}
                    <span className="text-sky-800">2 to 7</span>
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-slate-600">Maximum Density</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-100/50 to-transparent" />
    </section>
  );
}

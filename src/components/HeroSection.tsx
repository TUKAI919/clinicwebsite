import {
  Calendar,
  ArrowRight,
  Play,
  ShieldCheck,
  CheckCircle2,
  Star,
  Award,
  Sparkles,
  Activity,
  TrendingUp,
  Clock,
  BadgeCheck,
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

          {/* RIGHT COLUMN - Dynamic Visual Showcase */}
          <div className="relative flex items-center justify-center animate-fade-in-up-delay-2">
            
            {/* Ambient glow behind visual container */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0284C7]/10 to-[#D97706]/5 rounded-3xl blur-2xl scale-95" />

            {/* Main Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#0284C7]/10 border border-white/60 transition-all duration-300 hover:scale-[1.01]">
                
                {/* Clinical Visual Header */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] aspect-[4/3] flex items-center justify-center mb-6">
                  {/* Decorative medical pattern */}
                  <div className="absolute inset-0 dot-grid opacity-[0.08]" />
                  
                  {/* Central visual element */}
                  <div className="relative flex flex-col items-center justify-center text-center p-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#0284C7]/10 to-[#0284C7]/5 flex items-center justify-center mb-4 ring-4 ring-[#0284C7]/10">
                      <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[#0284C7]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1">Sapphire FUE Technology</h3>
                    <p className="text-xs sm:text-sm text-[#64748B] max-w-[200px]">Micro-precision graft extraction with 0.6mm sapphire blades</p>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#0284C7]/20 animate-pulse" />
                    <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-[#D97706]/30 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-8 left-8 w-1.5 h-1.5 rounded-full bg-green-400/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>

                  {/* Corner badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-[#D97706]" />
                    <span className="text-[10px] sm:text-xs font-semibold text-[#0F172A]">Premium Care</span>
                  </div>

                  {/* Timer badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span className="text-[10px] sm:text-xs font-semibold text-[#0F172A]">45 Min Procedure</span>
                  </div>
                </div>

                {/* Mini stats row inside card */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-2 rounded-xl bg-[#F0F9FF]/80">
                    <p className="text-sm sm:text-base font-bold text-[#0284C7]">3000+</p>
                    <p className="text-[10px] text-[#64748B]">Grafts/Session</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-[#FEF3C7]/50">
                    <p className="text-sm sm:text-base font-bold text-[#D97706]">12 Mo</p>
                    <p className="text-[10px] text-[#64748B]">Full Results</p>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-green-50">
                    <p className="text-sm sm:text-base font-bold text-green-700">0%</p>
                    <p className="text-[10px] text-[#64748B]">Scar Visible</p>
                  </div>
                </div>
              </div>

              {/* Floating Glass Card 1 - Top Right */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 animate-float z-20">
                <div className="glass-card rounded-2xl p-3 sm:p-4 shadow-xl shadow-[#D97706]/10 border border-[#D97706]/20 max-w-[180px] sm:max-w-[200px] transition-all duration-300 hover:scale-[1.05]">
                  <div className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#D97706]/10 to-[#FEF3C7] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#D97706]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0F172A] leading-tight">Board-Certified Plastic Surgeons</p>
                      <p className="text-[10px] text-[#64748B] mt-0.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        Zero-Scar Guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Glass Card 2 - Bottom Left */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 animate-float-reverse z-20">
                <div className="glass-card rounded-2xl p-3 sm:p-4 shadow-xl shadow-[#0284C7]/10 border border-[#0284C7]/20 transition-all duration-300 hover:scale-[1.05]">
                  <div className="flex items-center gap-3">
                    {/* Circular Progress Ring */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                        <circle
                          cx="28"
                          cy="28"
                          r="24"
                          stroke="#E0F2FE"
                          strokeWidth="4"
                          fill="none"
                        />
                        <circle
                          cx="28"
                          cy="28"
                          r="24"
                          stroke="#0284C7"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 24 * 0.994} ${2 * Math.PI * 24}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] sm:text-xs font-bold text-[#0F172A]">99.4%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0F172A] leading-tight">Graft Retention Index</p>
                      <p className="text-[10px] text-[#64748B] flex items-center gap-1 mt-0.5">
                        <BadgeCheck className="w-3 h-3 text-[#0284C7]" />
                        Clinically Verified
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Norwood Scale Micro-Badge */}
              <div className="absolute top-1/2 -right-2 sm:-right-6 transform -translate-y-1/2 z-20">
                <div className="glass-card rounded-xl px-3 py-2 shadow-lg border border-white/60 transition-all duration-300 hover:scale-[1.05] cursor-default">
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

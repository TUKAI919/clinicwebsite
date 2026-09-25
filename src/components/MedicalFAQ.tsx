import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Stethoscope,
  MessageCircle,
  Download,
  CheckCircle2,
  Award,
} from 'lucide-react';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const MedicalFAQ: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const filters = [
    { id: 'all', label: 'All Questions' },
    { id: 'procedure', label: 'Procedure & Pain' },
    { id: 'recovery', label: 'Recovery & Office Resumption' },
    { id: 'permanence', label: 'Graft Permanence & Warranty' },
    { id: 'pricing', label: 'Pricing & EMI Plans' },
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      category: 'procedure',
      question: 'Is the hair transplant procedure painful? What will I actually feel?',
      answer: 'Not at all. We use a specialized 2-step painless local anesthesia protocol. Once the scalp is numb (takes under 3 minutes), you feel zero surgical sensation. Most patients comfortably watch movies, listen to podcasts, or take naps during the 6-hour procedure.',
    },
    {
      id: 2,
      category: 'permanence',
      question: 'Are the transplanted hairs truly permanent, or can they fall out again?',
      answer: 'They are 100% permanent. Transplanted follicles are harvested from your \'safe donor zone\' (the back and sides of your head), which is genetically resistant to DHT (the hormone responsible for male pattern baldness). These hairs will continue to grow naturally for the rest of your life.',
    },
    {
      id: 3,
      category: 'recovery',
      question: 'How many days will I need to take off from work?',
      answer: 'Most patients resume desk jobs and work-from-home within 48 to 72 hours. Our micro-sapphire technology causes minimal tissue trauma. If you choose our No-Shave DHI technique, colleagues rarely notice you\'ve had a procedure done.',
    },
    {
      id: 4,
      category: 'recovery',
      question: 'Will there be visible scars on the back of my head?',
      answer: 'Zero linear scars. Unlike outdated Strip (FUT) surgery that leaves long horizontal scars, our micro-punches (0.75mm - 0.85mm) leave microscopic dots that heal completely within 5 to 7 days, remaining virtually invisible even with short fades or buzz cuts.',
    },
    {
      id: 5,
      category: 'permanence',
      question: 'What happens during the shedding phase (Shock Loss)?',
      answer: 'Between weeks 3 and 8 post-op, the transplanted hair shafts will temporarily shed. This is a completely natural biological process called \'shock loss.\' The implanted follicular roots remain alive underneath your scalp and sprout fresh, permanent shafts by Month 3 to 4, reaching full density by Month 8 to 10.',
    },
    {
      id: 6,
      category: 'pricing',
      question: 'Are there any hidden costs for OT charges, medications, or anesthesia?',
      answer: 'Zero hidden surprises. Every quotation from our clinic is an all-inclusive clinical package: Pre-op diagnostics, OT charges, local anesthesia, post-op medication kit, personalized neck pillow, and 1 full year of follow-up PRP & dermoscopy consultations.',
    },
  ];

  const filteredFAQs = activeFilter === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeFilter);

  const toggleItem = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 via-[#F8FAFC] to-slate-100/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-50/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] mb-6">
            <HelpCircle size={16} className="text-amber-700" />
            <span className="text-sm font-semibold text-slate-700">Medical Clarity & Complete Transparency</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Everything You Need to Know{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-slate-800">
              Before Your Procedure.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Zero medical jargon. Honest, clinically backed answers directly from our surgical team to help you make an informed decision.
          </p>
        </div>

        {/* Interactive FAQ Category Filters */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex gap-2 sm:gap-3 min-w-max justify-start sm:justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ease-out ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-sky-700 to-sky-800 text-white shadow-[0_12px_35px_-4px_rgba(2,132,199,0.12)] border border-sky-400/80 scale-[1.02]'
                    : 'bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200/70 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] hover:border-slate-300 hover:bg-white/90 hover:shadow-[0_8px_28px_-4px_rgba(15,23,42,0.08)] hover:-translate-y-0.5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12 space-y-3">
          {filteredFAQs.map((faq) => {
            const isExpanded = expandedItems.has(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white/80 backdrop-blur-md border border-slate-200/70 hover:border-sky-300 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 pr-4 group-hover:text-sky-700 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Post-Procedure Safety & Clinical Guarantee Badge */}
        <div className="mb-12 bg-gradient-to-br from-amber-50/80 to-orange-50/50 border border-amber-200/60 rounded-2xl p-6 sm:p-8 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)]">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_-3px_rgba(217,119,6,0.25)]">
              <ShieldCheck size={28} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Award size={18} className="text-amber-700" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  The Aura 1-Year Clinical Density Guarantee
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every follicle is placed with audited precision. If you do not achieve the medically projected density at month 12, our surgical board provides complimentary graft touch-ups.
              </p>
            </div>
          </div>
        </div>

        {/* Still Have Questions? Direct Doctor Access Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.2)]">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Doctor Avatar & Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center shadow-[0_8px_20px_-3px_rgba(2,132,199,0.4)]">
                  <Stethoscope size={28} className="text-white" />
                </div>
                {/* Live indicator dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  Still Have Questions?
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Have a specific medical condition or unique donor area questions?
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/919999999999?text=Hello%20Doctor%2C%20I%20have%20a%20specific%20medical%20question%20about%20hair%20transplant."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-[0_8px_20px_-3px_rgba(4,120,87,0.4)] hover:shadow-[0_12px_28px_-3px_rgba(4,120,87,0.5)] transition-all duration-300 ease-out hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MessageCircle size={18} />
                <span>Ask Surgeon on WhatsApp</span>
              </a>

              <button className="group flex items-center justify-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white text-sm font-semibold rounded-xl transition-all duration-300 ease-out hover:-translate-y-0.5 whitespace-nowrap">
                <Download size={18} />
                <span>Download Post-Op Guide (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalFAQ;

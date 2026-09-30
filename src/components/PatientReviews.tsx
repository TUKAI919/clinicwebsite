import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  Play,
  Quote,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  ShieldCheck,
  Video,
} from 'lucide-react';

interface Review {
  id: number;
  category: string;
  rating: number;
  patientName: string;
  location: string;
  profession: string;
  procedure: string;
  timeline: string;
  review: string;
  avatar: string;
}

interface VideoCase {
  id: number;
  patientName: string;
  age: number;
  profession: string;
  timeline: string;
  grafts: string;
  technique: string;
  quote: string;
  thumbnail: string;
}

const PatientReviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Reviews (4.9 ★)' },
    { id: 'hairlines', label: 'Natural Hairlines (Stage 2-3)' },
    { id: 'crown', label: 'Crown & Vertex Growth' },
    { id: 'painfree', label: 'Pain-Free Procedure Experience' },
    { id: 'nri', label: 'NRI & Outstation Patients' },
  ];

  const reviews: Review[] = [
    {
      id: 1,
      category: 'hairlines',
      rating: 5,
      patientName: 'Vikram S.',
      location: 'Bengaluru',
      profession: 'Tech Entrepreneur',
      procedure: 'Norwood Stage 4 • 3,800 Grafts',
      timeline: '7 Months Result',
      review: 'Zero pain during anesthesia - I actually fell asleep during the procedure! Donor area healed in just 6 days and I resumed office work on Monday. The hairline design is so natural that even my closest friends can\'t tell I had a transplant. Worth every rupee.',
      avatar: 'VS',
    },
    {
      id: 2,
      category: 'crown',
      rating: 5,
      patientName: 'Rohan K.',
      location: 'Dubai, UAE',
      profession: 'Investment Banker',
      procedure: 'Crown Restoration • 2,400 Grafts',
      timeline: '10 Months Result',
      review: 'Flew in from Dubai specifically for Dr. Sharma\'s expertise. The entire process was seamless - from airport pickup to post-op care. The crown density is incredible and the whorl pattern looks completely natural. The team treated me like family.',
      avatar: 'RK',
    },
    {
      id: 3,
      category: 'painfree',
      rating: 5,
      patientName: 'Arjun M.',
      location: 'Mumbai',
      profession: 'Film Director',
      procedure: 'Norwood Stage 3 • 2,900 Grafts',
      timeline: '8 Months Result',
      review: 'As someone in the public eye, I was terrified of looking unnatural or having visible scars. Dr. Sharma\'s zero-linear-scar protocol delivered exactly what he promised. The hairline frames my face perfectly and the density matches my original hair. Camera-ready in 9 months!',
      avatar: 'AM',
    },
    {
      id: 4,
      category: 'nri',
      rating: 5,
      patientName: 'Sanjay P.',
      location: 'London, UK',
      profession: 'Management Consultant',
      procedure: 'Norwood Stage 5 • 4,200 Grafts',
      timeline: '12 Months Result',
      review: 'Researching clinics across Europe and India, this stood out for transparency and surgeon credentials. Dr. Sharma personally handled every stage. The before/after is dramatic - I went from Norwood 5 to a full, natural head of hair. The NRI package made logistics effortless.',
      avatar: 'SP',
    },
    {
      id: 5,
      category: 'hairlines',
      rating: 5,
      patientName: 'Karthik R.',
      location: 'Chennai',
      profession: 'Software Architect',
      procedure: 'Hairline Design • 1,800 Grafts',
      timeline: '6 Months Result',
      review: 'I was skeptical about pain and unnatural looks. Today my hairline looks 100% like it was in my early 20s. The facial angle alignment is perfect - it follows my natural bone structure. Dr. Sharma is truly an artist with medical precision.',
      avatar: 'KR',
    },
    {
      id: 6,
      category: 'crown',
      rating: 5,
      patientName: 'Aditya N.',
      location: 'Pune',
      profession: 'Chartered Accountant',
      procedure: 'Vertex Restoration • 2,100 Grafts',
      timeline: '9 Months Result',
      review: 'The crown area was my biggest concern - it\'s so visible from behind. The DHI technique packed density perfectly and the growth direction matches my existing hair flow. Even my barber was impressed by how natural it looks. Highly recommend!',
      avatar: 'AN',
    },
  ];

  const videoCases: VideoCase[] = [
    {
      id: 1,
      patientName: 'Aman Verma',
      age: 31,
      profession: 'Software Architect',
      timeline: '10 Months Post-Op',
      grafts: '3,200 Grafts',
      technique: 'Sapphire FUE',
      quote: 'I was skeptical about pain and unnatural looks. Today my hairline looks 100% like it was in my early 20s.',
      thumbnail: 'gradient-sky',
    },
    {
      id: 2,
      patientName: 'Rahul Mehta',
      age: 38,
      profession: 'Business Owner',
      timeline: '12 Months Post-Op',
      grafts: '4,100 Grafts',
      technique: 'DHI + Sapphire Hybrid',
      quote: 'From Norwood 5 to full coverage. The transformation is life-changing. Dr. Sharma exceeded every expectation.',
      thumbnail: 'gradient-amber',
    },
  ];

  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === activeFilter);

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50/80 via-[#F8FAFC] to-slate-100/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-50/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] mb-6">
            <Star size={16} className="text-amber-700" fill="currentColor" />
            <span className="text-sm font-semibold text-slate-700">Verified Patient Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Over 4,800+ Lives Transformed.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-slate-800">
              Read Their Unfiltered Stories.
            </span>
          </h2>

          {/* Aggregate Rating Card */}
          <div className="mt-8 inline-block bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-5xl sm:text-6xl font-extrabold text-slate-900">4.9</span>
              <span className="text-2xl text-slate-400 font-semibold">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-amber-500" fill="currentColor" />
              ))}
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-center justify-center gap-2">
                <CheckCircle2 size={16} className="text-sky-700" />
                Based on 1,250+ Google Reviews & 800+ Practo Certified Patient Ratings
              </p>
              <p className="flex items-center justify-center gap-2">
                <ShieldCheck size={16} className="text-emerald-700" />
                100% Genuine Clinical Patient Records
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Review Category Filters */}
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

        {/* Video Case Study Cards */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
            Watch Real Patient Transformations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoCases.map((video) => (
              <div
                key={video.id}
                className="group bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_18px_40px_-8px_rgba(15,23,42,0.07)] hover:-translate-y-1.5"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <div className={`absolute inset-0 ${
                    video.thumbnail === 'gradient-sky' 
                      ? 'bg-gradient-to-br from-sky-900/40 to-slate-900/60' 
                      : 'bg-gradient-to-br from-amber-900/40 to-slate-900/60'
                  }`}></div>
                  
                  {/* Floating Badge Top-Left */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/60 shadow-lg">
                    <p className="text-xs font-semibold text-slate-900">{video.timeline}</p>
                  </div>

                  {/* Floating Badge Bottom-Right */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/60 shadow-lg">
                    <p className="text-xs font-semibold text-slate-900">{video.grafts} • {video.technique}</p>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="relative group/play">
                      <div className="absolute inset-0 bg-sky-500/30 rounded-full blur-xl animate-pulse"></div>
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/60 shadow-2xl transition-all duration-300 group-hover/play:scale-110 group-hover/play:border-amber-400">
                        <Play size={24} className="text-sky-700 ml-1" fill="currentColor" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Video Details Footer */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {video.patientName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{video.patientName}, {video.age}</p>
                      <p className="text-xs text-slate-600">{video.profession}</p>
                    </div>
                  </div>
                  <div className="relative bg-slate-50/80 rounded-xl p-4 border border-slate-200/60">
                    <Quote size={20} className="text-sky-600/30 absolute top-2 left-2" />
                    <p className="text-sm text-slate-700 italic leading-relaxed pl-5">
                      "{video.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Patient Review Cards */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
            What Our Patients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="group bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 transition-all duration-300 ease-out hover:shadow-[0_18px_40px_-8px_rgba(15,23,42,0.07)] hover:-translate-y-1.5"
              >
                {/* Top Row: Stars + Verified Badge + Timeline */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-500" fill="currentColor" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-sky-700" />
                    <span className="text-xs font-semibold text-slate-700">Verified Patient</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={14} className="text-slate-400" />
                  <span className="text-xs text-slate-600">{review.timeline}</span>
                </div>

                {/* Review Body */}
                <p className="text-sm text-slate-700 leading-relaxed mb-5">
                  {review.review}
                </p>

                {/* Patient Identity */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 to-sky-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">{review.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{review.patientName}</p>
                    <div className="flex items-center gap-1 text-xs text-slate-600">
                      <MapPin size={12} />
                      <span className="truncate">{review.location} • {review.profession}</span>
                    </div>
                    <p className="text-xs text-sky-700 font-semibold mt-0.5">{review.procedure}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google & Practo Verification Badge Strip */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04),0_2px_8px_-1px_rgba(15,23,42,0.02)] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {/* Google Reviews Badge */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Google Reviews</p>
                <p className="text-xs text-slate-600">1,250+ Verified Reviews</p>
              </div>
            </div>

            {/* Practo Badge */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Practo Verified</p>
                <p className="text-xs text-slate-600">800+ Certified Ratings</p>
              </div>
            </div>

            {/* External Link */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-50/80 border border-slate-200/60 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100/80 hover:border-slate-300 transition-all duration-300"
            >
              <span>Read all 1,200+ verified clinic reviews on Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientReviews;

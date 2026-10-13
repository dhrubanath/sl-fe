/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Sparkles, ArrowRight, Star, Heart, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-gradient-to-b from-[#FFF8F3] via-[#F8E6E8]/40 to-[#FFF8F3]"
    >
      {/* Decorative ambient aura */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#B76E79]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#3B1F3F]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, subtext, location badge, buttons */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8E6E8] border border-[#B76E79]/30 text-[#3B1F3F] text-xs font-semibold tracking-wide shadow-sm mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
              <MapPin className="w-3.5 h-3.5 text-[#B76E79] fill-current" />
              <span>{SALON_INFO.location}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]" />
              <span className="text-[#B76E79] font-medium">Unisex Beauty &amp; Studio</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#3B1F3F] leading-[1.12] tracking-tight mb-6">
              Stunning Loka <br />
              <span className="italic font-normal text-[#B76E79]">
                Unisex Salon
              </span>
            </h1>

            {/* Subtext Tagline */}
            <p className="text-base sm:text-lg text-[#242226]/85 max-w-xl leading-relaxed mb-8 font-normal">
              Step into your ultimate radiance with expert hair styling, couture bridal makeup, and rejuvenating skincare meticulously personalized for every occasion and all genders.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => scrollToSection('pricing')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3B1F3F] text-[#FFF8F3] hover:bg-[#522b57] font-medium text-sm transition-all duration-300 shadow-lg shadow-[#3B1F3F]/20 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
              >
                <span>Get Gorgeous</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#B76E79]" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#3B1F3F] border border-[#B76E79]/40 hover:border-[#B76E79] font-medium text-sm transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Contact Now</span>
              </button>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#B76E79] text-white hover:bg-[#a05a65] font-medium text-sm transition-all duration-300 shadow-md shadow-[#B76E79]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Value markers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#B76E79]/20 w-full max-w-lg text-xs text-[#242226]/75">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B76E79] flex-shrink-0" />
                <span className="font-medium">Cruelty-free cosmetics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B76E79] flex-shrink-0" />
                <span className="font-medium">Master bridal artists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B76E79] flex-shrink-0" />
                <span className="font-medium">Sterilized &amp; hygienic</span>
              </div>
            </div>

          </div>

          {/* Right Column: Large woman image with bright makeup and bold eyeliner */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Frame & Shadow Accent */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer soft decorative aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#B76E79]/30 via-[#F8E6E8] to-[#3B1F3F]/15 rounded-3xl transform rotate-2 blur-sm -z-10" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85"
                  alt="Woman with bright makeup and bold eyeliner at Stunning Loka Unisex Salon"
                  className="w-full h-[460px] sm:h-[540px] lg:h-[580px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F3F]/80 via-transparent to-transparent opacity-80" />

                {/* Floating pill badge overlay 1: Rating */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#F8E6E8] flex items-center gap-2">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-[#3B1F3F]">4.9 / 5.0</p>
                    <p className="text-[10px] text-gray-500 font-medium">BTM Layout Favorite</p>
                  </div>
                </div>

                {/* Floating pill badge overlay 2: Bridal & Salon Specialist */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[#F8E6E8] flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#B76E79] text-xs font-semibold mb-0.5">
                      <Sparkles className="w-3.5 h-3.5 fill-current" />
                      <span>Signature Glamour</span>
                    </div>
                    <p className="font-serif text-sm sm:text-base font-bold text-[#3B1F3F]">
                      Bridal, Editorial &amp; Unisex Styling
                    </p>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="px-3.5 py-2 text-xs font-medium bg-[#3B1F3F] text-white rounded-lg hover:bg-[#B76E79] transition-colors cursor-pointer"
                  >
                    Reserve
                  </button>
                </div>
              </div>

              {/* Floating icon badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#B76E79] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce duration-1000">
                <Heart className="w-6 h-6 fill-current" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

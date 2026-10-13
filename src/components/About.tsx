/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Award, ShieldCheck, HeartHandshake, X, ArrowRight } from 'lucide-react';
import { SALON_STATS } from '../data/salonData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const [showMoreModal, setShowMoreModal] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFF8F3] relative overflow-hidden">
      {/* Background ambient pattern */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F8E6E8] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Studio Imagery Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Salon aesthetic & artistry */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
                  alt="Modern beauty studio and hair styling at Stunning Loka Unisex Salon"
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                />
              </div>

              {/* Overlapping secondary image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
                  alt="Detailed bridal makeup brush artistry"
                  className="w-full h-36 sm:h-44 object-cover"
                />
              </div>

              {/* Decorative badge */}
              <div className="absolute -top-4 -left-4 bg-[#3B1F3F] text-[#FFF8F3] p-4 rounded-xl shadow-lg border border-[#B76E79]/40 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#B76E79]" />
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#F8E6E8]">Bangalore Stylist</p>
                  <p className="font-serif text-sm font-bold">Unisex Atelier</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Content, Warm Intro, Stats & CTA */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B76E79] mb-3">
              <span className="w-8 h-[2px] bg-[#B76E79]" />
              <span>About Our Studio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1F3F] mb-6 leading-tight">
              Welcome To My Beauty Studio
            </h2>

            {/* Warm 2-3 sentence intro about studio's expertise in bridal, party and fashion makeup, hair and skin care */}
            <p className="text-[#242226]/85 text-base sm:text-lg leading-relaxed mb-4">
              At Stunning Loka Unisex Salon, we believe that true elegance is an authentic celebration of who you are. With dedicated expertise in royal bridal transformations, high-octane party glam, editorial fashion aesthetics, and clinical skincare rejuvenation, our sanctuary offers bespoke grooming for every individual.
            </p>

            <p className="text-[#242226]/75 text-sm sm:text-base leading-relaxed mb-8">
              Nestled in BTM Layout 2nd Stage, Bangalore, our certified artists combine international product standards, meticulous hygiene protocols, and attentive listening to deliver looks that turn heads and endure flawlessly.
            </p>

            {/* 3 Stat Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full py-6 border-y border-[#B76E79]/20 mb-8">
              {SALON_STATS.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B1F3F] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#B76E79] mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-gray-500 hidden sm:block">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions: "Know More" button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowMoreModal(true)}
                className="px-7 py-3 rounded-full bg-[#3B1F3F] text-white hover:bg-[#522b57] text-sm font-medium transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 text-[#B76E79]" />
              </button>

              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3 rounded-full border border-[#B76E79] text-[#3B1F3F] hover:bg-[#F8E6E8] text-sm font-medium transition-colors cursor-pointer"
              >
                <span>Schedule Consultation</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* "Know More" Interactive Modal */}
      {showMoreModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FFF8F3] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#B76E79]/30 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowMoreModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#3B1F3F] rounded-full hover:bg-[#F8E6E8] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#B76E79] mb-2">
              <Award className="w-4 h-4" />
              <span>Studio Philosophy &amp; Hygiene</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#3B1F3F] mb-4">
              The Stunning Loka Experience
            </h3>

            <p className="text-sm text-[#242226]/80 leading-relaxed mb-4">
              Founded over a decade ago in Bangalore, our ethos is built on personalized consultations rather than one-size-fits-all treatments. Whether you are stepping in for a precision textured haircut, a pre-wedding skin glow ritual, or high-definition bridal makeup, our artists treat every appointment as a personalized artwork.
            </p>

            <div className="space-y-3 mb-6 text-xs text-[#242226]/85">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#F8E6E8]">
                <ShieldCheck className="w-5 h-5 text-[#B76E79] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#3B1F3F]">Medical-Grade Sterilization</p>
                  <p className="text-gray-500">All combs, scissors, and applicators undergo UV sterilization between clients.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#F8E6E8]">
                <HeartHandshake className="w-5 h-5 text-[#B76E79] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#3B1F3F]">Inclusive Unisex Craft</p>
                  <p className="text-gray-500">Equal mastery in men’s grooming, fades, beard care, and women’s couture styling.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#F8E6E8]">
                <Sparkles className="w-5 h-5 text-[#B76E79] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#3B1F3F]">Premium International Brands</p>
                  <p className="text-gray-500">Exclusively using L’Oréal Professionnel, MAC, Kryolan, Huda Beauty &amp; Dermalogica.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowMoreModal(false)}
                className="px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowMoreModal(false);
                  onOpenBooking();
                }}
                className="px-5 py-2 text-xs font-semibold bg-[#B76E79] text-white rounded-lg hover:bg-[#a05a65]"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

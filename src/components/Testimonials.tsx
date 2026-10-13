/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { TESTIMONIALS, REVIEW_PLATFORMS } from '../data/salonData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-[#FFF8F3] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F8E6E8] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B76E79] mb-3">
            <span className="w-6 h-[2px] bg-[#B76E79]" />
            <span>Words Of Praise</span>
            <span className="w-6 h-[2px] bg-[#B76E79]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1F3F] mb-4">
            Cherished By Our Clients
          </h2>

          <p className="text-base sm:text-lg text-[#242226]/80">
            Real stories from brides, pageantry titleholders, and everyday connoisseurs who trust Stunning Loka with their crowning glory.
          </p>
        </div>

        {/* Carousel Container: Bridal image on one side, quote card on the other */}
        <div
          className="bg-white rounded-3xl shadow-xl border border-[#F8E6E8] overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Side 1: Large Bridal Image */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=900&q=80"
              alt="Bridal client at Stunning Loka Unisex Salon"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F3F]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[#B76E79] text-white text-[11px] font-semibold tracking-wider uppercase mb-2">
                Bridal Elegance
              </span>
              <p className="font-serif text-lg font-bold">
                South Indian &amp; Contemporary Bridal Specialist
              </p>
              <p className="text-xs text-[#F8E6E8] font-light">
                BTM Layout 2nd Stage, Bangalore
              </p>
            </div>
          </div>

          {/* Side 2: Quote Card & Carousel Navigation */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative bg-gradient-to-br from-white to-[#FFF8F3]">
            {/* Decorative quotation icon */}
            <Quote className="w-16 h-16 text-[#B76E79]/20 absolute top-8 right-8 pointer-events-none" />

            {/* Stars Rating */}
            <div className="flex items-center gap-1 text-amber-400 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-[#3B1F3F]">
                5.0 Verified Review
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-2xl text-[#3B1F3F] leading-relaxed mb-8 italic">
              "{current.quote}"
            </blockquote>

            {/* Author details & navigation */}
            <div className="pt-6 border-t border-[#F8E6E8] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#B76E79] shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#3B1F3F]">
                    {current.author}
                  </h4>
                  <p className="text-xs font-semibold text-[#B76E79]">
                    {current.title}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {current.location}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 mr-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === currentIndex
                          ? 'w-6 bg-[#B76E79]'
                          : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-[#B76E79]/40 hover:bg-[#F8E6E8] text-[#3B1F3F] transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-[#3B1F3F] hover:bg-[#522b57] text-white transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Row of "Review Us" Buttons: Yelp, Google, Facebook, Foursquare */}
        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#B76E79] font-bold mb-4">
            Loved your makeover? Leave us a review on:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {REVIEW_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#F8E6E8] hover:border-[#B76E79] shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="text-left">
                  <div className="text-xs font-bold text-[#3B1F3F] group-hover:text-[#B76E79] transition-colors">
                    {platform.name}
                  </div>
                  <div className="text-[11px] text-amber-600 font-semibold">
                    {platform.rating}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {platform.reviewsCount}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#B76E79] transition-colors" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

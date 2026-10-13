/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Calendar, Tag, Clock } from 'lucide-react';

interface OfferBannerProps {
  onOpenBooking: () => void;
  currency?: string;
}

export const OfferBanner: React.FC<OfferBannerProps> = ({
  onOpenBooking,
  currency = '₹',
}) => {
  const priceDisplay = `${currency}1,899`;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-r from-[#B76E79] via-[#8d4753] to-[#3B1F3F] text-white shadow-2xl">
      {/* Decorative background glow & shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          {/* Left / Center Info */}
          <div className="max-w-3xl">
            {/* SALE style badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#8d4753] font-bold text-xs uppercase tracking-wider shadow-md mb-5 animate-pulse">
              <Tag className="w-3.5 h-3.5 fill-current" />
              <span>LIMITED TIME SALE · EXCLUSIVE SAVINGS</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-[#FFF8F3] drop-shadow-sm">
              Book Your Appointment Now And Get 25% Off
            </h2>

            {/* Text description */}
            <p className="text-base sm:text-xl text-[#F8E6E8] font-light leading-relaxed mb-4">
              Awesome Monsoon Sale - 25% OFF On All Professional Make Up From Only <span className="font-bold underline decoration-[#FFF8F3]/60 underline-offset-4 text-white">{priceDisplay}</span>
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#F8E6E8]/90 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-300" />
                Valid for appointments booked this week
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Includes complimentary skin glow consultation
              </span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#FFF8F3] hover:bg-white text-[#3B1F3F] font-bold text-sm sm:text-base shadow-2xl hover:shadow-[#FFF8F3]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 group cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#B76E79] group-hover:scale-110 transition-transform" />
              <span>Book An Appointment</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

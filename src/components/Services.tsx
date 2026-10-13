/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Bell,
  Sparkles,
  Camera,
  Scissors,
  Check,
  ArrowRight,
  Flame,
} from 'lucide-react';
import { OCCASION_SERVICES, OccasionService } from '../data/salonData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: OccasionService['iconName']) => {
    switch (iconName) {
      case 'wedding':
        return <Bell className="w-5 h-5 text-[#B76E79]" />;
      case 'party':
        return <Sparkles className="w-5 h-5 text-[#B76E79]" />;
      case 'fashion':
        return <Scissors className="w-5 h-5 text-[#B76E79]" />;
      case 'camera':
        return <Camera className="w-5 h-5 text-[#B76E79]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B76E79]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B76E79] mb-3">
            <span className="w-6 h-[2px] bg-[#B76E79]" />
            <span>Signature Experiences</span>
            <span className="w-6 h-[2px] bg-[#B76E79]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1F3F] mb-4">
            Services For Every Occasion
          </h2>

          <p className="text-base sm:text-lg text-[#242226]/80">
            Special services for weddings, parties and shoots. Tailored consultations, luxury cosmetics, and unforgettable impressions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OCCASION_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F8E6E8] flex flex-col hover:-translate-y-1.5"
            >
              {/* Image with subtle zoom on hover */}
              <div className="relative h-56 overflow-hidden bg-[#F8E6E8]">
                <img
                  src={service.image}
                  alt={`${service.title} at Stunning Loka Unisex Salon`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 left-3 bg-[#3B1F3F]/90 backdrop-blur-sm text-[#F8E6E8] px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide flex items-center gap-1.5 border border-[#B76E79]/30">
                  <Flame className="w-3 h-3 text-[#B76E79]" />
                  <span>{service.badge}</span>
                </div>

                {/* Floating Icon Circle */}
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#F8E6E8] group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#3B1F3F] mb-2 group-hover:text-[#B76E79] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#242226]/80 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6 border-t border-[#F8E6E8] pt-4 text-xs text-[#242226]/85">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B76E79] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Trigger */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F8E6E8] hover:bg-[#B76E79] text-[#3B1F3F] hover:text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

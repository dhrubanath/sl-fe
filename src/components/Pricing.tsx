/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scissors, Sparkles, Palette, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { PRICING_CATEGORIES } from '../data/salonData';

// Currency symbol constant set to Indian Rupee (₹) based on general Indian market:
export const PRICING_CURRENCY_SYMBOL = '₹';

interface PricingProps {
  currency?: string;
  onSelectService: (serviceName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  currency = PRICING_CURRENCY_SYMBOL,
  onSelectService,
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'hair-cuts':
        return <Scissors className="w-5 h-5 text-[#B76E79]" />;
      case 'make-up':
        return <Sparkles className="w-5 h-5 text-[#B76E79]" />;
      case 'hair-color':
        return <Palette className="w-5 h-5 text-[#B76E79]" />;
      case 'skin-care':
        return <ShieldCheck className="w-5 h-5 text-[#B76E79]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B76E79]" />;
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FFF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B76E79] mb-3">
            <span className="w-6 h-[2px] bg-[#B76E79]" />
            <span>Transparent Menu</span>
            <span className="w-6 h-[2px] bg-[#B76E79]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1F3F] mb-4">
            Priced Beauty Solutions
          </h2>

          <p className="text-base sm:text-lg text-[#242226]/80">
            Tailored beauty packages, honest pricing, and master-level artistry. All prices include complimentary consult and styling polish.
          </p>
        </div>

        {/* 4 Category Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F8E6E8] flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              {/* Card Header */}
              <div className="p-6 bg-gradient-to-b from-[#F8E6E8]/40 to-transparent border-b border-[#F8E6E8]">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-[#F8E6E8] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-[#B76E79] uppercase">
                    Unisex Menu
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#3B1F3F]">
                  {category.category}
                </h3>
                <p className="text-xs text-[#242226]/70 mt-1">
                  {category.subtitle}
                </p>
              </div>

              {/* Service Items List */}
              <div className="p-6 flex-1 divide-y divide-[#F8E6E8]">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 first:pt-0 last:pb-0 flex flex-col group/item transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="text-sm font-semibold text-[#242226] group-hover/item:text-[#B76E79] transition-colors">
                        {item.name}
                      </span>
                      <span className="font-serif text-base font-bold text-[#3B1F3F] whitespace-nowrap">
                        {currency}{item.price.toLocaleString('en-IN')}{item.suffix || ''}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#242226]/70">
                      <span className="line-clamp-2 pr-2">{item.description}</span>
                      <button
                        type="button"
                        onClick={() => onSelectService(`${category.category}: ${item.name}`)}
                        className="text-[#B76E79] hover:text-[#3B1F3F] font-semibold shrink-0 cursor-pointer hover:underline"
                        title={`Select ${item.name}`}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0 bg-white">
                <button
                  type="button"
                  onClick={() => onSelectService(category.category)}
                  className="w-full py-3 rounded-xl bg-[#3B1F3F] hover:bg-[#522b57] text-[#FFF8F3] text-xs font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm"
                >
                  <span>Book {category.category}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B76E79] transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing note */}
        <div className="mt-12 text-center text-xs text-[#242226]/70 flex items-center justify-center gap-2">
          <Heart className="w-3.5 h-3.5 text-[#B76E79] fill-current" />
          <span>Bridal packages, group bookings, and custom extensions available upon personalized consultation.</span>
        </div>

      </div>
    </section>
  );
};

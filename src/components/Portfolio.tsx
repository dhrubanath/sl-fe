/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Maximize2, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';
import { LightboxModal } from './LightboxModal';

interface PortfolioProps {
  onSelectService: (serviceName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Bridal', 'Hair', 'Party', 'Skincare'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FFF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B76E79] mb-3">
            <span className="w-6 h-[2px] bg-[#B76E79]" />
            <span>Our Masterpieces</span>
            <span className="w-6 h-[2px] bg-[#B76E79]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1F3F] mb-4">
            Portfolio &amp; Beauty Gallery
          </h2>

          <p className="text-base sm:text-lg text-[#242226]/80">
            A glimpse into real transformations, bridal glow moments, hair color craft, and luminous skin treatments at Stunning Loka.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#3B1F3F] text-[#FFF8F3] shadow-md shadow-[#3B1F3F]/20'
                  : 'bg-white text-[#242226]/80 hover:bg-[#F8E6E8] hover:text-[#3B1F3F] border border-[#F8E6E8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid of 8 beauty images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-[#F8E6E8] aspect-[4/5] flex flex-col justify-end"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F3F]/90 via-[#3B1F3F]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Top pill tag */}
              <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm text-[#3B1F3F] px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider">
                {item.category}
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="relative z-10 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif text-lg font-bold text-white mb-1 leading-snug drop-shadow-sm">
                  {item.title}
                </p>
                <p className="text-xs text-[#F8E6E8] line-clamp-2 font-light">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5 text-[#B76E79]" />
                  <span>Click to expand &amp; inspect</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        allItems={filteredItems}
        onClose={() => setActiveItem(null)}
        onNavigate={(newItem) => setActiveItem(newItem)}
        onBookLook={onSelectService}
      />
    </section>
  );
};

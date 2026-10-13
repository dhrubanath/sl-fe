/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../data/salonData';

interface LightboxModalProps {
  item: GalleryItem | null;
  allItems: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
  onBookLook: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  allItems,
  onClose,
  onNavigate,
  onBookLook,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, allItems]);

  if (!item) return null;

  const currentIndex = allItems.findIndex((it) => it.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
    onNavigate(allItems[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allItems.length;
    onNavigate(allItems[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-4xl w-full bg-[#FFF8F3] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#B76E79]/30 animate-in zoom-in-95 duration-200 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/70 text-[#3B1F3F] hover:bg-white shadow-lg transition-all cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-3 md:right-[340px] top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/70 text-[#3B1F3F] hover:bg-white shadow-lg transition-all cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[500px] w-full object-contain"
          />
        </div>

        {/* Caption & Booking Side Info */}
        <div className="w-full md:w-80 p-6 sm:p-8 flex flex-col justify-between bg-[#FFF8F3] overflow-y-auto">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F8E6E8] text-[#B76E79] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3 fill-current" />
              <span>{item.category} Craft</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#3B1F3F] mb-3 leading-snug">
              {item.title}
            </h3>

            <p className="text-sm text-[#242226]/80 leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="space-y-2 text-xs text-[#242226]/70 border-t border-[#F8E6E8] pt-4">
              <p>· Photo from Stunning Loka Portfolio</p>
              <p>· Available for unisex bookings &amp; bridal trials</p>
              <p>· Image {currentIndex + 1} of {allItems.length}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#F8E6E8] mt-6">
            <button
              onClick={() => {
                onClose();
                onBookLook(`Inspiration: ${item.title}`);
              }}
              className="w-full py-3 rounded-xl bg-[#B76E79] hover:bg-[#a05a65] text-white font-semibold text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request This Look</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

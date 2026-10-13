/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#3B1F3F] text-white hover:bg-[#522b57] shadow-xl border border-white/20 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 cursor-pointer active:scale-95 animate-in fade-in slide-in-from-bottom-2"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-[#F8E6E8]" />
        </button>
      )}

      {/* Floating WhatsApp button */}
      <a
        href={SALON_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all duration-300 active:scale-95"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp: +91 9353239723"
      >
        {/* Pulse glow effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />

        {/* Hover Tooltip on desktop */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#3B1F3F] text-[#FFF8F3] text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#B76E79]/30">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
};

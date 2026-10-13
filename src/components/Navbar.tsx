/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#3B1F3F]/95 backdrop-blur-md shadow-lg shadow-[#3B1F3F]/10 py-3 text-[#FFF8F3]'
            : 'bg-[#FFF8F3]/85 backdrop-blur-sm py-4 text-[#242226]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span
                className={`p-2 rounded-full transition-transform duration-300 group-hover:rotate-12 ${
                  isScrolled
                    ? 'bg-[#B76E79]/20 text-[#B76E79]'
                    : 'bg-[#F8E6E8] text-[#B76E79]'
                }`}
              >
                <Sparkles className="w-5 h-5 fill-current" />
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                  Stunning Loka
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-medium ${
                    isScrolled ? 'text-[#F8E6E8]/70' : 'text-[#B76E79]'
                  }`}
                >
                  Unisex Salon · BTM Layout
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-[#B76E79] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B76E79] hover:after:w-full after:transition-all after:duration-300 ${
                    isScrolled
                      ? 'text-[#FFF8F3]/90 hover:text-white'
                      : 'text-[#242226] hover:text-[#B76E79]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: Call Now & Book Modal */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Call Now button */}
              <a
                href={`tel:${SALON_INFO.primaryPhone}`}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 ${
                  isScrolled
                    ? 'border-[#B76E79] text-[#FFF8F3] hover:bg-[#B76E79]'
                    : 'border-[#3B1F3F] text-[#3B1F3F] hover:bg-[#3B1F3F] hover:text-[#FFF8F3]'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now: 9353239723</span>
              </a>

              {/* Book Appointment CTA */}
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-[#B76E79] text-white shadow-md hover:bg-[#a05a65] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Visit</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-white hover:bg-white/10'
                    : 'text-[#3B1F3F] hover:bg-[#F8E6E8]'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#3B1F3F] text-[#FFF8F3] border-t border-[#B76E79]/20 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2 text-xs text-[#B76E79] mb-4 pb-2 border-b border-white/10">
              <MapPin className="w-3.5 h-3.5" />
              <span>BTM Layout 2nd Stage, Bangalore</span>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium py-2 px-1 hover:text-[#B76E79] border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`tel:${SALON_INFO.primaryPhone}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#B76E79] text-[#FFF8F3] font-medium text-sm hover:bg-[#B76E79]/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B76E79]" />
                <span>Call Now: 9353239723</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#B76E79] text-white font-medium text-sm shadow-md hover:bg-[#a05a65] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book An Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

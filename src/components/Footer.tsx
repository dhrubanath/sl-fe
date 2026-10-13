/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Send,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError('Please provide a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3B1F3F] text-[#FFF8F3] pt-16 pb-10 border-t border-[#B76E79]/20 relative overflow-hidden">
      {/* Decorative aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B76E79]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Logo & Salon summary */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-full bg-[#B76E79]/20 text-[#B76E79]">
                <Sparkles className="w-5 h-5 fill-current" />
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Stunning Loka
              </span>
            </div>

            <p className="text-sm text-[#F8E6E8]/80 leading-relaxed mb-6 max-w-sm">
              Stunning Loka Unisex Salon is your sanctuary of bridal glamour, precision haircutting, luminous color, and dermatological skin nourishment located at BTM Layout 2nd Stage, Bangalore.
            </p>

            {/* Social Links: Instagram, Facebook, YouTube, X */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B76E79] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B76E79] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B76E79] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B76E79] text-white flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-[#F8E6E8] mb-4 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <button
                  onClick={() => scrollTo('#home')}
                  className="hover:text-[#B76E79] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-[#B76E79] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#services')}
                  className="hover:text-[#B76E79] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#pricing')}
                  className="hover:text-[#B76E79] transition-colors cursor-pointer"
                >
                  Pricing Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#portfolio')}
                  className="hover:text-[#B76E79] transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-[#B76E79] transition-colors cursor-pointer"
                >
                  Contact &amp; Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details Repeated */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#F8E6E8] mb-4 uppercase tracking-wider text-xs">
              Studio Location
            </h4>
            <ul className="space-y-3 text-xs text-white/80 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B76E79] flex-shrink-0 mt-0.5" />
                <span>{SALON_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B76E79] flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9353239723" className="hover:text-[#B76E79]">
                    +91 93532 39723
                  </a>
                  <a href="tel:9180275370" className="hover:text-[#B76E79]">
                    +91 80 2753 7000 (9180275370)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B76E79] flex-shrink-0" />
                <a
                  href={`mailto:${SALON_INFO.email}`}
                  className="hover:text-[#B76E79] break-all"
                >
                  {SALON_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe For Offers */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#F8E6E8] mb-4 uppercase tracking-wider text-xs">
              Subscribe For Offers
            </h4>
            <p className="text-xs text-[#F8E6E8]/75 mb-4 leading-relaxed">
              Be the first to receive seasonal 25% discount vouchers, bridal package alerts, and beauty tips.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-white/10 border border-[#B76E79]/40 text-xs text-[#F8E6E8] flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-[#B76E79]" />
                <span>You're subscribed! Keep an eye on your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#B76E79] text-white hover:bg-[#a05a65] transition-colors cursor-pointer"
                    aria-label="Submit newsletter subscription"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-red-300">{error}</p>}
                <p className="text-[10px] text-white/50">
                  Instant monsoon discounts apply upon subscription.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8E6E8]/70">
          <p>Copyright © 2026 Stunning Loka Unisex Salon. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#B76E79] fill-current" />
            <span>in BTM Layout, Bangalore</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

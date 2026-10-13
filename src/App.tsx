/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { OfferBanner } from './components/OfferBanner';
import { Pricing } from './components/Pricing';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3] text-[#242226] font-sans selection:bg-[#B76E79]/20 selection:text-[#3B1F3F]">
      {/* Sticky Responsive Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About Section */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Services For Every Occasion */}
        <Services
          onSelectService={(serviceName) => handleOpenBooking(serviceName)}
        />

        {/* 4. Offer Banner (Monsoon Sale 25% Off) */}
        <OfferBanner onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Priced Beauty Solutions (Pricing Grid) */}
        <Pricing
          onSelectService={(serviceName) => handleOpenBooking(serviceName)}
        />

        {/* 6. Portfolio / Gallery with Lightbox */}
        <Portfolio
          onSelectService={(serviceName) => handleOpenBooking(serviceName)}
        />

        {/* 7. Testimonials Carousel & Review Links */}
        <Testimonials />

        {/* 8. Contact Section with Map & Form */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Extra Feature: Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />

      {/* Extra Feature: Floating WhatsApp & Back to Top */}
      <FloatingActions />
    </div>
  );
}

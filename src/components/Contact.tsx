/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Bridal & Wedding Makeup',
    date: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate front-end submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const servicesList = [
    'Bridal & Wedding Makeup',
    'Party & Cocktail Glamour',
    'Fashion & Editorial Makeup',
    'Photo-Shoot HD Makeup',
    "Women's & Men's Haircuts",
    "Hair Color & Balayage",
    'Facials & Skin Rejuvenation',
    'General Salon Consultation',
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFF8F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B76E79] mb-3">
            <span className="w-6 h-[2px] bg-[#B76E79]" />
            <span>Connect With Us</span>
            <span className="w-6 h-[2px] bg-[#B76E79]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1F3F] mb-4">
            Visit Our Studio Or Say Hello
          </h2>

          <p className="text-base sm:text-lg text-[#242226]/80">
            Located in BTM Layout 2nd Stage, Bangalore. Walk-ins and appointments are both warmly embraced.
          </p>
        </div>

        {/* Main Grid: Left Details vs Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#F8E6E8] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8E6E8] text-[#B76E79] text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Salon Headquarters</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#3B1F3F] mb-6">
                Stunning Loka Unisex Salon
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#F8E6E8]">
                <div className="w-10 h-10 rounded-xl bg-[#F8E6E8] text-[#B76E79] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1">
                    Address
                  </p>
                  <p className="text-sm text-[#242226]/80 leading-relaxed">
                    {SALON_INFO.fullAddress}
                  </p>
                  <a
                    href="https://maps.google.com/?q=No.13,+15th+Main+Rd,+Stage+2,+Mahadeshwara+Nagar,+BTM+Layout+2nd+Stage,+Bengaluru,+Karnataka+560076"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#B76E79] font-semibold mt-2 hover:underline"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#F8E6E8]">
                <div className="w-10 h-10 rounded-xl bg-[#F8E6E8] text-[#B76E79] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1">
                    Direct Phone Lines
                  </p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:9353239723"
                      className="text-sm font-semibold text-[#3B1F3F] hover:text-[#B76E79] transition-colors"
                    >
                      +91 93532 39723 (Primary)
                    </a>
                    <a
                      href="tel:9180275370"
                      className="text-sm font-semibold text-[#3B1F3F] hover:text-[#B76E79] transition-colors"
                    >
                      +91 80 2753 7000 (Desk: 9180275370)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#F8E6E8]">
                <div className="w-10 h-10 rounded-xl bg-[#F8E6E8] text-[#B76E79] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1">
                    Email Inquiry
                  </p>
                  <a
                    href={`mailto:${SALON_INFO.email}`}
                    className="text-sm font-semibold text-[#3B1F3F] hover:text-[#B76E79] transition-colors break-all"
                  >
                    {SALON_INFO.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F8E6E8] text-[#B76E79] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1">
                    Salon Hours
                  </p>
                  <p className="text-sm text-[#242226]/85 font-medium">
                    {SALON_INFO.hours}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                    ● Open 7 Days A Week
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F8E6E8]">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Instantly on WhatsApp (+91 9353239723)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#F8E6E8]">
            {isSuccess ? (
              <div className="py-12 px-4 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#F8E6E8] text-[#B76E79] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3B1F3F] mb-2">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-[#242226]/80 max-w-md mx-auto mb-6">
                  We have received your message regarding <strong>{formData.service}</strong>. Our senior stylist will get in touch with you shortly at <strong>{formData.phone}</strong> to confirm your slot.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: 'Bridal & Wedding Makeup',
                        date: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full border border-[#B76E79] text-[#3B1F3F] text-xs font-semibold hover:bg-[#F8E6E8] transition-colors"
                  >
                    Send Another Request
                  </button>
                  <a
                    href={SALON_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold shadow hover:bg-[#20ba5a] transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp Us Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-[#3B1F3F] mb-1">
                    Book A Slot Or Send An Inquiry
                  </h3>
                  <p className="text-xs text-[#242226]/70">
                    Fill out the form below and our studio coordinator will verify availability.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meera Sharma"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#F8E6E8] bg-[#FFF8F3]/50'
                    } focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-sm text-[#242226]`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone & Date grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-400 bg-red-50/30' : 'border-[#F8E6E8] bg-[#FFF8F3]/50'
                      } focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-sm text-[#242226]`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#F8E6E8] bg-[#FFF8F3]/50 focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-sm text-[#242226]"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5">
                    Select Desired Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F8E6E8] bg-[#FFF8F3]/50 focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-sm text-[#242226]"
                  >
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5">
                    Special Requests or Questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event, wedding date, preferred time slot, or skin sensitivity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#F8E6E8] bg-[#FFF8F3]/50 focus:outline-none focus:ring-2 focus:ring-[#B76E79] text-sm text-[#242226]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#3B1F3F] hover:bg-[#522b57] text-[#FFF8F3] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>Submitting Details...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#B76E79]" />
                      <span>Send Appointment Request</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-gray-500 text-center">
                  We respect your privacy. No spam. You will receive a direct WhatsApp/Call confirmation.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Embedded Google Map iframe for the BTM Layout 2nd Stage, Bengaluru address */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-[#F8E6E8]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 px-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#B76E79] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Google Maps Location</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#3B1F3F]">
                Find Us in BTM Layout 2nd Stage
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=No.13,+15th+Main+Rd,+Stage+2,+Mahadeshwara+Nagar,+BTM+Layout+2nd+Stage,+Bengaluru,+Karnataka+560076"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F8E6E8] text-[#3B1F3F] text-xs font-semibold hover:bg-[#B76E79] hover:text-white transition-colors"
            >
              <span>Get Driving Directions</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#F8E6E8] relative">
            <iframe
              src={SALON_INFO.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stunning Loka Unisex Salon BTM Layout Bangalore Map"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

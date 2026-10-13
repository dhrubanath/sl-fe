/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { SALON_INFO, PRICING_CATEGORIES } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Wedding Makeup',
    date: '',
    timeSlot: '11:00 AM',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Flattened service list for easy choice
  const allServices = [
    'Wedding Makeup (Bridal Glamour)',
    'Party Makeup (Cocktail Glam)',
    'Fashion Makeup (Editorial / Runway)',
    'Photo-Shoot Makeup (HD Studio)',
    ...PRICING_CATEGORIES.flatMap((c) =>
      c.items.map((i) => `${c.category} - ${i.name}`)
    ),
  ];

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) {
      errs.date = 'Please pick a preferred date';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: 'Wedding Makeup',
      date: '',
      timeSlot: '11:00 AM',
      notes: '',
    });
    onClose();
  };

  // Pre-generate WhatsApp message for immediate confirmation
  const whatsappBookingMessage = encodeURIComponent(
    `Hello Stunning Loka Salon! I would like to confirm my appointment booking:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.timeSlot}\nNotes: ${formData.notes || 'None'}`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-xl w-full bg-[#FFF8F3] rounded-3xl shadow-2xl border border-[#B76E79]/30 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#3B1F3F] text-[#FFF8F3] p-5 sm:p-6 relative flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#B76E79] uppercase font-semibold tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Priority Studio Appointment</span>
            </div>
            <h3 className="font-serif text-2xl font-bold">
              Book Your Salon Experience
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#F8E6E8] text-[#B76E79] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-[#3B1F3F] mb-2">
                Booking Request Received!
              </h4>

              <p className="text-sm text-[#242226]/80 max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.name}</strong>. Your requested session for{' '}
                <strong>{formData.service}</strong> on{' '}
                <strong>{formData.date}</strong> at{' '}
                <strong>{formData.timeSlot}</strong> has been logged.
              </p>

              <div className="bg-white rounded-2xl p-4 border border-[#F8E6E8] text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
                <p className="text-[#3B1F3F] font-bold">Booking Summary:</p>
                <p>· Client: {formData.name} ({formData.phone})</p>
                <p>· Service: {formData.service}</p>
                <p>· Slot: {formData.date} at {formData.timeSlot}</p>
                <p>· Location: BTM Layout 2nd Stage, Bangalore</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919353239723?text=${whatsappBookingMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-semibold shadow hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#3B1F3F] text-white text-xs font-semibold hover:bg-[#522b57] transition-all"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#B76E79]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#F8E6E8] bg-white'
                    } text-sm focus:outline-none focus:ring-2 focus:ring-[#B76E79]`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#B76E79]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9353239723"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.phone ? 'border-red-400 bg-red-50/30' : 'border-[#F8E6E8] bg-white'
                    } text-sm focus:outline-none focus:ring-2 focus:ring-[#B76E79]`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
                  <span>Choose Service *</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8E6E8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                >
                  {allServices.map((svc, i) => (
                    <option key={i} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B76E79]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => {
                      setFormData({ ...formData, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.date ? 'border-red-400 bg-red-50/30' : 'border-[#F8E6E8] bg-white'
                    } text-sm focus:outline-none focus:ring-2 focus:ring-[#B76E79]`}
                  />
                  {errors.date && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B76E79]" />
                    <span>Time Slot *</span>
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, timeSlot: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#F8E6E8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F3F] mb-1.5">
                  Special Notes / Styling Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention hair length, bridal trial requests, or skin sensitivities..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-[#F8E6E8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                />
              </div>

              {/* 25% Monsoon Discount Callout in modal */}
              <div className="p-3 rounded-xl bg-[#F8E6E8] border border-[#B76E79]/30 text-[11px] text-[#3B1F3F] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B76E79] flex-shrink-0" />
                <span>25% Monsoon Discount will be applied automatically at billing for professional makeup!</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#3B1F3F] hover:bg-[#522b57] text-[#FFF8F3] font-semibold text-sm transition-all shadow-md cursor-pointer active:scale-[0.99]"
                >
                  Confirm Appointment Request
                </button>
              </div>

              <p className="text-[10px] text-gray-500 text-center">
                Need immediate booking for today? Call our front desk at{' '}
                <a href={`tel:${SALON_INFO.primaryPhone}`} className="text-[#B76E79] font-bold">
                  {SALON_INFO.primaryPhone}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

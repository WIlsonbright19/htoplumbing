import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faArrowRight,
  faCheckCircle,
  faMapPin,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import confetti from 'canvas-confetti';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialService = 'Radiant Floor Heating',
}) => {
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedProperty, setSelectedProperty] = useState('Single Family Home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    projectNotes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const googleMapsUrl =
    'https://maps.google.com/?cid=15790932422186165502&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA';

  const serviceOptions = [
    'Radiant Floor Heating',
    'Boiler Service & Replacement',
    'Custom Plumbing Remodel',
    'ADU & New Construction',
  ];

  const propertyOptions = [
    'Single Family Home',
    'Historic Victorian / Craftsman',
    'ADU / Secondary Unit',
    'Commercial / Multi-Unit',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setSubmitted(true);
    confetti({
      particleCount: 45,
      spread: 60,
      colors: ['#d65f3d', '#121417', '#f2ddd3'],
    });
  };

  return (
    <section id="consultation" className="py-24 md:py-36 px-6 sm:px-10 lg:px-12 border-t border-[#e5e7eb] relative bg-[#f7f5f0]">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono-code text-[#d65f3d] uppercase tracking-widest">
            [04] PROJECT CONSULTATION
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#121417] leading-[1.2] font-medium">
            Request an on-site system estimate.
          </h2>
          <p className="text-base font-sans-ui text-[#6e6e6e] leading-relaxed">
            Serving Alameda, Oakland, Berkeley, San Francisco, and the East Bay. Direct evaluation by a licensed hydronic & plumbing master.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 sm:p-10 lg:p-12 shadow-xs">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10 space-y-8"
            >
              <div className="w-12 h-12 rounded-full bg-[#f2ddd3] text-[#d65f3d] flex items-center justify-center mx-auto">
                <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-3xl text-[#121417] font-medium">
                  Estimate Request Received
                </h3>
                <p className="text-sm font-sans-ui text-[#6e6e6e] max-w-md mx-auto">
                  Thank you, {formData.name}. HTO Plumbing & Radiant will review your project details and contact you at <strong className="text-[#121417]">{formData.phone}</strong> within 1 business day.
                </p>
              </div>

              <div className="bg-[#f7f5f0] border border-[#e5e7eb] rounded-[6px] p-6 text-left max-w-md mx-auto space-y-3 text-xs font-sans-ui">
                <div className="flex justify-between border-b border-[#e5e7eb] pb-2">
                  <span className="text-[#6e6e6e]">Service Requested:</span>
                  <span className="font-medium text-[#121417]">{selectedService}</span>
                </div>
                <div className="flex justify-between border-b border-[#e5e7eb] pb-2">
                  <span className="text-[#6e6e6e]">Property Type:</span>
                  <span className="font-medium text-[#121417]">{selectedProperty}</span>
                </div>
                {formData.address && (
                  <div className="flex justify-between">
                    <span className="text-[#6e6e6e]">Location:</span>
                    <span className="font-medium text-[#121417]">{formData.address}</span>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <a
                  href="tel:5108641080"
                  className="inline-flex items-center gap-2 text-sm font-sans-ui text-[#121417] bg-[#f7f5f0] border border-[#121417] px-6 py-3 rounded-[4px] hover:bg-[#ffffff] transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-[#d65f3d]" />
                  <span>Call Direct: (510) 864-1080</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Service Type */}
              <div className="space-y-3">
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#6e6e6e]">
                  1. Select System or Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedService(opt)}
                      className={`px-3.5 py-2.5 rounded-[4px] text-xs font-sans-ui transition-all text-left cursor-pointer border ${
                        selectedService === opt
                          ? 'bg-[#171310] text-[#ffffff] border-[#171310]'
                          : 'bg-[#f7f5f0] text-[#121417] border-[#e5e7eb] hover:border-[#121417]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Property Type */}
              <div className="space-y-3">
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#6e6e6e]">
                  2. Building or Residence Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {propertyOptions.map((prop) => (
                    <button
                      key={prop}
                      type="button"
                      onClick={() => setSelectedProperty(prop)}
                      className={`px-3.5 py-2.5 rounded-[4px] text-xs font-sans-ui transition-all text-left cursor-pointer border ${
                        selectedProperty === prop
                          ? 'bg-[#171310] text-[#ffffff] border-[#171310]'
                          : 'bg-[#f7f5f0] text-[#121417] border-[#e5e7eb] hover:border-[#121417]'
                      }`}
                    >
                      {prop}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#6e6e6e]">
                  3. Contact & Location
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-sans-ui bg-[#f7f5f0] text-[#121417] rounded-[4px] border border-[#e5e7eb] focus:border-[#121417] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-sans-ui bg-[#f7f5f0] text-[#121417] rounded-[4px] border border-[#e5e7eb] focus:border-[#121417] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-sans-ui bg-[#f7f5f0] text-[#121417] rounded-[4px] border border-[#e5e7eb] focus:border-[#121417] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Project Address / City (e.g. Alameda, Berkeley)"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-sans-ui bg-[#f7f5f0] text-[#121417] rounded-[4px] border border-[#e5e7eb] focus:border-[#121417] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Brief project scope, floor square footage, or heating goals..."
                    value={formData.projectNotes}
                    onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-sans-ui bg-[#f7f5f0] text-[#121417] rounded-[4px] border border-[#e5e7eb] focus:border-[#121417] focus:outline-hidden resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono-code text-[#6e6e6e] flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#d65f3d]" />
                  <span>Direct routing to HTO master estimator</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#171310] hover:bg-[#121417]/90 text-[#ffffff] text-sm font-sans-ui px-8 py-3.5 rounded-[4px] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Submit Estimate Request</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Direct Call & Google Maps Verification Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <a
            href="tel:5108641080"
            className="p-6 rounded-[8px] bg-[#ffffff] border border-[#e5e7eb] hover:border-[#121417] transition-all flex items-center justify-between group shadow-xs"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#f7f5f0] border border-[#e5e7eb] flex items-center justify-center text-[#d65f3d]">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <div className="text-xs font-mono-code text-[#6e6e6e]">Direct Dispatch Desk</div>
                <div className="text-base font-sans-ui font-medium text-[#121417]">(510) 864-1080</div>
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#6e6e6e] group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-[8px] bg-[#ffffff] border border-[#e5e7eb] hover:border-[#121417] transition-all flex items-center justify-between group shadow-xs"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#f7f5f0] border border-[#e5e7eb] flex items-center justify-center text-[#d65f3d]">
                <FontAwesomeIcon icon={faMapPin} />
              </div>
              <div>
                <div className="text-xs font-mono-code text-[#6e6e6e]">Google Maps Listing</div>
                <div className="text-base font-sans-ui font-medium text-[#121417]">1173 Broadway, Alameda</div>
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs text-[#6e6e6e] group-hover:text-[#d65f3d] transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

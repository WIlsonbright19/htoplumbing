import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? 'bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#e5e7eb] py-4'
          : 'bg-[#f7f5f0]/85 backdrop-blur-xs py-5 border-b border-[#e5e7eb]/60'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Brand Logo / Monogram (Floated Left) */}
          <a
            href="#hero"
            className="flex items-center group cursor-pointer focus:outline-hidden"
          >
            <span className="font-display text-2xl sm:text-3xl text-[#121417] tracking-tight font-medium">
              HTO
            </span>
          </a>

          {/* Centered Desktop Navigation Links (Visible on large screens) */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-sans-ui text-[#121417] absolute left-1/2 -translate-x-1/2">
            <a
              href="#radiant"
              className="hover:text-[#d65f3d] transition-colors py-1"
            >
              Radiant Heating
            </a>
            <a
              href="#standards"
              className="hover:text-[#d65f3d] transition-colors py-1"
            >
              Standards
            </a>
            <a
              href="#reviews"
              className="hover:text-[#d65f3d] transition-colors py-1"
            >
              Reviews
            </a>
          </nav>

          {/* Right Actions: Phone & Consultation CTA (Visible on large screens) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:5108641080"
              className="text-xs font-mono-code text-[#121417] hover:text-[#d65f3d] transition-colors flex items-center gap-1.5"
            >
              <FontAwesomeIcon icon={faPhone} className="text-[11px] text-[#d65f3d]" />
              <span>(510) 864-1080</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="bg-[#171310] hover:bg-[#121417]/90 active:scale-[0.98] text-[#ffffff] text-[14px] font-sans-ui px-4 py-2 rounded-[4px] border border-transparent transition-all cursor-pointer"
            >
              Request Estimate
            </button>
          </div>

          {/* Mobile & Tablet Menu Trigger (Visible on mobile and tablet) */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:5108641080"
              className="p-2 text-[#d65f3d]"
              aria-label="Call HTO Plumbing"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#121417] hover:text-[#d65f3d] focus:outline-hidden"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#f7f5f0] border-b border-[#e5e7eb] px-6 py-6 space-y-4"
          >
            <a
              href="#radiant"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-sans-ui text-[#121417] py-1"
            >
              Radiant Floor Heating
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-sans-ui text-[#121417] py-1"
            >
              Standards & Engineering
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-sans-ui text-[#121417] py-1"
            >
              Client Reviews
            </a>
            <div className="pt-2 space-y-2">
              <a
                href="tel:5108641080"
                className="w-full bg-[#ffffff] border border-[#121417] text-[#121417] text-sm font-sans-ui py-3 rounded-[4px] text-center block"
              >
                Call (510) 864-1080
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#171310] text-[#ffffff] text-sm font-sans-ui py-3 rounded-[4px] text-center block"
              >
                Request Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

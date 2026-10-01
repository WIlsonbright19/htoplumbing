import React from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import heroRadiantBg from '../assets/images/hto_hero_radiant_1790858063975.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 sm:px-10 lg:px-12 pt-32 pb-24 overflow-hidden"
    >
      {/* Large Visible Architectural Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroRadiantBg}
          alt="Modern Architectural Home with Radiant Floor Heating"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.04]"
        />
        {/* Soft Warm Linen Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f5f0] via-[#f7f5f0]/80 to-[#f7f5f0]/50" />
      </div>

      {/* Hero Content Block */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Oversized Editorial Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[66px] text-[#121417] leading-[1.12] tracking-[-0.02em] font-medium"
        >
          Hydronic radiant heating & custom plumbing for California homes
          <span className="text-[#d65f3d]">.</span>
        </motion.h1>

        {/* Minimal Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg font-sans-ui text-[#121417]/80 max-w-2xl mx-auto leading-relaxed"
        >
          Specialized design, installation, and service of high-efficiency radiant floor systems, condensing boilers, and architectural plumbing across Alameda and the SF Bay Area.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#171310] hover:bg-[#121417]/90 active:scale-[0.98] text-[#ffffff] text-[15px] font-sans-ui px-7 py-3.5 rounded-[4px] border border-transparent transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2.5"
          >
            <span>Request System Consultation</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </button>

          <a
            href="tel:5108641080"
            className="w-full sm:w-auto bg-[#ffffff]/90 hover:bg-[#ffffff] text-[#121417] text-[15px] font-sans-ui px-6 py-3.5 rounded-[4px] border border-[#121417] transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xs text-[#d65f3d]" />
            <span>(510) 864-1080</span>
          </a>
        </motion.div>
      </div>

      {/* Subtle Bottom Grid Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#e5e7eb]" />
    </section>
  );
};

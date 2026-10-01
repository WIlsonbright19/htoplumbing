import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faPhone,
  faMapPin,
  faArrowUpRightFromSquare,
  faClock,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleMapsUrl =
    'https://maps.google.com/?cid=15790932422186165502&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA';

  return (
    <footer className="border-t border-[#e5e7eb] py-16 px-6 sm:px-10 lg:px-12 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-[#121417] font-medium">
                HTO Plumbing & Radiant
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d65f3d]" />
            </div>
            <p className="text-xs font-sans-ui text-[#6e6e6e] leading-relaxed">
              Specialized Hydronic Radiant Floor Heating, High-Efficiency Boilers & Architectural Plumbing.
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs font-mono-code text-[#6e6e6e]">
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[#d65f3d] text-[10px]" />
                <span>CA State Lic #876197</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FontAwesomeIcon icon={faClock} className="text-[#d65f3d] text-[10px]" />
                <span>Mon–Sat: 8:00 AM – 6:00 PM</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs font-sans-ui text-[#121417]">
            <a
              href="tel:5108641080"
              className="hover:text-[#d65f3d] transition-colors flex items-center gap-1.5"
            >
              <FontAwesomeIcon icon={faPhone} className="text-[#d65f3d] text-[11px]" />
              <span className="font-mono-code font-medium">(510) 864-1080</span>
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d65f3d] transition-colors flex items-center gap-1.5"
            >
              <FontAwesomeIcon icon={faMapPin} className="text-[#d65f3d] text-[11px]" />
              <span>1173 Broadway, Alameda, CA 94501</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px] text-[#6e6e6e]" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e5e7eb] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#6e6e6e]">
          <div className="flex flex-wrap items-center gap-3">
            <span>Alameda</span>
            <span>•</span>
            <span>Oakland</span>
            <span>•</span>
            <span>Berkeley</span>
            <span>•</span>
            <span>San Francisco</span>
            <span>•</span>
            <span>Radiant Panel Association</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} HTO Plumbing & Radiant. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 text-[#6e6e6e] hover:text-[#121417] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

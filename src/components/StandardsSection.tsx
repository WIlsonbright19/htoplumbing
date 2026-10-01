import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const StandardsSection: React.FC = () => {
  const steps = [
    {
      num: '[01]',
      title: 'Manual-J Heat Loss Calculation',
      subtitle: 'BTU / Square Foot Precision',
      desc: 'We never guess boiler or loop sizing. Every room undergoes scientific heat-loss modeling based on window R-values, ceiling height, and floor finishes.',
    },
    {
      num: '[02]',
      title: 'Clean Mechanical Architecture',
      subtitle: 'Serviceable Copper & Manifolds',
      desc: 'Mechanical rooms engineered with museum-level symmetry, clear labeling, brass isolation valves on all circuits, and redundant safety bypasses.',
    },
    {
      num: '[03]',
      title: 'Hydrostatic Pressure Certification',
      subtitle: '100 PSI Inspection Hold',
      desc: 'Every hydronic and domestic line is pressure-tested far beyond municipal code requirements before flooring, gypcrete, or drywall is enclosed.',
    },
  ];

  return (
    <section id="standards" className="py-24 md:py-36 px-6 sm:px-10 lg:px-12 border-t border-[#e5e7eb] relative bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="text-xs font-mono-code text-[#d65f3d] uppercase tracking-widest">
            [03] THE ENGINEERING STANDARD
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#121417] leading-[1.2] font-medium">
            Meticulous execution from blueprint to boiler fire.
          </h2>
          <p className="text-base font-sans-ui text-[#6e6e6e] leading-relaxed">
            Over two decades of specialized radiant heating and plumbing craftsmanship throughout Alameda and the greater San Francisco Bay Area.
          </p>
        </div>

        {/* 3 Step Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-8 space-y-5 hover:border-[#121417] transition-all shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code text-[#d65f3d] font-semibold">
                  {step.num}
                </span>
                <span className="text-[11px] font-mono-code text-[#6e6e6e]">
                  {step.subtitle}
                </span>
              </div>

              <h3 className="font-display text-2xl text-[#121417] font-medium">
                {step.title}
              </h3>

              <p className="text-sm font-sans-ui text-[#6e6e6e] leading-relaxed pt-1">
                {step.desc}
              </p>

              <div className="pt-4 border-t border-[#e5e7eb] flex items-center gap-2 text-xs font-mono-code text-[#121417]">
                <FontAwesomeIcon icon={faCheck} className="text-[#d65f3d] text-xs" />
                <span>Verified by Master Plumber</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

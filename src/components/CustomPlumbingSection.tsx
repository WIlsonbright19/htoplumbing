import React from 'react';
import customPlumbingBg from '../assets/images/hto_custom_plumbing_1790858095484.jpg';

export const CustomPlumbingSection: React.FC = () => {
  const services = [
    {
      title: 'Architectural Kitchen & Bath',
      detail:
        'Installation of high-end concealed thermostatic valves, wall-hung fixtures, linear trench drains, and custom brass fixtures with millimeter precision.',
      tag: 'Custom Remodels',
    },
    {
      title: 'ADU & New Construction Plumbing',
      detail:
        'Complete ground-up drainage, waste, vent (DWV), gas piping, and water supply sizing for modern accessory dwelling units and custom residential builds.',
      tag: 'New Builds & ADUs',
    },
    {
      title: 'Whole-Home Repipe & Water Heating',
      detail:
        'Replacement of aging galvanized or polybutylene piping with Type-L copper or expansion PEX-A, paired with continuous recirculating tankless water heaters.',
      tag: 'Infrastructure',
    },
  ];

  return (
    <section id="plumbing" className="relative py-24 md:py-36 px-6 sm:px-10 lg:px-12 border-t border-[#e5e7eb] overflow-hidden">
      {/* Visible Background Image with Soft Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={customPlumbingBg}
          alt="Architectural Master Bathroom Plumbing Remodel"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#f7f5f0] via-[#f7f5f0]/90 to-[#f7f5f0]/75" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="text-xs font-mono-code text-[#d65f3d] uppercase tracking-widest">
            [02] ARCHITECTURAL PLUMBING & REMODELS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#121417] leading-[1.2] font-medium">
            Precision mechanical engineering for modern homes.
          </h2>
          <p className="text-base font-sans-ui text-[#121417]/80 leading-relaxed">
            From complex historic home restorations in Alameda to minimalist modern new builds across the Bay Area, our mechanical systems are built to last generations.
          </p>
        </div>

        {/* 3 Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff]/90 backdrop-blur-xs border border-[#e5e7eb] rounded-[8px] p-8 flex flex-col justify-between space-y-6 hover:border-[#121417] transition-all shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
                  <span className="text-xs font-mono-code text-[#d65f3d]">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-mono-code text-[#6e6e6e]">
                    [0{idx + 1}]
                  </span>
                </div>

                <h3 className="font-display text-2xl text-[#121417] font-medium leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm font-sans-ui text-[#6e6e6e] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import radiantBoilerBg from '../assets/images/hto_radiant_boiler_1790858078134.jpg';

export const RadiantSection: React.FC = () => {
  const features = [
    {
      num: '[01]',
      title: 'In-Slab & Subfloor PEX-A',
      detail:
        'Continuous oxygen-barrier cross-linked tubing embedded within concrete slabs, gypcrete, or between floor joists for silent, even thermal radiation.',
    },
    {
      num: '[02]',
      title: 'High-Efficiency Condensing Boilers',
      detail:
        '95%+ AFUE modulation boilers from top German and North American manufacturers, reducing gas consumption while delivering instant domestic hot water.',
    },
    {
      num: '[03]',
      title: 'Multi-Zone Distribution Manifolds',
      detail:
        'Precision stainless steel manifolds with individual circuit flow meters, actuator heads, and room-by-room smart thermostat controls.',
    },
  ];

  return (
    <section id="radiant" className="relative py-24 md:py-36 px-6 sm:px-10 lg:px-12 border-t border-[#e5e7eb] overflow-hidden">
      {/* Visible High-Resolution Background Image with Gentle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={radiantBoilerBg}
          alt="Hydronic Radiant Heating Manifold and Boiler"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f0] via-[#f7f5f0]/92 to-[#f7f5f0]/80" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="text-xs font-mono-code text-[#d65f3d] uppercase tracking-widest">
            [01] RADIANT & HYDRONIC HEATING
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#121417] leading-[1.2] font-medium">
            Silent, uniform warmth embedded beneath your feet.
          </h2>
          <p className="text-base font-sans-ui text-[#121417]/80 leading-relaxed">
            Eliminate forced-air duct noise, dust circulation, and cold spots. Radiant hydronic heating delivers luxurious radiant heat through floors, walls, and architectural radiators.
          </p>
        </div>

        {/* 3 Technical Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff]/90 backdrop-blur-xs border border-[#e5e7eb] rounded-[8px] p-8 space-y-5 hover:border-[#121417] transition-all shadow-xs"
            >
              <div className="text-xs font-mono-code text-[#d65f3d]">
                {item.num}
              </div>

              <h3 className="font-display text-2xl text-[#121417] font-medium leading-snug">
                {item.title}
              </h3>

              <p className="text-sm font-sans-ui text-[#6e6e6e] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

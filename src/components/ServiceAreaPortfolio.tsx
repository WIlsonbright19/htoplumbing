import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const ServiceAreaPortfolio: React.FC = () => {
  const [activeArea, setActiveArea] = useState<number>(0);

  const areas = [
    {
      city: 'Alameda Island',
      subtitle: 'Historic Victorians & Craftsman Homes',
      highlights: [
        'Radiant subfloor PEX-A retrofits without disturbing historic hardwood',
        'Galvanized & lead main line replacement with Type-L copper',
        'High-efficiency boiler upgrades for existing hydronic systems',
      ],
      response: 'Same-day on-island diagnostic availability',
    },
    {
      city: 'Oakland & Berkeley Hills',
      subtitle: 'Mid-Century & Custom Hillside Residences',
      highlights: [
        'Multi-zone radiant manifolds with individual smart thermostats',
        'Complete ground-up ADU (Accessory Dwelling Unit) DWV & water lines',
        'Earthquake seismic gas shut-off valves and boiler strapping',
      ],
      response: 'Priority scheduling for East Bay remodels',
    },
    {
      city: 'San Francisco & Greater Bay',
      subtitle: 'Modern Architectural Builds & Flats',
      highlights: [
        'In-slab polished concrete radiant floor heating loops',
        'Architectural concealed thermostatic valves and wall-hung fixtures',
        'Commercial-grade instant tankless water heating systems',
      ],
      response: 'Dedicated contractor & architect collaboration',
    },
  ];

  return (
    <section id="service-area" className="py-24 md:py-36 px-6 sm:px-10 lg:px-12 border-t border-[#e5e7eb] relative bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="text-xs font-mono-code text-[#d65f3d] uppercase tracking-widest">
            [05] SERVICE JURISDICTIONS & CAPABILITIES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#121417] leading-[1.2] font-medium">
            Tailored mechanical systems across the Bay Area.
          </h2>
          <p className="text-base font-sans-ui text-[#6e6e6e] leading-relaxed">
            Understanding the unique plumbing codes, water chemistry, and architectural demands of our regional building stock.
          </p>
        </div>

        {/* Region Selector & Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Region Buttons */}
          <div className="lg:col-span-4 space-y-3">
            {areas.map((area, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveArea(idx)}
                className={`w-full p-5 rounded-[8px] border text-left transition-all cursor-pointer ${
                  activeArea === idx
                    ? 'bg-[#ffffff] border-[#121417] shadow-xs'
                    : 'bg-[#f7f5f0] border-[#e5e7eb] hover:border-[#121417]/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className={activeArea === idx ? 'text-[#d65f3d]' : 'text-[#6e6e6e]'}
                    />
                    <span className="font-display text-xl text-[#121417] font-medium">
                      {area.city}
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-[#6e6e6e]">
                    [0{idx + 1}]
                  </span>
                </div>
                <div className="text-xs font-sans-ui text-[#6e6e6e] mt-1 pl-6">
                  {area.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Right Area Deep-Dive Box */}
          <div className="lg:col-span-8 bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-8 sm:p-10 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e5e7eb] pb-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#121417] font-medium">
                  {areas[activeArea].city}
                </h3>
                <p className="text-xs font-mono-code text-[#d65f3d] mt-0.5">
                  {areas[activeArea].subtitle}
                </p>
              </div>
              <span className="inline-block px-3 py-1 rounded-[4px] bg-[#f7f5f0] border border-[#e5e7eb] text-xs font-mono-code text-[#121417]">
                {areas[activeArea].response}
              </span>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono-code uppercase tracking-wider text-[#6e6e6e]">
                Primary Engineering Applications:
              </div>
              <div className="space-y-3">
                {areas[activeArea].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-sans-ui text-[#121417]">
                    <div className="w-5 h-5 rounded-full bg-[#f2ddd3] text-[#d65f3d] flex items-center justify-center shrink-0 mt-0.5">
                      <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#e5e7eb] flex items-center justify-between text-xs font-mono-code text-[#6e6e6e]">
              <span>Licensed California Contractor #876197</span>
              <span>Fully Insured & Bonded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

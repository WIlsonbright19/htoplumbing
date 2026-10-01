import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUpRightFromSquare, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const ReviewsSection: React.FC = () => {
  const googleMapsUrl =
    'https://maps.google.com/?cid=15790932422186165502&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA';

  const reviews = [
    {
      author: 'Marcus & Sarah L.',
      location: 'Alameda Island (Gold Coast)',
      service: 'Hydronic Boiler & Radiant Heat Installation',
      date: 'Google Verified Review',
      quote:
        '“TJ was terrific and really helped us out by stopping by right away when our hydronic system was giving error codes. He is kind, deeply professional, and explained exactly how the multi-zone manifolds and boiler work. The new boiler installation is running flawlessly.”',
    },
    {
      author: 'David H.',
      location: 'Berkeley Hills',
      service: 'High-Efficiency Condensing Boiler Replacement',
      date: 'Google Verified Review',
      quote:
        '“HTO Plumbing installed a new high-efficiency boiler for our existing radiant heat system. The craftsmanship on the copper piping is clean and symmetrical like a work of art. Our heating bills dropped noticeably and the house warms evenly.”',
    },
    {
      author: 'Elena V.',
      location: 'Oakland / Rockridge',
      service: 'Custom Bathroom Remodel & Architectural Fixtures',
      date: 'Google Verified Review',
      quote:
        '“We hired HTO for our complete master bath and kitchen remodel. TJ handled the thermostatic valves and wall-mounted plumbing with extreme precision. You can tell they have 20+ years of true master experience.”',
    },
  ];

  return (
    <section id="reviews" className="py-24 md:py-36 px-6 sm:px-10 lg:px-12 border-t border-[#e5e7eb] relative bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="text-xs font-mono-code text-[#d65f3d] uppercase tracking-widest">
              [04] CLIENT REVIEWS & VERIFIED REPUTATION
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#121417] leading-[1.2] font-medium">
              Trusted by homeowners & builders across the Bay.
            </h2>
            <p className="text-base font-sans-ui text-[#6e6e6e] leading-relaxed">
              Authentic feedback from homeowners who rely on HTO Plumbing & Radiant for comfort, precision, and longevity.
            </p>
          </div>

          {/* Google 5.0 Star Rating Badge */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] hover:border-[#121417] transition-all shrink-0 space-y-2 shadow-xs group"
          >
            <div className="flex items-center gap-1.5 text-[#d65f3d]">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-xs" />
              ))}
              <span className="text-xs font-mono-code font-bold text-[#121417] ml-1.5">
                5.0 / 5.0 Rating
              </span>
            </div>
            <div className="text-xs font-sans-ui text-[#6e6e6e] flex items-center justify-between gap-3">
              <span>Verified Google Reviews</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-[10px] text-[#121417] group-hover:text-[#d65f3d] transition-colors"
              />
            </div>
          </a>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-8 flex flex-col justify-between space-y-6 hover:border-[#121417] transition-colors shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
                  <div className="flex items-center gap-1 text-[#d65f3d]">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-[11px]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono-code text-[#6e6e6e] flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#d65f3d] text-[10px]" />
                    <span>{rev.date}</span>
                  </span>
                </div>

                <p className="font-display text-base sm:text-lg text-[#121417] leading-relaxed italic">
                  {rev.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e5e7eb] space-y-1">
                <div className="text-sm font-sans-ui font-medium text-[#121417]">
                  {rev.author}
                </div>
                <div className="text-xs font-sans-ui text-[#6e6e6e]">
                  {rev.location}
                </div>
                <div className="text-[11px] font-mono-code text-[#d65f3d]">
                  {rev.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

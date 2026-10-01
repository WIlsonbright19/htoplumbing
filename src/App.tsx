/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RadiantSection } from './components/RadiantSection';
import { CustomPlumbingSection } from './components/CustomPlumbingSection';
import { StandardsSection } from './components/StandardsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaPortfolio } from './components/ServiceAreaPortfolio';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Radiant Floor Heating');

  const scrollToBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#121417] editorial-grid selection:bg-[#f2ddd3] selection:text-[#121417] font-sans-ui">
      <Navbar onOpenBooking={() => scrollToBooking()} />
      <main>
        <HeroSection onOpenBooking={() => scrollToBooking()} />
        <RadiantSection />
        <CustomPlumbingSection />
        <StandardsSection />
        <ReviewsSection />
        <ServiceAreaPortfolio />
        <BookingSection initialService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}

// app/page.js

import Header from "~/components/Section/Common/Header/Header";
import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";

// Core conversion sections
import HeroSection from "~/components/Section/Home-1/HeroSection";
import ServiceSlideSection from "~/components/Section/Home-1/ServiceSlideSection";
import WorkProcessSection from "~/components/Section/Common/WorkProcess/WorkProcessSection";
import CtaTwoSection from "~/components/Section/Common/CtaTwo/CtaTwoSection";

export default function Home() {
  return (
    <>
      {/* Global Header */}
      <Header />

      <main>
        {/* Hero: Authorized Scrapping, Call/WhatsApp CTA */}
        <HeroSection />

        {/* Services: 2W, 4W, Heavy Vehicles, Scrap Trading */}
        <ServiceSlideSection />

        {/* Process: Pickup → Inspection → Payment → Certificate */}
        <WorkProcessSection />

        {/* Strong CTA: Call / WhatsApp / Get Quote */}
        <CtaTwoSection />
      </main>

      {/* Global Footer */}
      <FooterOneSection className="tekup-footer-section dark-bg" />
    </>
  );
}

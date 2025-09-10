import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <AboutSection />

        <ServicesSection />

        <VisionMissionSection />

        <CoreValuesSection />

        <WhyChooseUs />

        <ClientsSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

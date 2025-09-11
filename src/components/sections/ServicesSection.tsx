"use client";

import React, { useEffect, useState } from "react";
import { companyInfo } from "@/data/companyInfo";
import { Service } from "@/types/types";
import ServiceCard from "../cards/ServiceCard";

export default function ServicesSection() {
  const services = companyInfo.services as Service[];
  const [isMobile, setIsMobile] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // match Tailwind lg breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) setExpandedIndex(null);
  }, [isMobile]);

  return (
    <section id="services" className="py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
          <p className="mt-4 text-gray-600">{companyInfo.ServiceHeader}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              isMobile={isMobile}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

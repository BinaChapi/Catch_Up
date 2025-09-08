"use client";

import ServiceCard from "@/components/cards/ServiceCard";
import { companyInfo } from "@/data/companyInfo";

export default function ServicesSection() {
  const services = companyInfo.services
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
          <p className="mt-4 text-gray-600">
           {companyInfo.ServiceHeader}
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              items={service.items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import CoreValueCard from "@/components/cards/CoreValueCard";
import { companyInfo } from "@/data/companyInfo";

export default function CoreValuesSection() {
  const coreValues = companyInfo.coreValues
  return (
    <section id="core-values" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
          <p className="mt-4 text-gray-600">
            The fundamental beliefs that guide our actions and define our culture at Catch Up Marketing.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((value, i) => (
            <CoreValueCard
              key={i}
              icon={value.icon}
              title={value.title}
              description={value.desc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import DecorativeCard from "@/components/cards/TwoToneCard";
import { companyInfo } from "@/data/companyInfo";
import { Award } from "lucide-react";

export default function WhyChooseUs() {
  const chooseUsPoints = companyInfo.whyChooseUs
  return (
    <section id="why-choose-us" className="py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600">
            {companyInfo.WhyChooseUsHeader}
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            {chooseUsPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-secondary mt-1">✔</span>
                <div>
                  <h3 className="font-semibold text-primary">{point.title}</h3>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DecorativeCard icon={Award} iconColor="#F05A28" />
          </div>
        </div>
      </div>
    </section>
  );
}

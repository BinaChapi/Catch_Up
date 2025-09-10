"use client";

import VisionMissionCard from "@/components/cards/VisionMissionCard";
import { companyInfo } from "@/data/companyInfo";

export default function VisionMissionSection() {
  return (
    <section id="vision" className="py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Vision & Mission</h2>
          <p className="mt-4 text-gray-600">
            {companyInfo.MissionVisionHeader}
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VisionMissionCard
            title="Our Vision"
            desc={companyInfo.vision}
            color="bg-gradient-to-r from-primary to-blue-800"
            textColor="text-white"
          />
          <VisionMissionCard
            title="Our Mission"
            desc={companyInfo.mission}
            color="bg-gradient-to-r from-secondary to-orange-500"
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import Button from "../ui/Button";
import { companyInfo } from "@/data/companyInfo";
import DecorativeCard from "@/components/cards/TwoToneCard";
import { Store, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="text-center max-w-3xl mx-auto mb-22">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            About Us
          </h2>
          <p className="text-gray-600">
            {companyInfo.aboutHeader}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7">
            <p className="text-gray-700 mb-6">
              {companyInfo.about1}
            </p>
            <p className="text-gray-700 mb-6">
              {companyInfo.about2}
            </p>

            
            <Button
              as='a'
              href="#contact"
              variant="primary" 
              size="sm" 
              rightIcon={<TrendingUp />} 
            >
              Work with Us
            </Button>
          </div>

          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DecorativeCard icon={Store} className="h-64 w-full max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

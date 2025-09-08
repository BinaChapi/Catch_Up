"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { Ellipsis, Send } from "lucide-react";
import { useTypewriter } from "@/hooks/typewriter";
import { companyInfo } from "@/data/companyInfo";

export default function Hero() {
  const strategyText = useTypewriter("Strategy", 120, 2000);

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center text-white"
    >
      
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/CatchUp_1.png"
          alt="CatchUp background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center gap-12 w-full">
        
        <div className="w-full lg:w-7/12 p-8 rounded-r-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg text-white">
            Your Growth, <br className="hidden md:inline" />
            <span className="text-secondary">Our {strategyText}|</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-lg font-light text-gray-100 max-w-lg mx-auto lg:mx-0">
            {companyInfo.heroAbout}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button
              as="a"
              href="#services"
              variant="primary"
              size="md"
              rightIcon={<Send size={18} className="text-white" />}
            >
              Let&apos;s Catch Up
            </Button>

            <Button
              as="a"
              href="#about"
              variant="ghost"
              size="sm"
              rightIcon={<Ellipsis />}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

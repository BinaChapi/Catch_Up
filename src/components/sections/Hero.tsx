"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { BookOpen, Send } from "lucide-react";
import { useTypewriter } from "@/hooks/typewriter";
import { companyInfo } from "@/data/companyInfo";
import { useState, useEffect } from "react";
import { useLoading } from "@/context/LoadingProvider";

export default function Hero() {
  const strategyText = useTypewriter("Strategy", 120, 2000);

  const [currentIndex, setCurrentIndex] = useState(0);
   const { setLoaded } = useLoading();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companyInfo.HeroImages.length);
    }, 20000);

    return () => clearInterval(interval);
    
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center text-white"
    >
      {companyInfo.HeroImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Hero background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            onLoad={index === 0 ? () => setLoaded(true) : undefined}
          />
        </div>
      ))}

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
              variant="secondary"
              size="sm"
              rightIcon={<BookOpen size={18}/>}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

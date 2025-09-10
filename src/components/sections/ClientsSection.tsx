"use client";

import Image from "next/image";
import { companyInfo } from "@/data/companyInfo";

export default function ClientsSection() {
  const clients = companyInfo.Clients;

  return (
    <section id="clients" className="py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Clients</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {companyInfo.ClientsHeader}
        </p>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12">

            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-24 w-40 flex-none"
              >
                <Image
                  src={client}
                  alt={`Client logo ${i}`}
                  width={160}
                  height={96}
                  className="object-contain max-h-20 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

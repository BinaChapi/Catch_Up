"use client";

import { companyInfo } from "@/data/companyInfo";

export default function ClientsSection() {

  const clients = companyInfo.Clients

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-bold text-primary mb-4">Our Clients</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          {companyInfo.ClientsHeader}
        </p>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-28 rounded-xl bg-gray-200 text-gray-600 font-medium shadow-sm hover:shadow-md transition"
            >
              CLIENT
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

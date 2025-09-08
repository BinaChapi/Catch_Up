"use client";

import { companyInfo } from "@/data/companyInfo";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-[2px] after:bg-secondary after:mt-1">
            {companyInfo.sName}
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            {companyInfo.FooterHeader}
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <Link href={companyInfo.contact.socials.facebook}>
              <Facebook className="w-5 h-5 transition hover:text-secondary" />
            </Link>
            <Link href={companyInfo.contact.socials.twitter}>
              <Twitter className="w-5 h-5 transition hover:text-secondary" />
            </Link>
            <Link href={companyInfo.contact.socials.instagram}>
              <Instagram className="w-5 h-5 transition hover:text-secondary" />
            </Link>
            <Link href={companyInfo.contact.socials.linkedin}>
              <Linkedin className="w-5 h-5 transition hover:text-secondary" />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-[2px] after:bg-secondary after:mt-1">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#vision" className="hover:underline">
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link href="#clients" className="hover:underline">
                Our Clients
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-[2px] after:bg-secondary after:mt-1">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            {companyInfo.services.map((service, i) => (
              <li key={i}>
                <Link href="#" className="hover:underline">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-12 after:h-[2px] after:bg-secondary after:mt-1">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li>+{companyInfo.contact.phones.join("/ ")}</li>
            <li>{companyInfo.contact.email}</li>
            <li>{companyInfo.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.
      </div>
    </footer>
  );
}

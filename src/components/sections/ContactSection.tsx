"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/companyInfo";
import LocationCard from "../cards/LocationCard";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import AlreadySubmittedScreen from "../cards/AlreadySubmittedScreen";
import ThankYouScreen from "../cards/ThankYouScreen";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xovnyykl");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"form" | "thankyou" | "already">("form");

  
  useEffect(() => {
    const savedEmail = localStorage.getItem("CatchUpEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setStatus("already"); 
    }
  }, []);

  
  useEffect(() => {
    if (state.succeeded && email) {
      localStorage.setItem("CatchUpEmail", email); 
      setStatus("thankyou");
    }
  }, [state.succeeded, email]);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Get In Touch</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your brand? Contact us today to discuss how we can
            help you achieve your marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">
              Contact Information
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600 text-sm">
                    {companyInfo.contact.address}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600 text-sm">
                    {companyInfo.contact.phones.join("/ ")}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600 text-sm">
                    {companyInfo.contact.email}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-gray-600 text-sm">
                    {companyInfo.contact.WorkingHours}
                  </p>
                </div>
              </li>
            </ul>

            
            <LocationCard address={companyInfo.contact.address} />
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">
              Send Us a Message
            </h3>

            {status === "already" ? (
              <AlreadySubmittedScreen email={email} />
            ) : status === "thankyou" ? (
              <ThankYouScreen />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                  className="w-full text-sm rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-sm rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="w-full text-sm rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  rows={4}
                  required
                  className="w-full text-sm rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <Button
                  variant="primary"
                  className="px-6 py-3"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

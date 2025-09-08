"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ThankYouScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-10 bg-green-50 border border-green-200 rounded-2xl shadow-lg text-center"
    >
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You! 🎉</h3>
      <p className="text-gray-600">
        Your message has been submitted successfully.  
        Our team will get back to you shortly.
      </p>
    </motion.div>
  );
}

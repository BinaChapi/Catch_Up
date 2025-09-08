"use client";

import { Hourglass } from "lucide-react";
import { motion } from "framer-motion";

export default function AlreadySubmittedScreen({ email }: { email: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-10 bg-yellow-50 border border-yellow-200 rounded-2xl shadow text-center"
    >
      <Hourglass className="w-14 h-14 text-yellow-500 mx-auto mb-4 animate-pulse" />
      <h3 className="text-xl font-semibold text-yellow-800 mb-2">
        Already Submitted ⏳
      </h3>
      <p className="text-yellow-700">
        We’ve already received a message from <strong>{email}</strong>.  
        Please wait while we respond. Thanks for your patience!
      </p>
    </motion.div>
  );
}

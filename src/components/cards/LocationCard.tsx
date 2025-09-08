"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function LocationCard({ address }: { address: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-8 h-44 w-full max-w-md rounded-2xl 
                 bg-gradient-to-br from-white via-gray-100 to-gray-200 
                 flex flex-col items-center justify-center 
                 shadow-xl relative overflow-hidden border border-gray-200"
    >
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute w-16 h-16 rounded-full bg-primary/20 blur-lg" />
        <MapPin className="w-11 h-11 text-primary drop-shadow-md relative z-10" />
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 text-lg font-medium text-center bg-gradient-to-r 
                   from-primary to-secondary bg-clip-text text-transparent"
      >
        {address}
      </motion.span>
    </motion.div>
  );
}

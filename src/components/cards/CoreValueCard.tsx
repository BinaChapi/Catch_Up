"use client";

import {  ServiceProps } from "@/types/types";
import { motion } from "framer-motion";
import React from "react";

export default function CoreValueCard({ icon: Icon, title, description, index }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, translateY: -3 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 text-secondary mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-base font-semibold text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </motion.div>
  );
}

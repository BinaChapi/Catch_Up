"use client";

import { ServiceProps } from "@/types/types";
import { motion } from "framer-motion";
import React from "react";

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, y: -4 },
};

const listVariants = {
  rest: { opacity: 0, maxHeight: 0, transition: { duration: 0.3 } },
  hover: {
    opacity: 1,
    maxHeight: 300,
    transition: { staggerChildren: 0.1, duration: 0.5, ease: "easeInOut" },
  },
};

const liVariants = {
  rest: { opacity: 0, x: -8 },
  hover: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const iconVariants = {
  rest: { backgroundColor: "rgba(43,75,130,0.1)", color: "rgb(43,75,130)" }, 
  hover: {
    backgroundColor: "rgba(240,90,40,0.2)",
    color: "rgb(240,90,40)", 
  },
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
  index,
}: ServiceProps) {
  return (
    <motion.div
      initial="rest"
      whileInView="rest"
      whileHover="hover"
      viewport={{ once: true }}
      variants={cardVariants}
      transition={{ duration: 0.25 }}
      className="relative bg-white rounded-2xl shadow-md p-8 transition flex flex-col"
      key={index}
    >
      <motion.div
        variants={iconVariants}
        transition={{ duration: 0.3 }}
        className="w-14 h-14 flex items-center justify-center rounded-full mb-6"
      >
        <Icon size={28} />
      </motion.div>

      <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>

      {items && items.length > 0 && (
        <motion.ul
          variants={listVariants}
          className="overflow-hidden text-gray-500 text-sm list-disc list-inside space-y-1 pl-2"
        >
          {items.map((item, idx) => (
            <motion.li key={idx} variants={liVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  );
}

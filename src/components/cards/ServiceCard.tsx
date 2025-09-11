"use client";
import { motion, easeInOut } from "framer-motion";
import { Service } from "@/types/types";

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, y: -4 },
};

const listVariants = {
  rest: { opacity: 0, maxHeight: 0, transition: { duration: 0.28 } },
  hover: {
    opacity: 1,
    maxHeight: 400,
    transition: { staggerChildren: 0.06, duration: 0.36, ease: easeInOut },
  },
};

const liVariants = {
  rest: { opacity: 0, x: -8 },
  hover: { opacity: 1, x: 0, transition: { duration: 0.22 } },
};

const iconVariants = {
  rest: { backgroundColor: "rgba(43,75,130,0.08)", color: "rgb(43,75,130)" },
  hover: {
    backgroundColor: "rgba(240,90,40,0.12)",
    color: "rgb(240,90,40)",
  },
};

export default function ServiceCard({
  service,
  index,
  isMobile,
  expandedIndex,
  setExpandedIndex,
}: {
  service: Service;
  index: number;
  isMobile: boolean;
  expandedIndex: number | null;
  setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const { icon: Icon, title, description, items } = service;
  const isOpen = expandedIndex === index;

  // Handle keyboard accessibility (Enter / Space) when acting as a toggle
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isMobile) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setExpandedIndex(isOpen ? null : index);
    }
  };

  return (
    <motion.div
      role={isMobile ? "button" : undefined}
      tabIndex={isMobile ? 0 : undefined}
      aria-expanded={isOpen}
      initial="rest"
      variants={cardVariants}
      whileHover={!isMobile ? "hover" : undefined} // desktop: hover opens
      animate={isMobile ? (isOpen ? "hover" : "rest") : undefined} // mobile: controlled by expandedIndex
      transition={{ duration: 0.25 }}
      onClick={() => isMobile && setExpandedIndex(isOpen ? null : index)}
      onKeyDown={handleKeyDown}
      className="relative bg-white rounded-2xl shadow-md p-8 transition flex flex-col cursor-pointer"
      key={index}
    >
      <motion.div
        variants={iconVariants}
        transition={{ duration: 0.28 }}
        className="w-14 h-14 flex items-center justify-center rounded-full mb-6"
      >
        <Icon size={28} />
      </motion.div>

      <h3 className="text-lg font-semibold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>

      {items && items.length > 0 && (
        <motion.ul
          // the ul responds to the parent animation (rest/hover)
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

      {/* See more / Collapse button shown on mobile only. Stop propagation so it doesn't trigger parent's onClick twice. */}
      {isMobile && items && items.length > 0 && (
        <div className="mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpandedIndex(isOpen ? null : index);
            }}
            className="text-sm font-medium underline"
            aria-controls={`service-items-${index}`}
          >
            {isOpen ? "Collapse" : "See more"}
          </button>
        </div>
      )}
    </motion.div>
  );
}
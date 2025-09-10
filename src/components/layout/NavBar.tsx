"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NavLinks() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const THRESHOLD = 50;

  useEffect(() => {
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0;

    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastY.current;

        setAtTop(currentY < 60);

        if (currentY < 60) {
          setHidden(false);
        } else if (Math.abs(delta) > THRESHOLD) {
          setHidden(delta > 0);
        }

        lastY.current = currentY;
        ticking.current = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "vision", label: "Vision & Mission" },
    { id: "clients", label: "Clients" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transform transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${atTop ? "bg-transparent border-transparent" : "bg-white/95 backdrop-blur-sm border-gray-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {atTop ?
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo_bg.png"
              alt="logo"
              width={150}
              height={44}
              priority
            />
          </Link>
        :
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="logo"
              width={150}
              height={44}
              priority
            />
          </Link>
        }
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {items.map((it) => (
              <a
                key={it.id}
                href={`/#${it.id}`}
                onClick={(e) => handleNavClick(e, it.id)}
                className= { `relative px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-secondary transition-colors ${atTop ? 'text-white' : 'text-gray-900'}`}
              >
                {it.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={`md:hidden transition-max-height duration-200 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1 bg-white border-t border-gray-100">
          {items.map((it) => (
            <a
              key={it.id}
              href={`/#${it.id}`}
              onClick={(e) => handleNavClick(e, it.id)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

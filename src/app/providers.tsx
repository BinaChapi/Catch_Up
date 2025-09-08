// app/providers.tsx
"use client";

import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white text-primary">
        <div className="animate-spin h-16 w-16 border-4 border-secondary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return <>{children}</>;
}

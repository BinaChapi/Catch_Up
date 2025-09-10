"use client";

import { createContext, useContext, useState } from "react";

type LoadingContextType = {
  loaded: boolean;
  setLoaded: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ loaded, setLoaded }}>
      {/* Loader overlay */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white text-primary">
          <div className="animate-spin h-16 w-16 border-4 border-secondary border-t-transparent rounded-full"></div>
        </div>
      )}

      {/* App content */}
      {children}
    </LoadingContext.Provider>
  );
}

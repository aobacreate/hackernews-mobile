"use client";

import { createContext, useContext, useState } from "react";
import { NavKey } from "@/types";

type NavContextType = {
  activeNav: NavKey;
  setActiveNav: (nav: NavKey) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: React.ReactNode }) {
  // デフォルトは TOP
  const [activeNav, setActiveNav] = useState<NavKey>("TOP");

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav(): NavContextType {
  const ctx = useContext(NavContext);
  if (!ctx) {
    throw new Error("useNav must be used within NavProvider");
  }
  return ctx;
}

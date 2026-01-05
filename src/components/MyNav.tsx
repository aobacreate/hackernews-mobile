"use client";
import { useNav } from "@/context/NavContext";

export default function MyNav() {
  
  const nav = useNav();

  if (!nav) {
    // Provider がない場合は何もしない
    return null; // または return;
  }

  const { activeNav, setActiveNav } = nav;

  const navItem = (label: "TOP" | "NEW" | "BEST") => {
    const isActive = activeNav === label;

    return (
      <div
        onClick={() => setActiveNav(label)}
        className={`
          cursor-pointer
          pb-1
          ${isActive
            ? "border-b border-current"
            : "text-[color:var(--color-text-meta)]"}
        `}
      >
        {label}
      </div>
    );
  };

  return (
    <nav className="w-full mt-5">
      <div
        className="
          mx-auto
          w-[272px]
          flex items-center justify-between
          px-2
          py-4
          text-[length:var(--font-size-nav)]
          leading-[var(--line-height-nav)]
        "
      >
        {navItem("TOP")}
        {navItem("NEW")}
        {navItem("BEST")}
      </div>
    </nav>
  );
}

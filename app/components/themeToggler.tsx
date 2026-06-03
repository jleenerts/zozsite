'use client';

import { LightBulbIcon } from "@heroicons/react/24/outline";

// toggle the site dark mode
export function ColorButton({ className }: { className?: string }) {
  // info about system theme https://tailwindcss.com/docs/dark-mode
  function switchThemes() {
    if (localStorage.getItem("isDark") === "true") {
      localStorage.setItem("isDark", "false");
      document.documentElement.classList.remove("dark");
    }
    else {
      localStorage.setItem("isDark", "true");
      document.documentElement.classList.add("dark");
    }
  }
  
  return (
    <LightBulbIcon onClick={switchThemes} className={className}/>
  );
}
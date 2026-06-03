// adapted from https://dev.to/amritapadhy/understanding-fixing-fouc-in-nextjs-app-router-2025-guide-ojk
'use client';

import { useEffect, useState } from "react";

export default function ThemeWrapper({ children }: Readonly<{children: React.ReactNode}>) {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
      // create localStorage item if it doesn't exist
      if (!localStorage.getItem("isDark")) {
         if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localStorage.setItem("isDark", "true");
         }
         else {
            localStorage.setItem("isDark", "false");
         }
      }
      
      // and finally set initial dark state if applicable
      if (localStorage.getItem("isDark") === "true") {
         document.body.classList.add("dark");
      }
   }, []);

   if (!mounted) return null;

   return <>{children}</>;
}
// adapted from https://dev.to/amritapadhy/understanding-fixing-fouc-in-nextjs-app-router-2025-guide-ojk
'use client';

import { useEffect, useState } from "react";

export default function ThemeWrapper({ children }: Readonly<{children: React.ReactNode}>) {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;

   return <>{children}</>;
}
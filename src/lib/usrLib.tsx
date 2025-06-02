'use client';

import { usePathname } from "next/navigation";

export function getCurrentPath() {
  const currPath = usePathname();
  return currPath;
}
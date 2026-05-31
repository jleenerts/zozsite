'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.css";

// toggle the site dark mode
export function ColorButton({ className }: { className?: string }) {
  // info about system theme https://tailwindcss.com/docs/dark-mode
  function handleClick() {
    if (localStorage.getItem("isDark") === "true") {
      localStorage.setItem("isDark", "false");
      document.body.classList.remove("dark");
    }
    else {
      localStorage.setItem("isDark", "true");
      document.body.classList.add("dark");
    }
  }
  
  return (
    <button onClick={handleClick} className={className}>
    Toggle Colors</button>
  );
}

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/pages", label: "My Apps" },
    { href: "/about", label: "About" },
    // Add more navigation items as needed
  ];

  return (
    <div>
      <div className={`fixed left-0
                      h-screen w-1/5 min-w-3xs py-2
                      ${styles.border_gradient}`}></div>
      <div className={`fixed left-0
                      h-screen w-1/10 min-w-3xs py-2
                      text-right bg-gray-500
                      `}>
        <div className="flex flex-col gap-2 [&>*]:gap-2">
          
          <div className="bg-gray-400 mr-2 rounded-r-md">
            <Link href="/" className="font-semibold text-xl pr-2 hover:text-orange-500 duration-150">
              Jacob's Site
            </Link>
          </div>
          
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-orange-500 mr-2 pr-2 bg-gray-400 rounded-r-md border-black`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>
        <ColorButton className="border rounded-md bg-gray-200 dark:bg-gray-700 absolute bottom-2 right-2"/>
        
      </div>
      
    </div>
  );
}

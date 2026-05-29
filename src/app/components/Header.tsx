'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.css"; 

// toggle the site dark mode
export function ColorButton() {
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
    <button onClick={handleClick} className="border rounded-md bg-gray-200 dark:bg-gray-700">
    Toggle Dark Mode</button>
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
    <div className="fixed left-0 flex flex-col h-screen w-2xl px-3 py-4 md:px-2">
      <div className="flex flex-col md:flex-row">
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            Jacob's React Site
          </Link>
        </div>
        
        <span>
          <nav className="flex flex-col md:flex-row">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </span>
        <ColorButton />
      </div>
    </div>
  );
}

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <div className="fixed left-0 h-screen w-1/10 min-w-3xs py-4 border-r-4 bg-grey-500">
      <div className="flex flex-col items-center">
        <div className="font-semibold text-3xl">
          <Link href="/" className="hover:text-orange-500 transition-colors duration-150">
            Jacob's Site
          </Link>
        </div>
        
        <span>
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-2 hover:text-orange-500`}
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

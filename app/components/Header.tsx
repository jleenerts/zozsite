'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { LightBulbIcon } from "@heroicons/react/24/outline";

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
      <LightBulbIcon className="w-10" />
    </button>
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
    <div className="fixed left-0
                    h-screen max-w-1/10 min-w-3xs
                    flex">
      <div className={`basis-96 py-2 text-right bg-gray-500`}>
        <div className="flex flex-col gap-2 [&>*]:gap-2">
          
          <div className="bg-gray-400 mr-1 rounded-r-md hover:text-orange-500 hover:duration-150">
            <Link href="/about" replace
                  className="grid grid-flow-col justify-items-end pr-2">
              <Image
                src="/zoz-logo-big.png"
                height={1024}
                width={1024}
                objectPosition="relative"
                alt="Logo designed by Zoz, a circular and stylized orange capital Z against a black background."
                className="w-10 justify-right"
              />
              <div className="place-content-center font-semibold text-right">Jacob's Site</div>
            </Link>
          </div>
          
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-orange-500 hover:duration-150 mr-1 pr-2 bg-gray-400 rounded-r-md border-black`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>
        
        
      </div>
      <div className={`basis-4 bg-linear-to-r from-gray-500 to-white dark:to-black`}></div>
      <ColorButton className="p-3 bg-gray-500 absolute bottom-2 right-3"/>
    </div>
  );
}

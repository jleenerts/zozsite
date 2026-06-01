'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { LightBulbIcon, Bars3Icon } from "@heroicons/react/24/outline";

// toggle the site dark mode
export function ColorButton({ className }: { className?: string }) {
  // info about system theme https://tailwindcss.com/docs/dark-mode
  function switchThemes() {
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
    <button onClick={switchThemes} className={className}>
      <LightBulbIcon className=""/>
    </button>
  );
}

export function ToggleSidebarButton({ className }: { className?: string }) {
  const sidebar = document.getElementById('sidebar');

  function toggleSidebar() {
    sidebar?.classList.toggle('-translate-x-full');
  }

  return (
    <button onClick={toggleSidebar} className={className}>
      <Bars3Icon className=""/>
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
    <aside>
      
      <div id="sidebar"
           className="fixed left-0
                      h-screen max-w-1/10 min-w-3xs
                      flex
                      transition-all duration-300 ease-in-out transform"
      >
        <div 
          className="basis-96 py-2
                     text-right bg-gray-500"
        >  
          <div 
            className="flex flex-col gap-2 [&>*]:gap-2"
          >
            
            <div
              className="mr-1
                         hover:text-orange-500 hover:duration-150"
            >
              <Link href="/about"
                    className="flex justify-end pr-2"
              >
                <div>
                  <Image
                    src="/zoz-logo-sm.png"
                    height={1024}
                    width={1024}
                    alt="Logo designed by Zoz, a circular and stylized orange capital Z against a black background."
                    className="w-10"
                  />
                </div>
                <div className="pl-2 place-content-center font-semibold">Jacob's Site</div>
              </Link>
            </div>
            
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mr-1 pr-2
                              bg-gray-400 rounded-r-md border-black
                              hover:text-orange-500 hover:duration-150`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

          </div>
          
          
        </div>
        <div
          className="basis-4 bg-linear-to-r from-gray-500 to-white dark:to-black"
        />
        
        <ColorButton className="absolute bottom-2 right-3 p-3 w-18
                                cursor-pointer dark:text-black not-dark:text-yellow-100 duration-80"/>
      </div>
      <ToggleSidebarButton
        className="absolute top-2 left-2 w-10
                   cursor-pointer text-black "
      />
    </aside>
  );
}

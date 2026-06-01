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
    <LightBulbIcon onClick={switchThemes} className={className}/>
  );
}

export function ToggleSidebarButton({ className, id }: { className?: string, id?: string }) {
  var active = false;
  var sidebar: HTMLElement | null = null;
  var button: HTMLElement | null = null;

  if (typeof window !== "undefined") {
    sidebar = document?.getElementById('sidebar');
    button = document?.getElementById('sidebarButton');

    if (localStorage.getItem("isDark") == "true") {
      button?.classList.add("text-gray-200");
      button?.classList.remove("text-black");
    }
  }

  function toggleSidebar() {
    active = !active;
    sidebar?.classList.toggle('-translate-x-full');

    // add transparent border to sandwich icon if sidebar isn't active
    if (!active) {
      button?.classList.add("bg-black/50");
      button?.classList.add("dark:bg-white/50");
    }
    else {
      button?.classList.remove("dark:bg-white/50");
      button?.classList.remove("bg-black/50");
    }

    // change color of icon ONLY if dark and not active
    if (!active && localStorage.getItem("isDark") === "true") {
      button?.classList.add("text-gray-200");
      button?.classList.remove("text-black");
    }
    else {
      button?.classList.add("text-black");
      button?.classList.remove("text-gray-200");
    }
  }

  return (
    <button onClick={toggleSidebar} id="sidebarButton" className={className} suppressHydrationWarning>
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
                      h-screen h-dvh min-w-xs
                      flex
                      transition-all duration-300 ease-in-out transform -translate-x-full"
      >
        <div 
          className="basis-96 py-2
                     text-right bg-gray-600"
        >  
          <div 
            className="flex flex-col gap-2 [&>*]:gap-4"
          >
            <div
              className="mr-1"
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
                <div className="pl-2 place-content-center
                                font-semibold text-gray-100
                                hover:text-orange-500 hover:duration-200"
                >Jacob's Site</div>
              </Link>
            </div>
            
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mr-1 p-2
                              bg-gray-400
                              rounded-r-lg
                              text-4xl hover:text-orange-500 hover:duration-150`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div
          className="basis-4 bg-linear-to-r from-gray-600 to-white dark:to-black mask-r-from-30%"
        />
        <ColorButton
          className="absolute right-3 bottom-4 max-block-24
                     cursor-pointer text-yellow-100 dark:text-black duration-80"
        />
      </div>
      <ToggleSidebarButton
        className="fixed top-2 left-2 w-10
                   cursor-pointer text-black
                   rounded-md bg-black/50 dark:bg-white/50
                   duration-100"
      />
    </aside>
  );
}

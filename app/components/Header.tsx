'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Share_Tech } from "next/font/google";

import { ColorButton } from "./themeToggler";

const shareTech = Share_Tech({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: "400",
});

export function ToggleSidebarButton({ className }: { className?: string }) {
  var active = false;
  var sidebar: HTMLElement | null = null;
  var lightButton: HTMLElement | null = null;
  var button: HTMLElement | null = null;

  if (typeof window !== "undefined") {
    sidebar = document?.getElementById('sidebar');
    lightButton = document?.getElementById('lightButton');
    button = document?.getElementById('sidebarButton');

    // reset sidebar being open on page change and enable button background
    sidebar?.classList.add('-translate-x-full');
    lightButton?.classList.add('-translate-x-full');
    button?.classList.add("bg-black/50");
    button?.classList.add("dark:bg-white/50");

    if (localStorage.getItem("isDark") == "true") {
      button?.classList.add("text-gray-200");
      button?.classList.remove("text-black");
    }
  }

  function toggleSidebar() {
    active = !active;
    console.log(sidebar);
    console.log(lightButton);
    sidebar?.classList.toggle('-translate-x-full');
    lightButton?.classList.toggle('-translate-x-full');

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

  // Note on the light icon: to match the bottom of a mobile browser where the height can change,
  // I created a separate div to house the light. If set relative to the inside of the rest of the sidebar,
  // then it can either be cut off or not update position every time the viewport height changes.
  return (
    <aside className={`${shareTech.className}`}>
      <div id="sidebar"
           className="fixed top-0 left-0
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
      </div>
      <div id="lightButton"
           className="flex justify-end
                      fixed bottom-2 left-0 h-[50px] min-w-xs
                      transition-all duration-300 ease-in-out transform -translate-x-full">
        <ColorButton
          className="pr-4 cursor-pointer text-yellow-100 dark:text-black duration-80"
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

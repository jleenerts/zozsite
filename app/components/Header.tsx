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
   var sidebarButton: HTMLElement | null = null;

   if (typeof window !== "undefined") {
      sidebar = document?.getElementById('sidebar');
      lightButton = document?.getElementById('lightButton');
      sidebarButton = document?.getElementById('sidebarButton');

      // reset sidebar being open on page change and enable button background
      sidebar?.classList.add('-translate-x-full');
      lightButton?.classList.add('-translate-x-full');
      sidebarButton?.classList.add("bg-black/50");
      sidebarButton?.classList.add("dark:bg-white/50");

      if (localStorage.getItem("isDark") == "true") {
         sidebarButton?.classList.add("text-gray-200");
         sidebarButton?.classList.remove("text-black");
      }
   }

   function toggleSidebar() {
      active = !active;
      sidebar?.classList.toggle('-translate-x-full');
      lightButton?.classList.toggle('-translate-x-full');

      // add transparent border to sandwich icon if sidebar isn't active
      if (!active) {
         sidebarButton?.classList.add("bg-black/50");
         sidebarButton?.classList.add("dark:bg-white/50");
      }
      else {
         sidebarButton?.classList.remove("dark:bg-white/50");
         sidebarButton?.classList.remove("bg-black/50");
      }

      // change color of icon ONLY if dark and not active
      if (!active && localStorage.getItem("isDark") === "true") {
         sidebarButton?.classList.add("text-gray-200");
         sidebarButton?.classList.remove("text-black");
      }
      else {
         sidebarButton?.classList.add("text-black");
         sidebarButton?.classList.remove("text-gray-200");
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
      { href: "/about", label: "About Me" },
      { href: "/resume", label: "My Resume" },
      { href: "/socials", label: "Socials" },
   ];

   // Note on the light icon: to match the bottom of a mobile browser where the height can change,
   // I created a separate div to house the light. If set relative to the inside of the rest of the sidebar,
   // then it can either be cut off or not update position every time the viewport height changes.
   return (
      <aside id="sidebarContainer" className="z-09">
         <div id="sidebar"
            className="fixed top-0 left-0
                        h-screen h-dvh min-w-3xs lg:min-w-xs
                        flex
                        transition-all duration-300 ease-in-out transform -translate-x-full"
         >
         <div 
            className="basis-96 py-2
                        text-right bg-gray-600"
         >  
            <div 
               className="flex flex-col gap-2 *:gap-3"
            >
               <div
               className="mr-1"
               >
                  <Link href="/about"
                        className="flex justify-end items-center pr-2
                                    font-semibold text-orange-500 hover:text-orange-400"
                  >
                     <div>
                        <Image src="/zoz-logo-sm.png"
                           height={256}
                           width={256}
                           loading={`eager`}
                           alt="Logo designed by Zoz, a circular and stylized orange capital Z against a black background."
                           className="w-10 pr-2"
                        />
                     </div>
                     Home of Zoz
                  </Link>
               </div>
               <nav className="flex flex-col">
                  {navItems.map((item) => (
                     <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        className={`my-1 mr-2 px-1 pr-2
                                    ${pathname === item.href ? 'bg-orange-500' : 'bg-gray-300'}
                                    rounded-r-2xl
                                    hover:bg-orange-500
                                    ${shareTech.className}
                                    text-4xl text-black hover:duration-150`}
                        onNavigate={(e) => {
                           if (pathname === item.href) {
                              e.preventDefault();
                              document.getElementById("sidebarButton")?.click();
                           }
                        }}
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
                        fixed bottom-12 left-0 h-[50px] min-w-3xs lg:min-w-xs 
                        transition-all duration-300 ease-in-out transform -translate-x-full">
            <ColorButton
               className="pr-4 z-10 cursor-pointer text-yellow-100 dark:text-black duration-80"
            />
         </div>
         <div className="fixed top-1 left-2 h-10 w-10 lg:w-25 z-11">
            <ToggleSidebarButton
               className="size-10
                           cursor-pointer text-black
                           rounded-md bg-black/50 dark:bg-white/50
                           duration-100"
            />
         </div>
      </aside>
   );
}

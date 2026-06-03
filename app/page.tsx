'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// trying out useEffect method to access elements on client only
export default function HomePage() {
   const [sidebar, getSidebar] = useState<HTMLElement | null>();
   const [footer, getFooter] = useState<HTMLElement | null>();

   useEffect(() => {
      getSidebar(document?.getElementById('sidebarContainer'));
      getFooter(document.getElementById('footer'));

      if (sidebar && footer) {
         sidebar.hidden = true;
         footer.hidden = true;
      }
   });

   return (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
         <Image src="/zoz-logo-big.png"
            height={1024}
            width={1024}
            alt="Logo designed by Zoz, a circular and stylized orange capital Z against a black background."
            className="landscape:h-3/5 portrait:w-4/5 w-min"
         />
         <Link href={`./about`}
                  prefetch={true}
                  className={`mt-4 text-4xl`}
                  replace={true}
                  onNavigate={(e) => {
                     if (sidebar && footer) {
                        sidebar.hidden = false;
                        footer.hidden = false;
                     }
                  }}
            >
               Enter
            </Link>
      </div>
   );
}
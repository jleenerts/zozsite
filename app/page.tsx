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
      <div className="h-screen flex flex-col items-center justify-center">
         <Image src="/zoz-logo-big.png"
            height={1024}
            width={1024}
            alt="Logo designed by Zoz, a circular and stylized orange capital Z against a black background."
            className="h-3/5 w-min"
         />
         <div>
            <Link href={`./about`}
                  prefetch={true}
                  className={`text-4xl`}
                  replace={true}
                  onNavigate={(e) => {
                     if (sidebar && footer) {
                        sidebar.hidden = false;
                        footer.hidden = false;
                     }
                  }}
            >
               Click through
            </Link>
         </div>
      </div>
   );
}
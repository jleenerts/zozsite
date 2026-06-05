import type { Metadata } from 'next';

import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";

export const metadata: Metadata = {
  title: `Jacob's Resume`,
  description: `Check out my coding projects & experience, from web apps to AR experimental research!`,
}

const ibmPlexThai = IBM_Plex_Sans_Thai_Looped({
   variable: "--font-ibm-plex-sans-thai",
   subsets: ["latin"],
   weight: "400",
});

export default function ResumePage() {
   return(
      <div className={`${ibmPlexThai.className}`}>
         <section id="summary" className="">
            <div className="">
               <h1>Jacob Leenerts</h1>
            </div>
         </section>
         <section id="highlights" className="">

         </section>
         <section id="work-history" className="">
            
         </section>
         <section id="projects" className="">

         </section>
      </div>
   )
}
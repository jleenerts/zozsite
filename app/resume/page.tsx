import Image from "next/image";
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
            <div className="flex">
               <div className="flex flex-col">
                  <h1 className="my-4 text-4xl">Jacob Leenerts</h1>
                  <p className="text-4xl border-b w-max">Software Developer</p>
               </div>
               
               <Image src="/jacob-forest-cropped.jpg"
                           height={2316}
                           width={1656}
                           fill={false}
                           loading={`eager`}
                           alt="A selfie I took at the UCSC campus. I am half-shaded and behind me is foliage with tall trees."
                           className="inset-y-0 right-0 w-1/4"
               />
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
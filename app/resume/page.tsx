import Image from "next/image";
import type { Metadata } from 'next';

import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";

import { DetailMenu } from "../components/detailMenu";

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
      <div className={`${ibmPlexThai.className} text-base`}>
         <section id="summary" className="">
            <div>
               <h1 className="text-3xl">Jacob Leenerts</h1>
               <p className="text-2xl pb-1
                              border-b-4 border-black/75 dark:border-white/75"
               >Software Developer</p>
            </div>
            <div className="mt-2 flex flex-col items-center xl:flex-row">
               <div className="pr-4 flex flex-col xl:justify-between xl:basis-3/4
                              text-xl 2xl:text-2xl 1440p:text-4xl 4k:text-6xl">
                  
                  <p className="text-justify indent-[10%]">
                     Jacob is a dedicated developer interested in creating software that intuitively
                     works for its users & empowers people and businesses alike to achieve their goals.
                     He has a spectrum of experience & interest in web development as well as networking
                     - working with APIs, databases, WebGL, and building websites
                     with Vue/React web application frameworks. His interests span
                     all of computing, with personal projects encompassing building & troubleshooting computer
                     hardware as well as experiments with home networking/server deployment.
                  </p>
                  <p className="h-min-1/4 text-justify indent-[10%]">
                     Jacob works best in small teams or on solo projects, with an ability to research and
                     quickly pick up new skills to achieve tasks as needed. He has experience both working
                     on and leading small teams of &lt; 5 people. He's a strong believer in
                     open communication as well as blameless conflict/issue resolution.
                  </p>
               </div>
               <div className="flex flex-row 
                              w-1/2 xl:basis-1/4">
                  <Image src="/jacob-forest.jpg"
                           height={2316}
                           width={1656}
                           fill={false}
                           loading={`eager`}
                           alt="A selfie I took at the UCSC campus, while on a forest bridge.
                                 I am half-shaded and behind me is foliage with tall trees."
                           className=""
                  />
               </div>
            </div>
            
         </section>
         <section id="highlights" className="">

         </section>
         <section id="work-history" className="pt-2 text-xl">
            <div className="flex items-center border-b-4 border-black/75 dark:border-white/75">
               <p>Job Experience</p>
               <p className="ml-1 text-sm">(Click for more)</p>
            </div>
            <div className="grid grid-cols-2">
               <DetailMenu className="mt-2 bg-red-500"
                           title="AR Research Project"
                           details={["Info 1", "Info 2", "Info 3"]}
               />
               <DetailMenu className="mt-2 bg-blue-500"
                           title="Tutor/Reader (UCSC)"
                           details={["Info 1", "Info 2", "Info 3"]}
               />
            </div>
         </section>
         <section id="projects" className="">

         </section>
      </div>
   )
}
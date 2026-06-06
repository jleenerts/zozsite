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
               <div className="pr-0 xl:pr-4 flex flex-col xl:justify-between xl:basis-3/4
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
               <div className="flex flex-row xl:flex-col
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
         <section id="skills" className="pt-2 text-xl">
         
         </section>
         <section id="work-history" className="pt-2 text-xl">
            <div className="flex items-center border-b-4 border-black/75 dark:border-white/75">
               <p>Job Experience</p>
               <p className="ml-1 text-sm">(Click for more)</p>
            </div>
            <div id="jobs"className="flex flex-col lg:flex-row w-full">
               <div id="col1" className="basis-1/2">
                  <DetailMenu className="mt-2"
                              title="Fast & Loose Band Website"
                              subtitle="– Commission work"
                              details={["Designed a blog and informational website for a local band with newspost functionality.",
                                       "Created a password-protected admin portal for creating and deleting posts with corresponding database.",
                                       "Deployed website to NameCheap hosting service using Next.js and configured MySQL DB."]}
                  />
                  <DetailMenu className="mt-2"
                              title="Tutor/Reader"
                              subtitle="– UC Santa Cruz"
                              details={["Graded 100+ students' work for two consecutive quarters for Introductory Networking.",
                                 "Communicated with TAs and the professor regarding grading clarifications and addressed cheating via plagiarism.",
                                 "Tutored for Intro to Graphics class in Spring Quarter in both group and individual capacities.",
                                 "Ran an introductory seminar and created a text guide on how to use git and GitHub for students to host their web-based projects for grading.",
                                 "Assisted students in debugging and optimizing JavaScript and WebGL code for their projects.",
                                 "Taught students about WebGL fundamentals for rendering primitive shapes, interleaving data to make multiple WebGL calls at once, and implementing basic lighting in their 3D worlds."]}
                  />
               </div>
               <div id="col2" className="basis-1/2 lg:ml-3">
                  <DetailMenu className="mt-2"
                              title="AR Research Project"
                              subtitle="– UC Santa Cruz"
                              details={["Worked under Alex Pang to create a prototype Meta Quest 3 app to provide spatial awareness to Visually Impaired People.",
                                       "Created a Unity project from scratch using Meta APIs that alerts the user to nearby objects with sound queues.",
                                       "Jacob designed the sound alert system, managing multiple audio sources.",
                                       "Created short looping alert sounds that were user toggleable for rapid prototyping.",
                                       "Alerts could be changed in sound and pitch, and different alert modes were created for testing."]}
                  />
                  <DetailMenu className="mt-2"
                              title="Creative Team Manager"
                              subtitle="– Branditory"
                              details={["Started as a Branding Associate, creating thousands of potential brand name and slogan recommendations for clients based on their needs and web domain availability.",
                                       "Took over as team manager in June 2017 – communicated with clients via email and phone to get feedback, ask questions, and convert inquiries to paying customers.",
                                       "Managed a small team of 2-3 associates to ensure appropriate scheduling based on associate availability, communication of client needs towards associates, and answering questions regarding assigned work.",
                                       "Manually created/refunded orders for customers in special circumstances, and handled chargeback cases with relevant evidence."]}
                  />
               </div>
            </div>
         </section>
         <section id="projects" className="">

         </section>
      </div>
   )
}
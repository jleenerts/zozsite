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
               
            </div>
            <div className="flex flex-col xl:flex-row content-center justify-between
                              border-b-3 border-black/75 dark:border-white/75">
               <div className="flex flex-col content-center justify-between"
               >
                  <p className="text-2xl xl:text-3xl">Jacob Leenerts</p>
                  <p className="text-xl xl:text-2xl text-slate-500 dark:text-slate-400">Software Engineer/Developer</p>
               </div>
               <div className="text-sm xl:text-base flex flex-col
                                 "
               >
                  <p>Orange County, California</p>
                  <a  href="tel:1-831-508-9262"
                     className="hover:underline active:underline
                                 hover:text-slate-500 active:text-slate-500
                                 dark:hover:text-slate-400 dark:active:text-slate-400"
                  >
                     Phone: (831) 508-9262
                  </a>
                  <a  href="mailto:jacobleenerts97+jobs@gmail.com?subject=Job%20Inquiry"
                     className="hover:underline active:underline
                                 hover:text-slate-500 active:text-slate-500
                                 dark:hover:text-slate-400 dark:active:text-slate-400"
                  >
                     Email: jacobleenerts97@gmail.com
                  </a>
               </div>
            </div>
            <div className="mt-2 flex flex-col items-center xl:items-start xl:flex-row">
               <div className="pr-0 xl:pr-4 flex flex-col xl:justify-between xl:basis-4/5
                              text-base xl:text-xl"
               >
                  <p className="text-justify indent-[10%]">
                     Jacob is a dedicated developer interested in creating software that intuitively
                     works for its users & empowers people and businesses alike to achieve their goals.
                     He has a spectrum of experience in software development as well as networking
                     - working with APIs, databases, WebGL, and building websites
                     with Vue/React web application frameworks. His interests span
                     all of computing, with personal projects encompassing building & troubleshooting computer
                     hardware as well as experiments with home networking/private server deployment. 
                  </p>
                  <p className="text-justify indent-[10%]">
                     Jacob works best in small teams or on solo projects, with an ability to research and
                     quickly pick up new skills to achieve tasks as needed. He has experience both working
                     on and leading small teams of &lt; 5 people. He's a strong believer in
                     open communication as well as blameless conflict/issue resolution to achieve
                     stronger team cohesion & confidence. Jacob's jack-of-all-trades adeptitude
                     will provide you adaptability and the ability to achieve a wide variety of tasks.
                  </p>
               </div>
               <div className="pt-2 xl:pt-0 w-1/2 xl:basis-1/5">
                  <Image src="/jacob-forest.jpg"
                           height={2316}
                           width={1656}
                           fill={false}
                           loading={`eager`}
                           alt="A selfie I took at the UCSC campus, while on a forest bridge.
                                 I am half-shaded and behind me is foliage with tall trees."
                  />
               </div>
            </div>
            
         </section>
         <section id="skills" className="pt-4 text-base xl:text-lg *:text-center">
            <div className="flex items-center border-b-3">
               <b className="text-slate-500 dark:text-slate-400 text-lg xl:text-xl">Highlighted Skills</b>
            </div>
            <div className="pt-3 xl:text-xl flex justify-center items-center">
               <b className="text-slate-500 dark:text-slate-400
                              border-black dark:border-white border-b-2 rounded-sm"
               >
                  Languages
               </b>
            </div>
            <ul className="grid grid-cols-3 *:my-2 place-content-around justify-items-center-safe
                           text-sm xl:text-lg *:transition *:hover:scale-120 *:duration-150 *:ease-out"
            >
               <li>JavaScript</li>
               <li>CSS</li>
               <li>WebGL</li>
               <li>Python 3</li>
               <li>C++</li>
               <li>C# (Unity)</li>
            </ul>
            <div className="pt-2 xl:text-xl flex justify-center items-center">
               <b className="text-slate-500 dark:text-slate-400
                              border-black dark:border-white border-b-2 rounded-sm"
               >
                  Frameworks
               </b>
            </div>
            <ul className="grid grid-cols-3 *:my-2 place-content-around justify-items-center-safe
                           text-sm xl:text-lg *:transition *:hover:scale-120 *:duration-150 *:ease-out"
            >
               <li>Next.js + React</li>
               <li>Vue</li>
               <li>py4web</li>
            </ul>
            <div className="pt-2 xl:text-xl flex justify-center items-center">
               <b className="text-slate-500 dark:text-slate-400
                              border-black dark:border-white border-b-2 rounded-sm"
               >
                  Libraries
               </b>
            </div>
            <ul className="grid grid-cols-3 *:my-2 place-content-around justify-items-center-safe
                           text-sm xl:text-lg *:transition *:hover:scale-120 *:duration-150 *:ease-out"
            >
               <li>Tailwind CSS</li>
               <li>NextAuth.js</li>
               <li>LeafletJS</li>
               <li>Three.js</li>
               <li>Firebase (DB)</li>
            </ul>
            <div className="pt-2 xl:text-xl flex justify-center items-center">
               <b className="text-slate-500 dark:text-slate-400
                              border-black dark:border-white border-b-2 rounded-sm"
               >
                  Other Skills
               </b>
            </div>
            <ul className="grid grid-cols-3 *:my-2 place-content-around justify-items-center-safe
                           text-sm xl:text-lg *:transition *:hover:scale-120 *:duration-150 *:ease-out"
            >
               <li>Version Control (Git)</li>
               <li>API & Framework Docs Research</li>
               <li>Linux Proficiency</li>
               <li>Package Managers</li>
               <li>Networking (Configuration & DHCP)</li>
               <li>cPanel</li>
            </ul>
         </section>
         <section id="work-history" className="pt-2 text-base xl:text-lg">
            <div className="flex items-center border-b-3 border-black/75 dark:border-white/75">
               <b className="text-slate-500 dark:text-slate-400 text-lg xl:text-xl">Job Experience</b>
               <p className="ml-1 text-sm">(Click/tap jobs for more info)</p>
            </div>
            <div id="jobs"className="flex flex-col lg:flex-row w-full">
               <div id="col1" className="basis-1/2">
                  <DetailMenu className="mt-2"
                              title="Fast & Loose Band Website"
                              subtitle="– Commission work (2026)"
                              details={["Designed a blog and informational website for a local band with newspost functionality.",
                                       "Created a password-protected admin portal for creating and deleting posts with corresponding database.",
                                       "Deployed website to NameCheap hosting service using Next.js and configured MySQL DB."]}
                  />
                  <DetailMenu className="mt-2"
                              title="Tutor/Reader"
                              subtitle="– UC Santa Cruz (2023 - 2024)"
                              details={["Graded 100+ students' work for two consecutive quarters for Introductory Networking.",
                                 "Communicated with TAs and the professor regarding grading clarifications and addressed cheating via plagiarism.",
                                 "Tutored for Intro to Graphics class during Spring Quarter in both group and individual capacities.",
                                 "Ran an introductory seminar and created a text guide on how to use git and GitHub for students to host their web-based projects for grading.",
                                 "Assisted students in debugging and optimizing JavaScript and WebGL code for their projects.",
                                 "Taught students about WebGL fundamentals for rendering primitive shapes, interleaving data to make multiple WebGL calls at once, and implementing basic lighting in their 3D worlds."]}
                  />
               </div>
               <div id="col2" className="basis-1/2 lg:ml-3">
                  <DetailMenu className="mt-2"
                              title="AR Research Project"
                              subtitle="– UC Santa Cruz (2024)"
                              details={["Worked under Alex Pang to create a prototype Meta Quest 3 app to provide spatial awareness to Visually Impaired People.",
                                       "Created a Unity project from scratch using Meta APIs that alerts the user to nearby objects with sound queues.",
                                       "Jacob designed the sound alert system, managing multiple audio sources.",
                                       "Created short looping alert sounds that were user toggleable for rapid prototyping.",
                                       "Alerts could be changed in sound and pitch, and different alert modes were created for testing."]}
                  />
                  <DetailMenu className="mt-2"
                              title="Creative Team Manager"
                              subtitle="– Branditory (2015 - 2019)"
                              details={["Started as a Branding Associate, creating thousands of potential brand name and slogan recommendations for clients based on their needs and web domain availability.",
                                       "Took over as team manager after two years – communicated with clients via email and phone to get feedback, ask questions, and convert inquiries to paying customers.",
                                       "Managed a small team of 2-3 associates to ensure appropriate scheduling based on associate availability, communication of client needs towards associates, and answering questions regarding assigned work.",
                                       "Manually created/refunded orders for customers in special circumstances, and handled chargeback cases with relevant evidence."]}
                  />
               </div>
            </div>
         </section>
         <section id="education" className="pt-4 text-base xl:text-lg">
            <div className="flex items-center border-b-3 border-black/75 dark:border-white/75">
               <b className="text-slate-500 dark:text-slate-400 text-lg xl:text-xl">Education</b>
            </div>
            <div className="mt-2 flex flex-col xl:flex-row">
               <b>Computer Science B.A –</b>
               <p className="ml-1 text-sm xl:text-lg">UC Santa Cruz, 2024</p>
            </div>
            <div className="mt-1 flex flex-col xl:flex-row">
               <b>C++ & Python Certificates –</b>
               <p className="ml-1 text-sm xl:text-lg">Orange Coast College, 2021</p>
            </div>
         </section>
      </div>
   )
}
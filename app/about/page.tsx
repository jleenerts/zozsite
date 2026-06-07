import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Jacob's Resume`,
  description: `Check out my coding projects & experience, from web apps to AR experimental research!`,
}

export default function AboutPage() {
   return (
      <div className="*:mt-2 first:mt-0">
         <section id="title" className="flex flex-col place-items-center text-2xl xl:text-4xl">
            <div className="w-2/5 xl:w-1/5">
               <Image src="/zoz-logo-big.png"
                        loading="eager"
                        height={1024}
                        width={1024}
                        alt="The Zoz logo, a stylized orange Z on a black background."
               />
            </div>
            <p>Welcome to my website!</p>
         </section>
         <section id="summary" className="text-justify indent-[10%]">
            <p>
               I'm Zoz (or Mrzozelow, pronounced zöz-eh-low). No relation to the game Town of Zoz!
               I built this site for two main reasons: one, because I think it's cool to build websites.
               Two, because I wanted a repository for any personal and professional efforts. This year I
               wanted to finally make something for myself, so I created a logo in Inkscape and built
               this site using Next.js & Tailwind CSS. While I always found myself interested in creative projects,
               I've never really felt like I had much going in terms of the arts (more of a science-y type).
               So, while I needed to make something to show off, I also wanted to try and inject it with
               more of a personal style (not just some stuffy corporate crap).
            </p>
         </section>
         <section id="aboutme" className="text-justify">
            <div className="flex justify-center text-2xl xl:text-3xl">
               <p>About me</p>
            </div>
            <div>
               <p className="indent-[10%]">
                  Gamer
               </p>
            </div>
         </section>
         <section id="gaming" className="text-justify">
            <div className="flex justify-center text-2xl xl:text-3xl">
               <p>Gaming</p>
            </div>
            <div>
               <p className="indent-[10%]">
                  Gamer
               </p>
            </div>
         </section>
      </div>
   );
}

import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home Page`,
  description: `Learn more about Zoz & the website.`,
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
            <p className="mt-2">Welcome to my website!</p>
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
            <div className="*:indent-[10%]">
               <p>
                  I'm a nerd through and through! I've been immersed in technology for my whole life. I probably ended
                  up obsessed with video games because they encompass every type of media wrapped into one product.
                  Other than tech, I am also an audio nerd. Although I'm not one of those audiophiles constantly
                  chasing the best audio signals, I <b>love</b> music and have a huge collection of physical media.
                  I like getting physical media of any of my favorites, but music in particular is the largest
                  segment of the collection.
               </p>
               <p>
                  Aside from hobbies, I also take great interest in the cross-section between ethics and technology.
                  Unfortunately, it seems like the major tech companies aren't really interested in analyzing
                  whether or not they are making useful contributions to society - only if it is profitable.
                  It's my personal opinion that everyone should be questioning whether or not the tech products
                  they use daily are improving their lives or chaining them to services that are not valuable to them.
               </p>
            </div>
         </section>
         <section id="gaming" className="text-justify">
            <div className="flex justify-center text-2xl xl:text-3xl">
               <p>Gaming</p>
            </div>
            <div className="flex flex-col justify-center place-items-center">
               <p className="indent-[10%]">
                  I play a variety of games and am into almost every genre! The genres I'm into most
                  are arcade racers, rhythm games, and card games, but I tend to prefer stylish games with great
                  music, visuals, and/or narrative. My favorite studio is Remedy Games,
                  they are making the best story-driven games of any studio and their art style mingling
                  live footage with gameplay is unrivaled! Some of my favorites (in no particular order):
               </p>
               <ul className="flex flex-col place-items-center">
                  <li>Alan Wake 2</li>
                  <li>Dead as Disco</li>
                  <li>Pizza Tower</li>
                  <li>Brütal Legend</li>
                  <li>Boneworks</li>
                  <li>Deus Ex</li>
                  <li>Slipstream</li>
                  <li>Bomb Rush Cyberfunk</li>
                  <li>The World Ends With You</li>
                  <li>Super Monkey Ball 1 & 2</li>
                  <li>Slay the Spire</li>
                  <li>Metroid: Zero Mission</li>
               </ul>
            </div>
         </section>
      </div>
   );
}

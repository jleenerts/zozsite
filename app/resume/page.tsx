import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Jacob's Resume`,
  description: `Check out my coding projects & experience, from web apps to AR experimental research!`,
}

export default function ResumePage() {
   return(
      <div>
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
'use client';

import { useState } from "react";

export function DetailMenu({ className = "", title = "default", subtitle="default", details = [] }:
   { className: string, title: string, subtitle: string, details: Array<string> }) {
   const [open, setOpen] = useState(false);

   function handleClick() {
      setOpen(!open);
   }

   return (
      <div className={className}>
         <button onClick={handleClick} className="flex justify-start hover:cursor-pointer
                                                   text-left text-base xl:text-lg items-center"
         >
            <b>{title}</b>
            <p className="pl-1 text-sm xl:text-base">{subtitle}</p>
         </button>
         <div id={title} className={`transform duration-300 overflow-hidden
                                    ${open ? "max-h-content opacity-100 translate-y-0" : 
                                             "max-h-0 opacity-0 -translate-y-4"}`}
         >
            <ul style={{listStyle:"inside"}} className="text-base text-justify">
               {details.map((item, idx) => (
                  <li key={idx}>{item}</li>
               ))}
            </ul>
         </div>
      </div>
   )
}
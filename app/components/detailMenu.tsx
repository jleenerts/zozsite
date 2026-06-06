'use client';

import { useState } from "react";

export function DetailMenu({ className = "", title = "default", details = [] }:
   { className?: string, title?: string, details: Array<string> }) {
   const [open, setOpen] = useState(false);

   function handleClick() {
      setOpen(!open);
   }

   return (
      <div className={className}>
         <button onClick={handleClick} className="text-left py-2">
            <b>{title}</b>
         </button>
         <div id={title} className={`transform duration-300 overflow-hidden min-h-content
                                    ${open ? "max-h-content opacity-100 translate-y-0" : 
                                             "max-h-0 opacity-0 -translate-y-4"}`}>
            <ul style={{listStyle:"inside"}} className="text-justify">
               {details.map((item, idx) => (
                  <li key={idx}>{item}</li>
               ))}
            </ul>
         </div>
      </div>
   )
}
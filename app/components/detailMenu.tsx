'use client';

import { useState, useEffect } from "react";

import { PlayCircleIcon } from "@heroicons/react/24/outline";

export function DetailMenu({ className = "", title = "default", details = [] }:
   { className?: string, title?: string, details: Array<string> }) {
   const [elm, getThis] = useState<HTMLElement | null>(null);

   useEffect(() => {
      getThis(document?.getElementById(`${title}`));
      elm?.classList.toggle("hidden");
   });

   function handleClick() {
      if (elm) {
         elm.classList.toggle("hidden");
      }
   }
   return (
      <div className={className}>
         <button onClick={handleClick} className="text-left p-2">
            <p>{title}</p>
         </button>
         <div id={title} className="p-2">
            <ul style={{listStyle:"inside"}}>
               {details.map((item, idx) => (
                  <li key={idx}>{item}</li>
               ))}
            </ul>
         </div>
      </div>
   )
}
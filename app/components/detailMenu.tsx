'use client';

import { useState, useEffect } from "react";

import { PlayCircleIcon } from "@heroicons/react/24/outline";

export function DetailMenu({ className = "", title = "default", details = [] }:
   { className?: string, title?: string, details: Array<string> }) {
   const [elm, getThis] = useState<HTMLElement | null>(null);

   useEffect(() => {
      getThis(document?.getElementById(`${title}`));
      elm?.classList.toggle("sr-only");
   });

   function handleClick() {
      if (elm) {
         elm.classList.toggle("sr-only");
      }
   }
   return (
      <div className={className}>
         <button onClick={handleClick} className="text-left p-2">
            <p>{title}</p>
         </button>
         <div id={title} className="px-2">
            <ul style={{listStyle:"inside"}}>
               {details.map((item, idx) => (
                  <li key={idx}>{item}</li>
               ))}
            </ul>
         </div>
      </div>
   )
}
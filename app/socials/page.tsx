import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Social Media links`,
  description: `Links to all the places I be!`,
}

export default function SocialsPage() {
   return (
      <div className="absolute inset-0 flex flex-col h-full
                        items-center justify-center-safe
                        text-4xl *:w-2xs *:p-3 *:py-4 *:my-2
                        *:bg-gray-300 *:dark:bg-gray-500 *:rounded-md">
         <Link href="https://steamcommunity.com/id/mrzozelow/"
               className="flex justify-between">
               <p>Steam:</p>
               <svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor"
                  className="text-gray-900 rounded-full size-[40px]" viewBox="0 0 16 16"
                  id="Steam Logo"
               >
                  <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006
                  8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046
                  0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223
                  0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z"/>
                  <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261
                  0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0
                  0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1
                  1-.002 3.048 1.524 1.524 0 0 1 .002-3.048"/>
               </svg>
         </Link>
         <Link href="https://bsky.app/profile/mrzozelow.xyz"
               className="flex justify-between">
               <p>Bluesky:</p>
               <svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor"
                  className="text-blue-500 size-[40px]" viewBox="0 0 16 16"
                  id="Bluesky Logo"
               >
                  <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955
                  16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375
                  2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379
                  1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737
                  0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
               </svg>
         </Link>
         <Link href="https://www.reddit.com/user/Mrzozelow/"
               className="flex justify-between">
               <p>Reddit:</p>
               <svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor"
                  className="text-orange-500 size-[40px]" viewBox="0 0 16 16"
                  id="Reddit Logo"
               >
                  <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0
                  1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545
                  0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61
                  1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16
                  0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83
                  0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592
                  2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0
                  0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451
                  4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165"/>
               </svg>
         </Link>
      </div>
   )
}

/* 
Steam icon from https://icons.getbootstrap.com/icons/steam/
Bluesky icon from https://icons.getbootstrap.com/icons/bluesky/
Reddit icon from https://icons.getbootstrap.com/icons/reddit/

The MIT License (MIT)

Copyright (c) 2011-2026 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
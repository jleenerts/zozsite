
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
   return (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
         <Image src="/zoz-logo-big.png"
            loading="eager"
            height={1024}
            width={1024}
            alt="The Zoz logo, a stylized orange Z on a black background."
            className="landscape:h-2/5 portrait:w-3/5 w-min"
         />
         <Link href={`./about`}
               prefetch={true}
               className={`mt-4 text-4xl`}
         >
            404 Not Found
         </Link>
      </div>
   )
}
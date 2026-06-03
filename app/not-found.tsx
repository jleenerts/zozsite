

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
   return (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
         <Image src="/zoz-logo-big.png"
            height={1024}
            width={1024}
            alt="Logo designed by Zoz, a circular and stylized orange capital Z against a black background."
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
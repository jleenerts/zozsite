'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

// This component is used to create a link to the current directory with the given subdirectory.
export function LinkSubDir(props: { className?: string; title?: string }) {
  const currPath = usePathname();
  return (
          <Link href={`${currPath}/${props.title}`} className={props.className}>
               {props.title ? props.title : "MISSING LINK"}
          </Link>
     );
}
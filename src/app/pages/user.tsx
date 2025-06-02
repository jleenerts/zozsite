'use client';

import Link from "next/link";
import { getCurrentPath } from "@/lib/usrLib";
import { get } from "http";

function currPath() {
  const data = getCurrentPath();

  return (data);
}

export function MyPath(props: { className?: string; title?: string }) {
     const path = currPath();
     return (
          <Link href={`${path}/${props.title}`} className={props.className}>
               {props.title ? props.title : "MISSING TEXT"}
          </Link>
     );
}
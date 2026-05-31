// Created by Jacob Leenerts May 2025
// following the guide at https://nextjs.org/learn/react-foundations/

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <div>
        <Link className={`buttons`} href={`./pages`}>Check out my apps!</Link>
      </div>
    </div>
  );
}
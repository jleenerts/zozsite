// Created by Jacob Leenerts May 2025

import Link from "next/link";
import styles from "./pages.module.css";
// we can't rename styles for the css import so we just create a new variable
let sy = styles;

type HeaderProps = {
  title: string;
};

export default function Page() {
  const pages = ['p1', 'p2', 'p3'];

  return (
    <main className={`${sy.pages}`}>
      <div className={`${sy.pages}`}>
        <a className="buttons">Check out my work!</a>
      </div>
      <div className={`${sy.pages}`}>
        {pages.map((page) => (
          <Link key={page} className={`${sy.buttons}`} href={`./${page}`}>{page}</Link>
        ))}
      </div>
    </main>
  );
}
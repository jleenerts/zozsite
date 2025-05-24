// Created by Jacob Leenerts May 2025

import Link from "next/link";
import styles from "./pages.module.css";
// we can't rename styles for the css import so we just create a new variable
let sy = styles;

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <h1>{title}</h1>
  );
}

export default function Page() {
  const pages = ['p1', 'p2', 'p3'];

  return (
    <main className={styles.pages}>
      <Header title="Check out my work! (WIP)" />
      <div className="container mx-auto">
        {pages.map((page) => (
          <button key={page} className={`${styles.buttons} px-4`}>
            <Link href={`./${page}`}>{page}</Link>
          </button>
        ))}
      </div>
    </main>
  );
}
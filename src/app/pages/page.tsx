// Created by Jacob Leenerts May 2025

import Link from "next/link";
import { MyPath } from "./user";
import styles from "./pages.module.css";
// we can't rename styles for the css import so we just create a new variable
let sy = styles;

type HeaderProps = {
  title: string;
};

export default function Page() {
  const pages = ['p1', 'p2', 'p3'];

  return (
    <main className={`${sy.pages} inline-block container`}>
      <div>
        <a className={`buttons inline-block ${sy.elm}`}>Check out my work! (WIP page)</a>
      </div>
      <div className={`flex ${sy.elm}`}>
        {pages.map((page) => (
          <MyPath key={page} className={'buttons'} title={page}></MyPath>
        ))}
      </div>
    </main>
  );
}
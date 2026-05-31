// Created by Jacob Leenerts May 2025

// this import is for a node module
import Link from "next/link";
// this import is for a library module
import { LinkSubDir } from "@/lib/usrLib";
// these imports is for a local module
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
          <LinkSubDir key={page} className={`buttons ${sy.elm}`} title={page}></LinkSubDir>
        ))}
      </div>
    </main>
  );
}
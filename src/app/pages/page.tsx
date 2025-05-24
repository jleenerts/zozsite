// Created by Jacob Leenerts May 2025

import Link from "next/link";
// don't forget to import user functions if applicable
//import { Func } from "./user";

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
    <div>
      <Header title="Check out my work! (WIP)" />
      {pages.map((page) => (
          <p key={page}>
            <Link href={`./${page}`}>{page}</Link>
          </p>
        ))}
    </div>
  );
}
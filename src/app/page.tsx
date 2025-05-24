// Created by Jacob Leenerts May 2025
// following the guide at https://nextjs.org/learn/react-foundations/

import Link from "next/link";

import { LikeButton } from "./user";
import styles from "./index.module.css";
let sy = styles;

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps, { className }: { className?: string }) {
  return (
    //<h1>{title}</h1>
    <h1 className={className}>{title ? title : "Default title"}</h1>
    //<h1>{`Cool ${title}`}</h1>
    //<h1>{props.title}</h1>
    // this one above requires passing in 'props' not the template literal
  );
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div className={`${sy.index}`}>
      <div className={`${sy.index}`}>
        <Link className={`buttons`} href={`./pages`}>Check out my apps!</Link>
      </div>
      <div className={`${sy.index}`}>
        <LikeButton className={`buttons`}/>
      </div>
    </div>
  );
}
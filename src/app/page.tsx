// Created by Jacob Leenerts May 2025
// following the guide at https://nextjs.org/learn/react-foundations/
import { LikeButton } from "./user";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    //<h1>{title}</h1>
    <h1>{title ? title : "Default title"}</h1>
    //<h1>{`Cool ${title}`}</h1>
    //<h1>{props.title}</h1>
    // this one above requires passing in 'props' not the template literal
  );
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>
            {name}
          </li>
        ))}
      </ul>
      <LikeButton className={`buttons`}/>
    </div>
  );
}
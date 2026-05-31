// this import is for a library module
import LinkSubDir from "../components/LinkSubDir";
// these imports is for a local module
import styles from "./pages.module.css";

type HeaderProps = {
  title: string;
};

export default function Page() {
  const pages = ['p1', 'p2', 'p3'];

  return (
    <main className={`${styles.pages} inline-block container`}>
      <div>
        <a className={`buttons inline-block ${styles.elm}`}>Check out my work! (WIP page)</a>
      </div>
      <div className={`flex ${styles.elm}`}>
        {pages.map((page) => (
          <LinkSubDir key={page} className={`buttons ${styles.elm}`} title={page}></LinkSubDir>
        ))}
      </div>
    </main>
  );
}
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/pages", label: "My Apps" },
    { href: "/about", label: "About" },
    // Add more navigation items as needed
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            Jacob's React Site
          </Link>
        </div>
        
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.active : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

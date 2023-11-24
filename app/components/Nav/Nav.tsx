"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "./nav.module.css";

export const Nav = () => {
  const pathname = usePathname();
  const componentPath = "/forecast";
  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${
          pathname === componentPath + "/forecast5" ? styles.active : ""
        }`}
        href={componentPath + "/forecast5"}
      >
        5 Day
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === componentPath + "/maps" ? styles.active : ""
        }`}
        href={componentPath + "/maps"}
      >
        Maps
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === componentPath + "/polution" ? styles.active : ""
        }`}
        href={componentPath + "/polution"}
      >
        Polution
      </Link>
    </nav>
  );
};

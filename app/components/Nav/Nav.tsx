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
          pathname === componentPath + "/today" ? styles.active : ""
        }`}
        href={"/forecast/today"}
      >
        Today
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === componentPath + "/day-5" ? styles.active : ""
        }`}
        href={"/forecast/day-5"}
      >
        5 Day
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === componentPath + "/maps" ? styles.active : ""
        }`}
        href={"/forecast/maps"}
      >
        Maps
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === componentPath + "/polution" ? styles.active : ""
        }`}
        href={"/forecast/polution"}
      >
        Polution
      </Link>
    </nav>
  );
};

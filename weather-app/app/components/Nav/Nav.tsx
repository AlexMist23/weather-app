"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "./nav.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Current Weather
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/today" ? styles.active : ""
        }`}
        href="/today"
      >
        Today
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/5-day" ? styles.active : ""
        }`}
        href="/5-day"
      >
        5 Day
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/Maps" ? styles.active : ""
        }`}
        href="/Maps"
      >
        Maps
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/air-polution" ? styles.active : ""
        }`}
        href="/air-polution"
      >
        Air Polution
      </Link>
    </nav>
  );
};

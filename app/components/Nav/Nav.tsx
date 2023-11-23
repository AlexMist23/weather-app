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
        className={`${styles.link} ${
          pathname === "/today" ? styles.active : ""
        }`}
        href={pathname + "/today"}
      >
        Today
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/5-day" ? styles.active : ""
        }`}
        href={pathname + "/5-day"}
      >
        5 Day
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/Maps" ? styles.active : ""
        }`}
        href={pathname + "/Maps"}
      >
        Maps
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/air-polution" ? styles.active : ""
        }`}
        href={pathname + "/air-polution"}
      >
        Polution
      </Link>
    </nav>
  );
};

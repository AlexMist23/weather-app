"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "./nav.module.css";

export const Nav = () => {
  const pathname = usePathname();
  console.log;
  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${
          pathname ==="/forecast/today" ? styles.active : ""
        }`}
        href={"/forecast/today"}
      >
        Today
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/forecast/day-5" ? styles.active : ""
        }`}
        href={"/forecast/day-5"}
      >
        5 Day
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/forecast/maps" ? styles.active : ""
        }`}
        href={"/forecast/maps"}
      >
        Maps
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/forecast/polution" ? styles.active : ""
        }`}
        href={"/forecast/polution"}
      >
        Polution
      </Link>
    </nav>
  );
};

"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* CSS */
import styles from "./nav.module.css";

export const Nav = () => {
  const pathname = usePathname();
  const componentPath = "/forecast";
  
  // Define navigation items
  const navItems = [
    { path: componentPath + "/forecast5", label: "5 Day" },
    { path: componentPath + "/maps", label: "Maps" },
    { path: componentPath + "/polution", label: "Polution" },
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`${styles.link} ${
            pathname === item.path ? styles.active : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

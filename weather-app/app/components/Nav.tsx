'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/current-weather' ? styles.active : ''
        }`}
        href="/current-weather"
      >
        current-weather
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/counter' ? styles.active : ''
        }`}
        href="/counter"
      >
        current-weather
      </Link>
    </nav>
  )
}

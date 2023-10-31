/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />

            <header className={styles.header}>
              <img src="/logo.svg" className={styles.logo} alt="logo" />
            </header>
            
            <main className={styles.main}>{props.children}</main>

          </section>
        </body>
      </html>
    </Providers>
  )
}

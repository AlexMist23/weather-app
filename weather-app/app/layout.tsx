/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";
import { Location } from "./components/Location/Location";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Location />
            <Nav />

            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}

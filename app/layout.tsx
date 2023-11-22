/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav/Nav";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { LocationPanel } from "./components/LocationPanel/LocationPanel";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.leftPanel}>
            <SearchBar />
            <LocationPanel />
          </section>
          <section className={styles.rightPanel}>
            <Nav />
            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}

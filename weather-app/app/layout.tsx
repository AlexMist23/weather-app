/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";
import { Location } from "./components/Location/Location";
import { LocationInput } from "./components/LocationInput/LocationInput";

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
            <LocationInput />
            <Nav />

            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}

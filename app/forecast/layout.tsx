/* Components */
import { Nav } from "../components/Nav/Nav";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { LocationPanel } from "../components/LocationPanel/LocationPanel";

/* Instruments */
import styles from "./styles/layout.module.css";

export default function ForecastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className={`${styles.section} ${styles.left}`}>
        <SearchBar />
        <LocationPanel />
      </section>
      <section className={`${styles.section} ${styles.right}`}>
        <Nav />
        {children}
      </section>
    </>
  );
}

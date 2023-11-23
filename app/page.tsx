/* Core */
import { useEffect } from "react";

/* Instruments */

import { useDispatch, setCurrentWeatherAsync } from "@/lib/redux";
import styles from "./styles/indexPage.module.css";

/* Components */
import { Nav } from "./components/Nav/Nav";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { LocationPanel } from "./components/LocationPanel/LocationPanel";

export default function IndexPage() {
  return (
    <>
      <section className={styles.leftPanel}>
        <SearchBar />
        <LocationPanel />
      </section>
      <section className={styles.rightPanel}>
        <Nav />
      </section>
    </>
  );
}

export const metadata = {
  title: "Weather App",
};

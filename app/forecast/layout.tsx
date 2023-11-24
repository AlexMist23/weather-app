"use client";

/* Core */
import { useEffect } from "react";

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectLocationData,
  setLocationByCoordAsync,
  setCurrentWeatherAsync,
} from "@/lib/redux";

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
  const location = useSelector(selectLocationData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        dispatch(setLocationByCoordAsync({ lat, lon }));
      });
    }
  }, []);

  useEffect(() => {
    if (location) {
      dispatch(
        setCurrentWeatherAsync({ lat: location.lat, lon: location.lon })
      );
    }
  }, [location]);
  return (
    <>
      <section className={styles.leftPanel}>
        <SearchBar />
        <LocationPanel />
      </section>
      <section className={styles.rightPanel}>
        <Nav />
        {children}
      </section>
    </>
  );
}

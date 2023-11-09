"use client";

/* Core */
import { useSelector, selectLocation } from "@/lib/redux";

/* Instruments */
import styles from "./locationpanel.module.css";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";

export const LocationPanel = () => {
  const location = useSelector(selectLocation);
  return (
    <div className={styles.LocationPanel}>
      <div>
        <h1 className={styles.h1}>{location.name}</h1>
        <h2 className={styles.h2}>{location.country}</h2>
        <h2 className={styles.h2}>{location.state}</h2>
      </div>
      <CurrentWeather />
    </div>
  );
};

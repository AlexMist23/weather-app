"use client";

/* Core */
import { useSelector, selectLocation } from "@/lib/redux";

/* Instruments */
import {} from "@/lib/redux";
import styles from "./locationpanel.module.css";

export const LocationPanel = () => {
  const location = useSelector(selectLocation);
  return (
    <div className={styles.LocationPanel}>
      <h1 className={styles.h1}>{location.name}</h1>
      <h2 className={styles.h2}>{location.country}</h2>
    </div>
  );
};

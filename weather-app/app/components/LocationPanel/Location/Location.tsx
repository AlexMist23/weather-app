"use client";

/* Core */
import { useSelector, selectLocation } from "@/lib/redux";

/* Instruments */
import {} from "@/lib/redux";
import styles from "./location.module.css";

export const Location = () => {
  const location = useSelector(selectLocation);
  return (
    <div>
      <h1 className={styles.locationName}>{location.name}</h1>
      <h2 className={styles.locationCountry}>{location.country}</h2>
    </div>
  );
};

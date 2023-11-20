"use client";

/* Core */

/* Instruments */
import styles from "./locationname.module.css";

export const Location: React.FC<LocationProps> = ({ name, country, state }) => {
  return (
    <div>
      <h1 className={styles.locationName}>{name}</h1>
      <h2 className={styles.locationCountry}>{country}</h2>
      <h2 className={styles.locationCountry}>{state}</h2>
    </div>
  );
};

export interface LocationProps {
  name: string;
  country: string;
  state: string;
}

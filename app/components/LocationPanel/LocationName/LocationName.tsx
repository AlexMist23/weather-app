"use client";

/* Core */

/* Instruments */
import styles from "./locationname.module.css";

export const Location: React.FC<LocationProps> = ({ name, country, state }) => {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>{name}</h1>
      <h2 className={styles.h2}>{country && `${country}, `}{state}</h2>
    </div>
  );
};

export interface LocationProps {
  name: string;
  country: string;
  state: string;
}

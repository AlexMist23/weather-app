/* Core */
import React from "react";

/* Instruments */
import { type locationData } from "@/lib/redux";

/* CSS */
import styles from "./locationname.module.css";


export const LocationName: React.FC<{ location: locationData }> = ({ location }) => {
  const { name, country, state } = location;

  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>{name}</h1>
      {country && state && <h2 className={styles.h2}>{`${country}, ${state}`}</h2>}
      {country && !state && <h2 className={styles.h2}>{country}</h2>}
    </div>
  );
};

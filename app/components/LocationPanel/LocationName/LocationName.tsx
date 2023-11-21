"use client";

/* Core */
import { useSelector, selectLocation } from "@/lib/redux";
/* Instruments */
import styles from "./locationname.module.css";

export const LocationName = () => {
  const { name, country, state } = useSelector(selectLocation);
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>{name}</h1>
      <h2 className={styles.h2}>
        {country && `${country}, `}
        {state}
      </h2>
    </div>
  );
};

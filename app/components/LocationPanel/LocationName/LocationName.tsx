"use client";

/* Core */
import { type locationData } from "@/lib/redux";
/* Instruments */
import styles from "./locationname.module.css";
import React from "react";

export const LocationName: React.FC<{ location: locationData }> = ({
  location,
}) => {
  const { name, country, state } = location;
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>{name}</h1>
      <h2 className={styles.h2}>
        {country && country}
        {state && `, ${state}`}
      </h2>
    </div>
  );
};

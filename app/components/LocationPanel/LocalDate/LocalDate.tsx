"use client";

/* Instruments */
import { type currentWeather } from "@/lib/redux";

import styles from "./localdate.module.css";

export const LocalDate: React.FC<{ weather: currentWeather }> = ({
  weather,
}) => {
  const currentWeather = weather;

  const date = currentWeather && new Date(+`${currentWeather?.dt}000`);

  return (
    <p className={styles.p}>
      {date?.toDateString()} {date?.toLocaleTimeString()}
    </p>
  );
};

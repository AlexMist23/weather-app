"use client";

/* Instruments */
import { useSelector, selectCurrentWeatherData } from "@/lib/redux";

import styles from "./localdate.module.css";

export const LocalDate = () => {
  const currentWeather = useSelector(selectCurrentWeatherData);

  const date = currentWeather && new Date(+`${currentWeather?.dt}000`)

  return (
      <p className={styles.p}>{date?.toDateString()} {date?.toLocaleTimeString()}</p>
  );
};

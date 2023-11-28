"use client";

/* Instruments */
import type { currentWeather } from "@/lib/redux";

import styles from "./localdate.module.css";

export const LocalDate: React.FC<{ weather: currentWeather }> = ({
  weather,
}) => {
  const currentWeather = weather;
  const date = currentWeather && new Date(+`${currentWeather?.dt}000`);

  function getLang() {
    if (!navigator.languages) return navigator.languages[0];
    return navigator.language;
  }

  return (
    <p className={styles.p}>
      {`${date.toLocaleString(getLang(), {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}`}
    </p>
  );
};

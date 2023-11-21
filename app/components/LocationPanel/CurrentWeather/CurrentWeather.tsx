"use client";

/* Instruments */
import {
  useSelector,
  selectCurrentWeatherData,
  selectCurrentWeatherStatus,
} from "@/lib/redux";

import { tempConvert } from "@/lib/tempConvert";
import styles from "./currentweather.module.css";

export const CurrentWeather = () => {
  const isLoading = useSelector(selectCurrentWeatherStatus);
  const currentWeather = useSelector(selectCurrentWeatherData);

  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = {
    ...currentWeather?.main,
  };

  return (
    <div className={styles.container}>
      <p className={isLoading ? styles.loader : ""}>
        temp: {tempConvert(temp)}
      </p>
      <p className={isLoading ? styles.loader : ""}>
        feels_like: {tempConvert(feels_like)}
      </p>
      <p className={isLoading ? styles.loader : ""}>
        temp_min: {tempConvert(temp_min)}
      </p>
      <p className={isLoading ? styles.loader : ""}>
        temp_max: {tempConvert(temp_max)}
      </p>
      <p className={isLoading ? styles.loader : ""}> pressure: {pressure}</p>
      <p className={isLoading ? styles.loader : ""}> humidity: {humidity}</p>    </div>
  );
};

"use client";

/* Instruments */
import {
  useSelector,
  selectCurrentWeatherData,
  selectCurrentWeatherStatus,
  selectTemperatureScale,
} from "@/lib/redux";

import { tempConvert } from "@/lib/tempConvert";
import styles from "./currentweather.module.css";

export const CurrentWeather = () => {
  const isLoading = useSelector(selectCurrentWeatherStatus);
  const currentWeather = useSelector(selectCurrentWeatherData);
  const scale = useSelector(selectTemperatureScale);

  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = {
    ...currentWeather?.main,
  };

  return (
    <div className={styles.container}>
      <p className={isLoading ? styles.loader : ""}>
        temp: {tempConvert(temp, scale)}
      </p>
      <p className={isLoading ? styles.loader : ""}>
        feels_like: {tempConvert(feels_like, scale)}
      </p>
      <p className={isLoading ? styles.loader : ""}>
        temp_min: {tempConvert(temp_min, scale)}
      </p>
      <p className={isLoading ? styles.loader : ""}>
        temp_max: {tempConvert(temp_max, scale)}
      </p>
      <p className={isLoading ? styles.loader : ""}>pressure: {pressure}</p>
      <p className={isLoading ? styles.loader : ""}>humidity: {humidity}</p>
    </div>
  );
};

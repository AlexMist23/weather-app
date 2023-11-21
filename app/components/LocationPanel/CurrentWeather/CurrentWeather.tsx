"use client";

/* Instruments */
import {
  useSelector,
  selectCurrentWeatherData,
  selectCurrentWeatherStatus,
  selectTemperatureScale,
} from "@/lib/redux";

import { breezeCalc } from "@/lib/breezeCalc";
import { tempConvert } from "@/lib/tempConvert";
import styles from "./currentweather.module.css";

export const CurrentWeather = () => {
  const isLoading = useSelector(selectCurrentWeatherStatus);
  const currentWeather = useSelector(selectCurrentWeatherData);
  const scale = useSelector(selectTemperatureScale);

  const description = currentWeather?.weather[0]?.description;
  const windSpeed = currentWeather?.wind.speed
  const { feels_like, pressure, humidity } = currentWeather?.main || {};

  const contentClassName = isLoading ? styles.loader : styles.p;
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p className={contentClassName}>
          {`Feels like ${tempConvert(feels_like, scale)}.`}
        </p>
        <p className={contentClassName}>{description}.</p>
        <p className={contentClassName}>{breezeCalc(windSpeed!)}.</p>
      </div>

      <p className={contentClassName}>pressure: {pressure}</p>
      <p className={contentClassName}>humidity: {humidity}</p>
    </div>
  );
};

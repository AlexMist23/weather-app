"use client";

/* Instruments */

import {
  useSelector,
  selectCurrentWeatherData,
  selectTemperatureScale,
} from "@/lib/redux";

import { breezeCalc } from "@/lib/breezeCalc";
import { tempConvert } from "@/lib/tempConvert";
import styles from "./currentweather.module.css";

export const CurrentWeather = () => {
  const currentWeather = useSelector(selectCurrentWeatherData);
  const scale = useSelector(selectTemperatureScale);

  const description = currentWeather?.weather[0]?.description;
  const windSpeed = currentWeather?.wind.speed;
  const { feels_like, pressure, humidity } = currentWeather?.main || {};

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <span className={styles.span}>
          {`Feels like ${tempConvert(feels_like, scale)}. `}
        </span>
        <span className={styles.span}>{description}. </span>
        <span className={styles.span}>{breezeCalc(windSpeed!)}.</span>
      </div>

      <p className={styles.p}>pressure: {pressure}</p>
      <p className={styles.p}>humidity: {humidity}</p>
    </div>
  );
};

"use client";

/* Instruments */
import { type currentWeather } from "@/lib/redux";
import { convertTemp } from "@/lib/tempConvert";
import styles from "./currentweather.module.css";

export const CurrentWeather: React.FC<CurrentWeatherComponentProps> = ({
  temperatureScale,
  currentWheather,
  isLoading,
}) => {
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = {
    ...currentWheather?.main,
  };
  return (
    <div className={styles.container}>
      <p className={isLoading? styles.loader : ''}> temp: {convertTemp(temp, temperatureScale)}</p>
      <p className={isLoading? styles.loader : ''}> feels_like: {convertTemp(feels_like, temperatureScale)}</p>
      <p className={isLoading? styles.loader : ''}> temp_min: {convertTemp(temp_min, temperatureScale)}</p>
      <p className={isLoading? styles.loader : ''}> temp_max: {convertTemp(temp_max, temperatureScale)}</p>
      <p className={isLoading? styles.loader : ''}> pressure: {pressure}</p>
      <p className={isLoading? styles.loader : ''}> humidity: {humidity}</p>
    </div>
  );
};

export interface CurrentWeatherComponentProps {
  currentWheather: currentWeather | null;
  temperatureScale: string;
  isLoading: boolean;
}

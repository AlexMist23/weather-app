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
      {isLoading ? (
        <div className={styles.loader}/>
      ) : (
        <>
          <p>temp: {convertTemp(temp, temperatureScale)}</p>
          <p>feels_like: {convertTemp(feels_like, temperatureScale)}</p>
          <p>temp_min: {convertTemp(temp_min, temperatureScale)}</p>
          <p>temp_max: {convertTemp(temp_max, temperatureScale)}</p>
          <p>pressure: {pressure}</p>
          <p>humidity: {humidity}</p>
        </>
      )}
    </div>
  );
};

export interface CurrentWeatherComponentProps {
  currentWheather: currentWeather | null;
  temperatureScale: string;
  isLoading: boolean;
}

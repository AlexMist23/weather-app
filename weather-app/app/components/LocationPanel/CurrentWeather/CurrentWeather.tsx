"use client";

import { type currentWeather } from "@/lib/redux";
import styles from "./currentweather.module.css";

export const CurrentWeather: React.FC<CurrentWeatherComponentProps> = ({currentWheather}) => {
  const {temp, feels_like, temp_min, temp_max, pressure, humidity} = {...currentWheather?.main}

  return (
    <div className={styles.container}>
      <p>temp:{temp}</p>
      <p>feels_like:{feels_like}</p>
      <p>temp_min:{temp_min}</p>
      <p>temp_max:{temp_max}</p>
      <p>pressure:{pressure}</p>
      <p>humidity:{humidity}</p>
    </div>
  );
};

export interface CurrentWeatherComponentProps {
  currentWheather: currentWeather | null
}

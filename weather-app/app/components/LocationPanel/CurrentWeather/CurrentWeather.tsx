"use client";

import { type currentWeather } from "@/lib/redux";
import styles from "./currentweather.module.css";

export const CurrentWeather: React.FC<CurrentWeatherComponentProps> = ({currentWheather}) => {
  const temp = currentWheather?.main.temp;
  return (
    <div className={styles.container}>
      <p>temp:{temp}</p>
    </div>
  );
};

export interface CurrentWeatherComponentProps {
  currentWheather: currentWeather | null
}

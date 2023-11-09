"use client";

/* Core */
import {
  useSelector,
  selectLocation,
  selectCurrentWeatherData,
  setCurrentWeatherAsync,
} from "@/lib/redux";

/* Instruments */
import styles from "./locationpanel.module.css";
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const LocationPanel = () => {
  const location = useSelector(selectLocation);
  const currentWeather = useSelector(selectCurrentWeatherData);
  const dispatch = useDispatch()<any>;
  const currentWheatherUpdate = () => {
    dispatch(setCurrentWeatherAsync({ lat: location.lat, lon: location.lon }));
  };

  useEffect(() => {
    currentWheatherUpdate();
  }, [location]);

  return (
    <div className={styles.LocationPanel}>
      <div>
        <h1 className={styles.h1}>{location.name}</h1>
        <h2 className={styles.h2}>{location.country}</h2>
        <h2 className={styles.h2}>{location.state}</h2>
      </div>
      <CurrentWeather currentWheather={currentWeather} />
    </div>
  );
};

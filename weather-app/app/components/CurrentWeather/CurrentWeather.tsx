"use client";

/* Core */
import {
  useSelector,
  selectCurrentWeatherData,
  selectLocation,
  setCurrentWeatherAsync,
} from "@/lib/redux";

/* Instruments */
import styles from "./currentweather.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export const CurrentWeather = () => {
  const dispatch = useDispatch()<any>;
  const wheatherData = useSelector(selectCurrentWeatherData);
  const currentLocation = useSelector(selectLocation);

  return (
    <div className={styles.container}>
      <button
        onClick={() =>
          dispatch(
            setCurrentWeatherAsync({
              lon: currentLocation.lon,
              lat: currentLocation.lat,
            })
          )
        }
      >
        connect
      </button>
      <p>{wheatherData?.main.temp}</p>
    </div>
  );
};

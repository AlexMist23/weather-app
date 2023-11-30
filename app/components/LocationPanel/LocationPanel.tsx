"use client";

/* Core */
import { useEffect } from "react";

/* Instruments */
import { useSelector, useDispatch } from "@/lib/redux";

import {
  selectLocation,
  selectCurrentWeather,
  setLocationByCoordAsync,
  setCurrentWeatherAsync,
} from "@/lib/redux";

/* CSS */
import styles from "./locationpanel.module.css";

/* Components */
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";
import { LocationName } from "./LocationName/LocationName";
import { MainIcon } from "./MainIcon/MainIcon";
import { LocalDate } from "./LocalDate/LocalDate";

export const LocationPanel = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const weather = useSelector(selectCurrentWeather);

  useEffect(() => {
    if (!location.data) {
      dispatch(setLocationByCoordAsync({ lat: 51.5072, lon: 0.1276 }));
    } else if (location.data) {
      dispatch(
        setCurrentWeatherAsync({
          lat: location.data.lat,
          lon: location.data.lon,
        })
      );
    }
  }, [dispatch, location.data]);

  return (
    <div className={styles.LocationPanel}>
      {(location.status === "loading" || weather.status === "loading") && (
        <div className={styles.loader}></div>
      )}

      {location.status === "succeeded" && location.data && (
        <LocationName location={location.data!} />
      )}
      {location.status === "failed" && <p>{location.error}</p>}

      {weather.status === "succeeded" && (
        <>
          <LocalDate weather={weather.data!} />
          <MainIcon weather={weather.data!} />
          <CurrentWeather weather={weather.data!} />
        </>
      )}
      {weather.status === "failed" && <p>{weather.error}</p>}
    </div>
  );
};

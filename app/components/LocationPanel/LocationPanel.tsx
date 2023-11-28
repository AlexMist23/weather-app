"use client";

/* Core */
import { useEffect } from "react";

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectLocation,
  selectCurrentWeather,
  setLocationByCoordAsync,
  setCurrentWeatherAsync,
} from "@/lib/redux";

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
      navigator.geolocation.getCurrentPosition((position) => {
        let { latitude: lat, longitude: lon } = position.coords;
        if (lat && lon) {
          dispatch(setLocationByCoordAsync({ lat, lon }));
        } else dispatch(setLocationByCoordAsync({ lat: 51.5072, lon: 0.1276 })); // London
      });
    }
  }, []);

  useEffect(() => {
    if (location.data) {
      dispatch(
        setCurrentWeatherAsync({
          lat: location.data.lat,
          lon: location.data.lon,
        })
      );
    }
  }, [location.data]);

  return (
    <div className={styles.LocationPanel}>
      {(location.status === "loading" || weather.status === "loading") && (
        <div className={styles.loader}></div>
      )}

      {location.status === "succeeded" && <LocationName location={location.data!} />}
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

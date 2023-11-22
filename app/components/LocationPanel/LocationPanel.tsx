"use client";

/* Core */
import { useEffect } from "react";

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectLocation,
  setCurrentWeatherAsync,
  selectCurrentWeatherStatus,
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
  const locationListIsLoading = useSelector(selectCurrentWeatherStatus);

  const currentWheatherUpdate = () => {
    dispatch(setCurrentWeatherAsync({ lat: location.lat, lon: location.lon }));
  };

  useEffect(() => {
    currentWheatherUpdate();
  }, [location]);

  return (
    <div className={styles.LocationPanel}>
      <LocationName />
      {locationListIsLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
        <LocalDate />
        <MainIcon />
        <CurrentWeather />
        </>
      )}
      
    </div>
  );
};

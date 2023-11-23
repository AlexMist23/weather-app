"use client";

/* Core */
import { useEffect } from "react";

/* Instruments */
import {
  useSelector,
  useDispatch,
  locationSlice,
  selectLocation,
  setCurrentWeatherAsync,
  selectCurrentWeatherStatus,
  selectLocationList,
  locationListSlice,
  setLocationByCoordAsync,
} from "@/lib/redux";

import styles from "./locationpanel.module.css";

/* Components */
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";
import { LocationName } from "./LocationName/LocationName";
import { MainIcon } from "./MainIcon/MainIcon";
import { LocalDate } from "./LocalDate/LocalDate";

export const LocationPanel = () => {
  const dispatch = useDispatch();
  const locationList = useSelector(selectLocationList);
  const locationListIsLoading = useSelector(selectCurrentWeatherStatus);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      dispatch(setLocationByCoordAsync({ lat, lon }));
    });
  }, []);

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

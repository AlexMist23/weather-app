"use client";

/* Core */
import { useEffect } from "react";

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectLocation,
  setCurrentWeatherAsync,
} from "@/lib/redux";

import styles from "./locationpanel.module.css";

/* Components */
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";
import { LocationName } from "./LocationName/LocationName";
import { MainIcon } from "./MainIcon/MainIcon";
import { LocalDate } from "./LocalDate/LocalDate";
import { SearchBar } from "../SearchBar/SearchBar";

export const LocationPanel = () => {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);

  const currentWheatherUpdate = () => {
    dispatch(setCurrentWeatherAsync({ lat: location.lat, lon: location.lon }));
  };

  useEffect(() => {
    currentWheatherUpdate();
  }, [location]);

  return (
    <div className={styles.LocationPanel}>
      <SearchBar />
      <LocalDate />
      <LocationName />
      <MainIcon />
      <CurrentWeather />
    </div>
  );
};

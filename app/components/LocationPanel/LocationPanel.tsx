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
import { Location } from "./LocationName/LocationName";
import { MainIcon } from "./MainIcon/MainIcon";
import { LocalDate } from "./LocalDate/LocalDate";

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
      <LocalDate/>
      <Location
        name={location.name}
        country={location.country}
        state={location.state}
      />
      <MainIcon />
      <CurrentWeather />
    </div>
  );
};

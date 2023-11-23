"use client";

/* Instruments */
import {
  useSelector,
  selectLocation,
  selectCurrentWeatherStatus,
} from "@/lib/redux";

import styles from "./locationpanel.module.css";

/* Components */
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";
import { LocationName } from "./LocationName/LocationName";
import { MainIcon } from "./MainIcon/MainIcon";
import { LocalDate } from "./LocalDate/LocalDate";

export const LocationPanel = () => {
  const location = useSelector(selectLocation);
  const locationListIsLoading = useSelector(selectCurrentWeatherStatus);

  return (
    <div className={styles.LocationPanel}>
      {locationListIsLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          {location && <LocationName location={location} />}
          <LocalDate />
          <MainIcon />
          <CurrentWeather />
        </>
      )}
    </div>
  );
};

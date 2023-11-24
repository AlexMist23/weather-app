"use client";

/* Instruments */
import {
  useSelector,
  selectLocationData,
  selectCurrentWeatherIsLoading,
  selectLocationisLoading,
} from "@/lib/redux";

import styles from "./locationpanel.module.css";

/* Components */
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";
import { LocationName } from "./LocationName/LocationName";
import { MainIcon } from "./MainIcon/MainIcon";
import { LocalDate } from "./LocalDate/LocalDate";

export const LocationPanel = () => {
  const location = useSelector(selectLocationData);
  const locationIsLoading = useSelector(selectLocationisLoading);
  const weatherIsLoading = useSelector(selectCurrentWeatherIsLoading);

  return (
    <div className={styles.LocationPanel}>
      {locationIsLoading || weatherIsLoading?(
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

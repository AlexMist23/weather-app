"use client";

/* Core */
import { useEffect } from "react";

/* Instruments */
import {
  useSelector,
  selectLocation,
  selectCurrentWeatherData,
  setCurrentWeatherAsync,
  selectTemperatureScale,
  useDispatch,
} from "@/lib/redux";

import styles from "./locationpanel.module.css";
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";
import { Location } from "./Location/Location";

export const LocationPanel = () => {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const currentWeather = useSelector(selectCurrentWeatherData);
  const temperatureScale = useSelector(selectTemperatureScale);

  const currentWheatherUpdate = () => {
    dispatch(setCurrentWeatherAsync({ lat: location.lat, lon: location.lon }));
  };

  useEffect(() => {
    currentWheatherUpdate();
  }, [location]);

  return (
    <div className={styles.LocationPanel}>
      <Location
        name={location.name}
        country={location.country}
        state={location.state}
      />
      <CurrentWeather
        currentWheather={currentWeather}
        temperatureScale={temperatureScale}
      />
    </div>
  );
};

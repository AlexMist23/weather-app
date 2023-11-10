"use client";

/* Core */
import { useEffect } from "react";

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectLocation,
  selectCurrentWeatherData,
  selectTemperatureScale,
  setCurrentWeatherAsync,
} from "@/lib/redux";

import styles from "./locationpanel.module.css";

/* Components */
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";
import { Location } from "./LocationName/LocationName";
import { MainIcon } from "./MainIcon/MainIcon";

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
      <MainIcon iconName={currentWeather?.weather[0].icon}/>
      <CurrentWeather
        currentWheather={currentWeather}
        temperatureScale={temperatureScale}
      />
    </div>
  );
};

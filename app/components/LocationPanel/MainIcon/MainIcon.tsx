"use client";
import {
  selectCurrentWeatherData,
  selectCurrentWeatherStatus,
  selectTemperatureScale,
  useSelector,
} from "@/lib/redux";

import { tempConvert } from "@/lib/tempConvert";
/* Instruments */
import styles from "./mainicon.module.css";

export const MainIcon = () => {
  const scale = useSelector(selectTemperatureScale);
  const isLoading = useSelector(selectCurrentWeatherStatus);
  const currentWeather = useSelector(selectCurrentWeatherData);
  const iconName = currentWeather?.weather[0].icon;
  const temp = currentWeather?.main.temp;

  const iconsPath = "./static/images/";
  return (
    <div className={styles.div}>
      {isLoading && !temp ? (
        <div className={styles.loader} />
      ) : (
        <>
          <img
            className={styles.img}
            src={iconsPath + iconName + ".svg"}
            alt=""
          />
          <p className={styles.p}>{tempConvert(temp, scale)}</p>
        </>
      )}
    </div>
  );
};

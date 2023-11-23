"use client";
import {
  selectCurrentWeatherData,
  selectCurrentWeatherStatus,
  selectTemperatureScale,
  useSelector,
} from "@/lib/redux";

import Image from "next/image";
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
          <Image
          src={iconsPath + iconName + ".svg"}
          height={200}
          width={200}
          alt="current weather icon"
          loading="lazy"
          />
          <p className={styles.p}>{tempConvert(temp, scale)}</p>
        </>
      )}
    </div>
  );
};

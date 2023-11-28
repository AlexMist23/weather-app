"use client";
import type { currentWeather } from "@/lib/redux";
import {
  selectCurrentWeather,
  selectTemperatureScale,
  useSelector,
} from "@/lib/redux";

import Image from "next/image";
import { tempConvert } from "@/lib/tempConvert";
/* Instruments */
import styles from "./mainicon.module.css";

export const MainIcon: React.FC<{ weather: currentWeather }> = ({
  weather,
}) => {
  const { name: tempScale, symbol: scaleSymbol } = useSelector(
    selectTemperatureScale
  );
  const { icon: iconName, main: iconAlt } = weather.weather[0];
  const { temp } = weather.main;

  const iconsPath = "/static/images/";
  return (
    <div className={styles.div}>
      <>
        <Image
          src={iconsPath + iconName + ".svg"}
          height={150}
          width={150}
          alt={`${iconAlt} icon`}
          loading="lazy"
        />
        <p className={styles.p}>
          {tempConvert(temp, tempScale)}
          {scaleSymbol}
        </p>
      </>
    </div>
  );
};

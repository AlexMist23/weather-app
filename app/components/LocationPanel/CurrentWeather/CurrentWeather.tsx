"use client";

/* Instruments */

import {
  useSelector,
  selectTemperatureScale,
  selectTemperatureSymbol,
  type currentWeather,
} from "@/lib/redux";

import { breezeCalc } from "@/lib/breezeCalc";
import { tempConvert } from "@/lib/tempConvert";
import styles from "./currentweather.module.css";
import Image from "next/image";
import { dewPointCalc } from "@/lib/dewPointCalc";

export const CurrentWeather: React.FC<{ weather: currentWeather }> = ({
  weather,
}) => {
  const currentWeather = weather!;
  const tempScale = useSelector(selectTemperatureScale);
  const tempSymbol = useSelector(selectTemperatureSymbol);

  const { pressure, humidity, feels_like, temp } = currentWeather.main;
  const { speed: windSpeed, deg: windDeg } = currentWeather.wind;
  const { description } = currentWeather.weather[0];

  const feelsLike = tempConvert(feels_like, tempScale);
  const dewPointTemp = tempConvert(dewPointCalc(temp, humidity), tempScale);

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <span className={styles.span}>
          {`Feels like ${feelsLike}${tempSymbol}.`}
        </span>
        <span className={styles.span}>{description}.</span>
        <span className={styles.span}>{breezeCalc(windSpeed!)}.</span>
      </div>

      <p className={styles.p}>
        <Image
          className={styles.pressureIcon}
          src={"/static/images/pressure-icon.svg"}
          height={20}
          width={20}
          alt="pressure-icon"
        />
        {pressure}hPa
      </p>
      <p className={styles.p}>Humidity: {humidity}%</p>
      <p className={styles.p}>
        Dew Point: {dewPointTemp}
        {tempSymbol}
      </p>
    </div>
  );
};

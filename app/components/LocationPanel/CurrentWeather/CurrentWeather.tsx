"use client";

/* Instruments */

import {
  useSelector,
  selectTemperatureScale,
  type currentWeather,
} from "@/lib/redux";

import { breezeCalc } from "@/lib/breezeCalc";
import { tempConvert } from "@/lib/tempConvert";
import styles from "./currentweather.module.css";
import Image from "next/image";
import { dewPointCalc } from "@/lib/dewPointCalc";
import { windDegToString } from "@/lib/windDegToString";

export const CurrentWeather: React.FC<{ weather: currentWeather }> = ({
  weather,
}) => {
  const currentWeather = weather!;
  const { name: tempScale, symbol: scaleSymbol } = useSelector(
    selectTemperatureScale
  );
  const { visibility } = currentWeather
  const { pressure, humidity, feels_like, temp } = currentWeather.main;
  const { speed: windSpeed, deg: windDeg } = currentWeather.wind;
  const { description } = currentWeather.weather[0];


  const feelsLike = tempConvert(feels_like, tempScale);
  const dewPointTemp = tempConvert(dewPointCalc(temp, humidity), tempScale);

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <span className={styles.span}>
          {`Feels like ${feelsLike}${scaleSymbol}.`}
        </span>
        <span className={styles.span}>{description}.</span>
        <span className={styles.span}>{breezeCalc(windSpeed!)}.</span>
      </div>

      <p className={styles.p}>
        <Image
          style={{ transform: `rotate(${windDeg}deg)` }}
          src={"/static/images/wind-arrow-icon.svg"}
          height={20}
          width={20}
          alt="wind arrow icon"
        />{" "}
        {windSpeed}m/s {windDegToString(windDeg)}
      </p>
      <p className={styles.p}>
        <Image
          src={"/static/images/pressure-icon.svg"}
          height={20}
          width={20}
          alt="pressure icon"
        />
        {pressure}hPa
      </p>
      <p className={styles.p}>Humidity: {humidity}%</p>
      <p className={styles.p}>
        Dew Point: {dewPointTemp}
        {scaleSymbol}
      </p>
      <p>Visibility: {(visibility / 1000).toFixed(1)}km</p>
    </div>
  );
};

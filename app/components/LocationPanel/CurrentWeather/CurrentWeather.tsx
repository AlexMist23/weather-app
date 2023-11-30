/* Core */ 
import Image from "next/image";

/* Instruments */
import { useSelector } from "@/lib/redux";
import {
  selectTemperatureScale,
  type CurrentWeatherData,
} from "@/lib/redux";

import { breezeCalc } from "@/lib/breezeCalc"; // Importing breeze calculation function
import { tempConvert } from "@/lib/tempConvert"; // Importing temperature conversion function
import { dewPointCalc } from "@/lib/dewPointCalc"; // Importing dew point calculation function
import { windDegToString } from "@/lib/windDegToString"; // Importing wind degree conversion function

/* CSS */
import styles from "./currentweather.module.css"; // Importing styles for the current weather component


export const CurrentWeather: React.FC<{ weather: CurrentWeatherData }> = ({ 
  weather,
}) => {
  const currentWeather = weather!; // Assigning weather data to 'currentWeather' variable

  const { name: tempScale, symbol: scaleSymbol } = useSelector( // Extracting temperature scale and symbol from Redux
    selectTemperatureScale
  );

  const { // Destructuring weather data for easier access
    visibility,
    main: { pressure, humidity, feels_like: feelsLike, temp },
    wind: { speed: windSpeed, deg: windDeg },
    weather: [{ description }],
  } = currentWeather;

  const [imgHeight, imgWidth] = [20, 20];

  const convertedFeelsLike = tempConvert(feelsLike, tempScale); // Converting 'feelsLike' temperature to selected scale
  const dewPointTemp = tempConvert(dewPointCalc(temp, humidity), tempScale); // Calculating and converting dew point temperature

  return (
    <div className={styles.container}> 
      <div className={styles.description}> 
        <span className={styles.span}>
          {`Feels like ${convertedFeelsLike}${scaleSymbol}.`} {/* Displaying 'Feels like' temperature */}
        </span>
        <span className={styles.span}>{description}.</span> {/* Displaying weather description */}
        <span className={styles.span}>{breezeCalc(windSpeed!)}.</span> {/* Displaying breeze information */}
      </div>

      <p className={styles.p}>
        <Image
          style={{ transform: `rotate(${windDeg}deg)` }} // Rotating the wind arrow icon
          src={"/static/images/wind-arrow-icon.svg"}
          height={imgHeight}
          width={imgWidth}
          alt="wind arrow icon"
        />{" "}
        {windSpeed}m/s {windDegToString(windDeg)} {/* Displaying wind speed and direction */}
      </p>
      <p className={styles.p}>
        <Image
          src={"/static/images/pressure-icon.svg"}
          height={imgHeight}
          width={imgWidth}
          alt="pressure icon"
        />
        {pressure}hPa {/* Displaying pressure */}
      </p>
      <p className={styles.p}>Humidity: {humidity}%</p> {/* Displaying humidity */}
      <p className={styles.p}>
        Dew Point: {dewPointTemp}
        {scaleSymbol} {/* Displaying dew point temperature */}
      </p>
      <p>Visibility: {(visibility / 1000).toFixed(1)}km</p> {/* Displaying visibility */}
    </div>
  );
};

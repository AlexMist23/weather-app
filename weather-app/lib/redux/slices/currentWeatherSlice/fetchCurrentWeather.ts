import { APIKey } from "./APIKey";
import { type currentWeather } from "./currentWeatherSlice";

export const fetchCurrentWeather = async (coord: {
  lon: number;
  lat: number;
}): Promise<currentWeather> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${APIKey}`
  );
  let result = await response.json();
  return result;
};

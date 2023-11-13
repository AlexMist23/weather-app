import { type currentWeather } from "./currentWeatherSlice";

export const fetchCurrentWeather = async (coord: {
  lon: number;
  lat: number;
}): Promise<{ data: currentWeather }> => {
  const response = await fetch("/api/current-weather", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ coord }),
  });
  let result = await response.json();
  return result;
};

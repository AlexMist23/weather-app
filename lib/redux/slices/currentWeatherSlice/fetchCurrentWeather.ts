import { CurrentWeather } from "./currentWeatherSlice";

export const fetchCurrentWeather = async (coord: {
  lon: number;
  lat: number;
}): Promise<{ data: CurrentWeather }> => {
  const response = await fetch("/api/current-weather", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ coord }),
  });

  const result = await response.json();
  return result;
};

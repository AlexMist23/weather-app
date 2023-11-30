import { CurrentWeatherData } from "./currentWeatherSlice";

export const fetchCurrentWeather = async (coord: {
  lon: number;
  lat: number;
}): Promise<{ data: CurrentWeatherData }> => {
  const response = await fetch("/api/current-weather", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ coord }),
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
  const result = await response.json();
  return result;
};

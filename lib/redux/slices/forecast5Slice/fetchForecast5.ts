import { type forecast5Data } from "./forecast5Slice";

export const fetchForecast5 = async (coord: {
  lon: number;
  lat: number;
}): Promise<{ data: forecast5Data }> => {
  const response = await fetch("/api/forecast5", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ coord }),
  });
  let result = await response.json();
  return result;
};

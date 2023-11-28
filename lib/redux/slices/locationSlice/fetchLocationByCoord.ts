import { type locationData } from "../..";

export const fetchLocationByCoord = async (
  lon: number,
  lat: number
): Promise<{
  data: locationData;
}> => {
  const response = await fetch("/api/location-by-coord", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lon, lat }),
  });

  let result = await response.json();

  return result;
};

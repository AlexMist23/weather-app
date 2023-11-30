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
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
  const result = await response.json();
  return result;
};

import { type LocationData } from "../..";

export const fetchLocationList = async (
  city: string
): Promise<{ data: LocationData[] }> => {
  const response = await fetch("/api/location-list", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ city }),
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
  const result = await response.json();
  return result;
};

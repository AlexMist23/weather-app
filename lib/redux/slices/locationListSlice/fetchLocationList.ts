import { type locationData } from "../..";

export const fetchLocationList = async (
  city: string
): Promise<{ data: Array<locationData> }> => {
  const response = await fetch("/api/location-list", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ city }),
  });

  let result = await response.json();

  return result;
};

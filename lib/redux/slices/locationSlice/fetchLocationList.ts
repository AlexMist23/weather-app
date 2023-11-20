export const fetchLocationList = async (
  city: string
): Promise<{
  data: Array<{
    name: String;
    country: String;
    state: String;
    lat: number;
    lon: number;
  }>;
}> => {
  const response = await fetch("/api/location-list", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ city }),
  });

  let result = await response.json();

  return result;
};

export const fetchLocationList = async (
  city: string
): Promise<{
  data: Array<{
    name: string;
    country: string;
    state: string;
    lat: number;
    lon: number;
    local_names: any;
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

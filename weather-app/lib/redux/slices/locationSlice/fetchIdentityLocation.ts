import { APIKey } from "./APIKey";

export const fetchIdentityLocation = async (
  city: string = ""
): Promise<Array<{
  name: String;
  country: String;
  state: String;
  lat: number;
  lon: number;
}>> => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`
  );
  let result = await response.json();
  return result;
};

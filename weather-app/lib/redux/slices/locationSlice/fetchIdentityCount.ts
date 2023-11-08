import { APIKey } from "./APIKey"

export const fetchIdentityLocation = async (
  amount = 1
): Promise<{ data: number }> => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  })
  const result = await response.json()

  return result
}

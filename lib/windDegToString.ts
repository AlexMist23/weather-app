export function windDegToString(windDeg: number): string {
  // Cardinal and intercardinal directions
  const directions = [
    "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
    "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
  ];

  // Calculate index based on the wind degree
  const index = Math.round((windDeg % 360) / 22.5) % 16;

  return directions[index]; // Return the direction based on the index
}

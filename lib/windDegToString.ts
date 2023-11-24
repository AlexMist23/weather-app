export function windDegToString(windDeg: number): string {
    const directions = [
      "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
      "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
    ];
  
    const sectorSize = 360 / directions.length;
    const index = Math.round((windDeg % 360) / sectorSize);
  
    return directions[index];
  }
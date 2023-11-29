/**
 * Calculates the dew point temperature in degrees Celsius / Kelvins.
 * @param {number} temp - Observed temperature in degrees Celsius / Kelvins.
 * @param {number} rh - Relative humidity in degrees Celsius / Kelvins.
 * @returns {number} - Dew point temperature in degrees Celsius / Kelvins.
 */
export function dewPointCalc(temp: number, rh: number): number {
    const dewPoint = Math.round(temp - ((100 - rh) / 5));
    return dewPoint;
  }
  
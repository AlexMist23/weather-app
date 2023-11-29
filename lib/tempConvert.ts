/**
 * Converts temperature between Kelvin, Celsius, and Fahrenheit scales.
 * @param {number} temp - Temperature value to be converted.
 * @param {('kelvin' | 'celsius' | 'fahrenheit')} scale - Target temperature scale ('kelvin', 'celsius', or 'fahrenheit').
 * @param {boolean} round - Whether to round the converted temperature. Defaults to true.
 * @returns {number} - Converted temperature value.
 */
export const tempConvert = (
  temp: number,
  scale: 'kelvin' | 'celsius' | 'fahrenheit',
  round = true
): number => {
  let convertedNum: number;
  
  switch (scale.toLowerCase()) {
    case 'kelvin':
      convertedNum = temp;
      break;
    case 'celsius':
      convertedNum = temp - 273.15;
      break;
    case 'fahrenheit':
      convertedNum = temp * 1.8 - 459.67;
      break;
    default:
      throw new Error('Invalid temperature scale provided. Use "kelvin", "celsius", or "fahrenheit".');
  }

  return round ? Math.round(convertedNum) : convertedNum;
};

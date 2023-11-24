export const tempConvert = (temp: number, scale: string): number => {
  let convertedNum = null
  if (scale == "Celcius") convertedNum = (temp - 273.15)
  else convertedNum = (temp * 1.8 - 459.67)
  return Math.round(convertedNum)
};

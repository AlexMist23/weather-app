export const tempConvert = (
  temp: number | undefined,
  scale: string
) => {
  if (!temp) return
  if (scale == "Celcius") return `${(temp - 273.15).toFixed(0)}°C`;
  else return `${(temp * 1.8 - 459.67).toFixed(0)}°F`;
};

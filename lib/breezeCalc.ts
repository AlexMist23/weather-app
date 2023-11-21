export const breezeCalc = (wind: number) => {
  const windDescriptions = [
    { min: 0.0, max: 0.3, description: "Calm" },
    { min: 0.3, max: 1.6, description: "Light Air" },
    { min: 1.6, max: 3.4, description: "Light breeze" },
    { min: 3.4, max: 5.5, description: "Gentle breeze" },
    { min: 5.5, max: 8.0, description: "Moderate breeze" },
    { min: 8.0, max: 10.8, description: "Fresh breeze" },
    { min: 10.8, max: 13.9, description: "Strong breeze" },
    { min: 13.9, max: 17.2, description: "Moderate gale" },
    { min: 17.2, max: 20.8, description: "Fresh gale" },
    { min: 20.8, max: 24.5, description: "Strong gale" },
    { min: 24.5, max: 28.5, description: "Whole gale" },
    { min: 28.5, max: 32.7, description: "Storm" },
    { min: 32.7, max: Infinity, description: "Hurricane" },
  ];

  for (const range of windDescriptions) {
    if (wind >= range.min && wind < range.max) {
      return range.description;
    }
  }

  return "";
};

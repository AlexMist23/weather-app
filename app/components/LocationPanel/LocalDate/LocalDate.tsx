/* Instruments */
import type { CurrentWeatherData } from "@/lib/redux";

export const LocalDate: React.FC<{ weather: CurrentWeatherData }> = ({ weather }) => {
  const date = weather && new Date(+`${weather?.dt}000`); // Creating a Date object based on weather data

  const getLang = () => {
    // Function to determine the language based on browser settings
    return navigator.languages ? navigator.languages[0] : navigator.language;
  };

  return (
    <p>
      {date && // Conditional rendering to check if 'date' exists
        date.toLocaleString(getLang(), {
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
    </p>
  );
};

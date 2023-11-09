/* Instruments */
import { locationSlice, currentWeatherSlice } from "./slices";

export const reducer = {
  location: locationSlice.reducer,
  currentWeather: currentWeatherSlice.reducer,
};

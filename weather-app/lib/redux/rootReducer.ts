/* Instruments */
import {
  locationSlice,
  currentWeatherSlice,
  temperatureScaleSlice,
} from "./slices";

export const reducer = {
  location: locationSlice.reducer,
  currentWeather: currentWeatherSlice.reducer,
  temperatureScale: temperatureScaleSlice.reducer,
};

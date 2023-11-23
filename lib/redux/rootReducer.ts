/* Instruments */
import {
  locationSlice,
  locationListSlice,
  currentWeatherSlice,
  temperatureScaleSlice,
} from "./slices";

export const reducer = {
  location: locationSlice.reducer,
  locationList: locationListSlice.reducer,
  currentWeather: currentWeatherSlice.reducer,
  temperatureScale: temperatureScaleSlice.reducer,
};

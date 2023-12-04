/* Instruments */
import {
  locationSlice,
  locationListSlice,
  currentWeatherSlice,
  temperatureScaleSlice,
  forecast5Slice,
  activeDateSlice,
} from "./slices";

export const reducer = {
  location: locationSlice.reducer,
  locationList: locationListSlice.reducer,
  currentWeather: currentWeatherSlice.reducer,
  temperatureScale: temperatureScaleSlice.reducer,
  forecast5: forecast5Slice.reducer,
  activeDate: activeDateSlice.reducer,
};

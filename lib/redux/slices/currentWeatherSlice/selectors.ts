/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectCurrentWeatherData = (state: ReduxState) =>
  state.currentWeather.data;
export const selectCurrentWeatherIsLoading = (state: ReduxState) =>
  state.currentWeather.isLoading;

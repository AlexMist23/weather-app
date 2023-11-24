/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectForecast5Data = (state: ReduxState) =>
  state.currentWeather.data;
export const selectForecast5isLoading = (state: ReduxState) =>
  state.currentWeather.isLoading;

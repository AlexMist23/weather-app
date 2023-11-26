/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectForecast5 = (state: ReduxState) =>
  state.currentWeather

/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectCurrentWeather = (state: ReduxState) => state.currentWeather;

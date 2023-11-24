/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectTemperatureScale = (state: ReduxState) =>
  state.temperatureScale.scale;

  export const selectTemperatureSymbol = (state: ReduxState) =>
  state.temperatureScale.symbol;

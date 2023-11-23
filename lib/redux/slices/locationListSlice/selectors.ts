/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectLocationList = (state: ReduxState) =>
  state.locationList;
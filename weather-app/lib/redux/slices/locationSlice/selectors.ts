/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectLocation = (state: ReduxState) => state.location.location;
export const selectLocationList = (state: ReduxState) =>
  state.location.locationList;

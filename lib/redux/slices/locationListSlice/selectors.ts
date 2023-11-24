/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectLocationListData = (state: ReduxState) =>
  state.locationList.data;

export const selectLocationListisLoading = (state: ReduxState) =>
  state.locationList.isLoading;

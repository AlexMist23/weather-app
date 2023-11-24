/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectLocationData = (state: ReduxState) => state.location.data;
export const selectLocationisLoading = (state: ReduxState) => state.location.isLoading;

/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectLocation = (state: ReduxState) => state.location.data;

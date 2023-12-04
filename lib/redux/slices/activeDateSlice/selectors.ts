/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectActiveDate = (state: ReduxState) => state.activeDate;

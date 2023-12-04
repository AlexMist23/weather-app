/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Types */
import type { LocationData } from "../..";

/* Instruments */
import { setLocationListAsync } from "./thunks";

// State
export interface LocationListSliceState {
  data: LocationData[] | [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LocationListSliceState = {
  data: [],
  status: "idle",
  error: null,
};

// Slice
export const locationListSlice = createSlice({
  name: "locationList",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLocationListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setLocationListAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(setLocationListAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      });
  },
});

/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Types */
import type { locationData } from "../..";

/* Instruments */
import { setLocationListAsync } from "./thunks";

const initialState: locationListSliceState = {
  data: [],
  status: "idle",
  error: null,
};

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

/* Types */
export interface locationListSliceState {
  data: Array<locationData> | [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

/* Core */
import { createSlice } from "@reduxjs/toolkit";

import type { location } from "../..";

/* Instruments */
import { setLocationListAsync } from "./thunks";

const initialState: locationListSliceState = {
  isLoading: false,
  data: [],
};

export const locationListSlice = createSlice({
  name: "locationList",
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = [];
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLocationListAsync.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(setLocationListAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

/* Types */
export interface locationListSliceState {
  data: Array<location> | [];
  isLoading: boolean;
}

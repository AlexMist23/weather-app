/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationListAsync } from "./thunks";

const initialState: locationListSliceState = {
  isLoading: false,
  data: [],
};

export const locationListSlice = createSlice({
  name: "locationList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    clearData: (state) => {
      state.data = [];
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
  data: Array<{
    name: string;
    country: string;
    state: string;
    lat: number;
    lon: number;
    local_names: any;
  }>;
  isLoading: boolean;
}
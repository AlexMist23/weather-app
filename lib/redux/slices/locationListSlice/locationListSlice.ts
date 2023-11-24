/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationListAsync } from "./thunks";

const initialState: locationListSliceState = {
  isLoading: false,
  data: null,
};

export const locationListSlice = createSlice({
  name: "locationList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    clearData: (state) => {
      state.data = null;
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
        // return state = {...state, isLoading: false, data: action.payload}
      });
  },
});

/* Types */
export interface locationListSliceState {
  data: locationList | null;
  isLoading: boolean;
}

export interface locationList {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
  local_names: Record<string, string>;
}

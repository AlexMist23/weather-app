/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationByCoordAsync } from "./thunks";

const initialState: locationSliceState = {
  data: null,
  isLoading: false
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<locationData>) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLocationByCoordAsync.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(setLocationByCoordAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

/* Types */
export interface locationSliceState {
  data: locationData | null;
  isLoading: boolean;
}
export interface locationData {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
  local_names: any;
}

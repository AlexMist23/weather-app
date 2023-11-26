/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationByCoordAsync } from "./thunks";

const initialState: locationSliceState = {
  data: null,
  status: "idle",
  error: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<locationData>) => {
      state.data = action.payload;
      state.status = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLocationByCoordAsync.pending, (state) => {
        state.status = "idle";
      })
      .addCase(setLocationByCoordAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(setLocationByCoordAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      });
  },
});

/* Types */
export interface locationSliceState {
  data: locationData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
export interface locationData {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
  local_names: any;
}

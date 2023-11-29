/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationByCoordAsync } from "./thunks";

// State
export interface locationSliceState {
  data: locationData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: locationSliceState = {
  data: null,
  status: "idle",
  error: null,
};

// Slice
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
      .addCase(setLocationByCoordAsync.fulfilled, (state, action: PayloadAction<locationData>) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(setLocationByCoordAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

// Types
export interface locationData {
  name: string; // Name of the found location 
  country: string; // Country of the found location 
  state: string | undefined; // (where available) State of the found location 
  lat: number; // Geographical coordinates of the found location (latitude) 
  lon: number; // Geographical coordinates of the found location (longitude) 
  local_names: Record<string, string>; // Name of the found location in different languages. The list of names can be different for different locations 
}

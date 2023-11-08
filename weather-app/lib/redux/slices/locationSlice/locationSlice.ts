/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationAsync } from "./thunks";

const initialState: locationSliceState = {
  location:{
    name: "London",
    country: "GB",
    state: "England",
    lat: 51.5073219,
    lon: -0.1276474,
  },
  status: 'idle',
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    set: (state, action) => {
      state.location.name = action.payload.name;
      state.location.country = action.payload.country;
      state.location.state = action.payload.state;
      state.location.lat = action.payload.lat;
      state.location.lon = action.payload.lon;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLocationAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setLocationAsync.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

/* Types */
export interface locationSliceState {
  
  location:{
    name: String;
    country: String;
    state: String;
    lat: number;
    lon: number;
  }
  status: string;
}

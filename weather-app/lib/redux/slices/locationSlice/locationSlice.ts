/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationAsync } from "./thunks";

const initialState: locationSliceState = {
  location: {
    name: "London",
    country: "GB",
    state: "England",
    lat: 51.5073219,
    lon: -0.1276474,
  },
  status: "idle",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    set: (state, action) => {
      state.location = {
        name: action.payload.name,
        country: action.payload.country,
        state: action.payload.state,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLocationAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setLocationAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.location = {
          name: action.payload[0].name,
          country: action.payload[0].country,
          state: action.payload[0].state,
          lat: action.payload[0].lat,
          lon: action.payload[0].lon,
        };
      });
  },
});

/* Types */
export interface locationSliceState {
  location: {
    name: String;
    country: String;
    state: String;
    lat: number;
    lon: number;
  };
  status: string;
}

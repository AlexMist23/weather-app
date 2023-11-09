/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationListAsync } from "./thunks";

const initialState: locationSliceState = {
  locationList: [],
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
    setLocation: (state, action: PayloadAction<location>) => {
      return (state = {
        ...state,
        location: {
          name: action.payload.name,
          country: action.payload.country,
          state: action.payload.state,
          lat: action.payload.lat,
          lon: action.payload.lon,
        },
      });
    },
    clearLocationList: (state) => {
      return (state = {
        ...state,
        locationList: [],
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLocationListAsync.pending, (state) => {
        state = { ...state, status: "loading" };
      })
      .addCase(setLocationListAsync.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "idle",
          locationList: [...action.payload],
        });
      });
  },
});

/* Types */
export interface location {
  name: String;
  country: String;
  state: String;
  lat: number;
  lon: number;
}

export interface locationSliceState {
  locationList: Array<location>;
  location: location;
  status: string;
}

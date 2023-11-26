/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Instruments */
import { setCurrentWeatherAsync } from "./thunks";

const initialState: currentWeatherSliceState = {
  data: null,
  status: "idle",
  error: null,
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCurrentWeatherAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setCurrentWeatherAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(setCurrentWeatherAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      });
  },
});

/* Types */

export interface currentWeatherSliceState {
  data: currentWeather | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface currentWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  rain: { "1h": number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

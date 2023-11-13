/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Instruments */
import { setCurrentWeatherAsync } from "./thunks";

const initialState: currentWeatherSliceState = {
  data: null,
  isLoaded: false,
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    clearData: (state) => {
      return (state = {
        ...state,
        data: null,
        isLoaded: false,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCurrentWeatherAsync.pending, (state) => {
        state = { ...state, isLoaded: false };
      })
      .addCase(setCurrentWeatherAsync.fulfilled, (state, action) => {
        return (state = {
          ...state,
          isLoaded: true,
          data: { ...action.payload },
        });
      });
  },
});

/* Types */

export interface currentWeatherSliceState {
  data: currentWeather | null;
  isLoaded: boolean;
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

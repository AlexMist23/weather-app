/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setCurrentWeatherAsync } from "./thunks";

const initialState: currentWeatherSliceState = {
  data: {
    coord: { lon: -0.1278, lat: 51.5074 },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10n" },
    ],
    base: "stations",
    main: {
      temp: 280.82,
      feels_like: 277.77,
      temp_min: 279,
      temp_max: 282.14,
      pressure: 992,
      humidity: 85,
    },
    visibility: 10000,
    wind: { speed: 5.14, deg: 240 },
    rain: { "1h": 0.91 },
    clouds: { all: 40 },
    dt: 1699556028,
    sys: {
      type: 2,
      id: 2075535,
      country: "GB",
      sunrise: 1699513644,
      sunset: 1699546876,
    },
    timezone: 0,
    id: 2643743,
    name: "London",
    cod: 200,
  },
  status: "idle",
};

export const currentWeatherSlice = createSlice({
  name: "broadcast",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    clear: (state) => {
      return (state = {
        ...state,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCurrentWeatherAsync.pending, (state) => {
        state = { ...state, status: "loading" };
      })
      .addCase(setCurrentWeatherAsync.fulfilled, (state, action) => {
        return (state = {
          ...state,
          status: "idle",
          data: { ...action.payload },
        });
      });
  },
});

/* Types */

export interface currentWeatherSliceState {
  data: currentWeather;
  status: string;
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

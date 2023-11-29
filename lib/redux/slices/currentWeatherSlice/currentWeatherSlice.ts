/* Core */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setCurrentWeatherAsync } from "./thunks";

// State
export interface CurrentWeatherState {
  data: CurrentWeather | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CurrentWeatherState = {
  data: null,
  status: "idle",
  error: null,
};

// Slice
export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    resetState: () => initialState,
    setCurrentWeather: (state, action: PayloadAction<CurrentWeather>) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    setCurrentWeatherError: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
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
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

// Types
export interface CurrentWeather {
  coord: {
    lon: number; // Longitude of the location
    lat: number; // Latitude of the location
  };
  weather: {
    id: number; // Weather condition id
    main: string; // Group of weather parameters (Rain, Snow, Clouds etc.)
    description: string; // Weather condition within the group
    icon: string; // Weather icon id
  }[];
  base: string; // Internal parameter
  main: {
    temp: number; // Temperature. Unit Default: Kelvin
    feels_like: number; // Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin
    temp_min: number; // Atmospheric pressure on the sea level, hPa
    temp_max: number; // Humidity, %
    pressure: number; // Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin
    humidity: number; // Maximum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin
  };
  visibility: number; // Visibility, meter. The maximum value of the visibility is 10 km
  wind: {
    speed: number; // Wind speed. Unit Default: meter/sec
    deg: number; // Wind gust. Unit Default: meter/sec
  };
  clouds: { all: number }; // Cloudiness, %
  rain: {
    "1h": number | undefined; // Rain volume for the last 1 hour, mm
    "3h": number | undefined; // Rain volume for the last 3 hour, mm
  };
  snow: {
    "1h": number | undefined; // Snow volume for the last 1 hour, mm
    "3h": number | undefined; // Snow volume for the last 3 hour, mm
  };
  dt: number; // Time of data calculation, unix, UTC
  sys: {
    type: number; // Internal parameter
    id: number; // Internal parameter
    message: string; // Internal parameter
    country: string; // Country code (GB, JP etc.)
    sunrise: number; // Sunrise time, unix, UTC
    sunset: number; // Sunset time, unix, UTC
  };
  timezone: number; // Shift in seconds from UTC
  id: number; // [DEPRECATED] City ID
  name: string; // [DEPRECATED] City name
  cod: number; // Internal parameter
}

/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Instruments */
import { setForecast5Async } from "./thunks";

const initialState: forecast5SliceState = {
  data: null,
  isLoading: true,
};

export const forecast5Slice = createSlice({
  name: "forecast5",
  initialState,
  reducers: {
    resetState: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setForecast5Async.pending, (state) => {
        state = { ...state, isLoading: true };
      })
      .addCase(setForecast5Async.fulfilled, (state, action) => {
        return (state = {
          ...state,
          isLoading: false,
          data: { ...action.payload },
        });
      });
  },
});

/* Types */

export interface forecast5SliceState {
  data: forecast5Data | null;
  isLoading: boolean;
}

export interface forecast5Data {
  cod: string; // Internal parameter
  message: number; // Internal parameter
  cnt: number; // A number of timestamps returned in the API response
  list: Array<forecast5ListElement>;
  city: forecast5City;
}

interface forecast5ListElement {
  dt: number; // Time of data forecasted, unix, UTC
  main: {
    temp: number; // Temperature. Unit Default: Kelvin
    feels_like: number; // This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin
    temp_min: number; // Minimum temperature at the moment of calculation. This is minimal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Please find more info here. Unit Default: Kelvin
    temp_max: number; // Maximum temperature at the moment of calculation. This is maximal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Please find more info here. Unit Default: Kelvin
    pressure: number; // Atmospheric pressure on the sea level by default, hPa
    sea_level: number; // Atmospheric pressure on the sea level, hPa
    grnd_level: number; // Atmospheric pressure on the ground level, hPa
    humidity: number; // Humidity, %
    temp_kf: number; // Internal parameter
  };
  weather: [
    {
      id: number; // Weather condition id
      main: string; // Group of weather parameters (Rain, Snow, Clouds etc.)
      description: string; // Weather condition within the group.
      icon: string; // Weather icon id
    }
  ];
  clouds: {
    all: number; // Cloudiness, %
  };
  wind: {
    speed: number; // Wind speed. Unit Default: meter/sec
    deg: number; // Wind direction, degrees (meteorological)
    gust: number; // Wind gust. Unit Default: meter/sec
  };
  visibility: number; // Average visibility, metres. The maximum value of the visibility is 10km
  pop: 0.32; // Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
  rain: {
    "3h": number; // Rain volume for last 3 hours, mm
  };
  snow: {
    "3h": number; // Snow volume for last 3 hours, mm
  };
  sys: {
    pod: "n" | "d"; // Part of the day (n - night, d - day)
  };
  dt_txt: string; // Time of data forecasted, ISO, UTC
}

interface forecast5City {
  id: number; // City ID
  name: string; // City name
  coord: {
    lat: number; // Geo location, latitude
    lon: number; // Geo location, longitude
  };
  country: string; // Country code (GB, JP etc.).
  population: number; // City population
  timezone: number; // Shift in seconds from UTC
  sunrise: number; // Sunrise time, Unix, UTC
  sunset: number; // Sunset time, Unix, UTC
}

/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: temperatureScaleSliceState = {
  name: "celsius",
  symbol: "°C",
};

export const temperatureScaleSlice = createSlice({
  name: "temperatureScale",
  initialState,
  reducers: {
    changeToCelcius: (state) => {
      return (state = { name: "celsius", symbol: "°C" });
    },
    changeToFahrenheit: (state) => {
      return (state = { name: "fahrenheit", symbol: "°F" });
    },
    changeToKelvin: (state) => {
      return (state = { name: "kelvin", symbol: "K" });
    },
  },
});

/* Types */

export interface temperatureScaleSliceState {
  name: "kelvin" | "celsius" | "fahrenheit";
  symbol: "K" | "°C" | "°F";
}

/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: temperatureScaleSliceState = {
  name: "Celcius",
  symbol: "°C"
};

export const temperatureScaleSlice = createSlice({
  name: "temperatureScale",
  initialState,
  reducers: {
    changeToCelcius: (state) => {
      return (state = { name: "Celcius", symbol: "°C" });
    },
    changeToFahrenheit: (state) => {
      return (state = { name: "Fahrenheit", symbol: "°F" });
    },
  },
});

/* Types */

export interface temperatureScaleSliceState {
  name: string;
  symbol: string;
}

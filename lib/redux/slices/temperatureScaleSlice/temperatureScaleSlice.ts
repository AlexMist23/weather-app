/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: temperatureScaleSliceState = {
  scale: "Celcius",
  symbol: "°C"
};

export const temperatureScaleSlice = createSlice({
  name: "temperatureScale",
  initialState,
  reducers: {
    changeToCelcius: (state) => {
      return (state = { scale: "Celcius", symbol: "°C" });
    },
    changeToFahrenheit: (state) => {
      return (state = { scale: "Fahrenheit", symbol: "°F" });
    },
  },
});

/* Types */

export interface temperatureScaleSliceState {
  scale: string;
  symbol: string;
}

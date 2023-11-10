/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: temperatureScaleSliceState = {
  scale: "Celcius",
};

export const temperatureScaleSlice = createSlice({
  name: "temperatureScale",
  initialState,
  reducers: {
    changeToCelcius: (state) => {
      return state = {scale: 'Celcius'}
    },
    changeToFahrenheit: (state) => {
      return state = {scale: 'Fahrenheit'}
    },
  },
});

/* Types */

export interface temperatureScaleSliceState {
  scale: string;
}

/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// State
export interface activeDateState {
  dt: number
}

const initialState = {
  dt: new Date().getTime()
};

// Slice
export const activeDateSlice = createSlice({
  name: "activeDate",
  initialState,
  reducers: {
    setYear: (state, action:PayloadAction<number>) => {
      state.dt = new Date(state.dt).setFullYear(action.payload)
    },
    setMonth: (state, action:PayloadAction<number>) => {
      state.dt = new Date(state.dt).setMonth(action.payload)
    },
    setDay: (state, action:PayloadAction<number>) => {
      state.dt = new Date(state.dt).setDate(action.payload)
    },
    setHour: (state, action:PayloadAction<number>) => {
      state.dt = new Date(state.dt).setHours(action.payload)
    },
  },
});

/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// State
export interface activeDateState {
  year: number,
  month: number,
  day: number,
  hour: number,
}

const initialState = (date = new Date()) => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
  hour: date.getHours(),
});

// Slice
export const activeDateSlice = createSlice({
  name: "activeDate",
  initialState,
  reducers: {
    setYear: (state, action:PayloadAction<number>) => {
      state.year = action.payload;
    },
    setMonth: (state, action:PayloadAction<number>) => {
      state.month = action.payload;
    },
    setDay: (state, action:PayloadAction<number>) => {
      state.day = action.payload;
    },
    setHour: (state, action:PayloadAction<number>) => {
      state.hour = action.payload;
    },
  },
});

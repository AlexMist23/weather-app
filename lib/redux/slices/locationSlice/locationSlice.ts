/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationByCoordAsync } from "./thunks";

const initialState: locationSliceState = {
  data: {
    name: "London",
    country: "GB",
    state: "England",
    lat: 51.5073219,
    lon: -0.1276474,
    local_names: {},
  },
  isLoading: false
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<locationSliceState>) => {
      console.log(action);
      return (state = { ...action.payload });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLocationByCoordAsync.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(setLocationByCoordAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

/* Types */
export interface locationSliceState {
  data: location;
  isLoading: boolean;
}
export interface location {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
  local_names: any;
}

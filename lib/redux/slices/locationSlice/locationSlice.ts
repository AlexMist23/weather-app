/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

//lat: 51.5073219,
//lon: -0.1276474,

const initialState: locationSliceState = {
  name: "London",
  country: "GB",
  state: "England",
  lat: 51.5073219,
  lon: -0.1276474,
  local_names: {},
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<locationSliceState>) => {
      state = {
        name: action.payload.name,
        country: action.payload.country,
        state: action.payload.state,
        lat: action.payload.lat,
        lon: action.payload.lon,
        local_names: action.payload.local_names,
      };
    },
  },
});

/* Types */
export interface locationSliceState {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
  local_names: any;
}

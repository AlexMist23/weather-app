/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/* Instruments */
import { setLocationListAsync } from "./thunks";

const initialState: locationSliceState = {
  locationList: {
    isLoading: false,
    list: [],
  },
  location: {
    name: "London",
    country: "GB",
    state: "England",
    lat: 51.5073219,
    lon: -0.1276474,
    local_names: {},
  },
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLocation: (state, action: PayloadAction<location>) => {
      return (state = {
        ...state,
        location: {
          name: action.payload.name,
          country: action.payload.country,
          state: action.payload.state,
          lat: action.payload.lat,
          lon: action.payload.lon,
          local_names: action.payload.local_names,
        },
      });
    },
    clearLocationList: (state) => {
      return (state = {
        ...state,
        locationList: {
          isLoading: false,
          list: [],
        },
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLocationListAsync.pending, (state) => {
        return (state = {
          ...state,
          locationList: { list: [...state.locationList.list], isLoading: true },
        });
      })

      .addCase(setLocationListAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        return (state = {
          ...state,
          locationList: {
            isLoading: false,
            list: [...action.payload],
          },
        });
      });
  },
});

/* Types */
export interface locationSliceState {
  locationList: {
    list: Array<location> | any;
    isLoading: boolean;
  };
  location: location;
}

export interface location {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
  local_names: any;
}

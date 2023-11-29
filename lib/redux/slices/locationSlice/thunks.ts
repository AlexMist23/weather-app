/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchLocationByCoord } from "./fetchLocationByCoord";

export const setLocationByCoordAsync = createAppAsyncThunk(
  "location/fetchLocationByCoord",
  async (coord: { lon: number; lat: number }) => {
    const { lon, lat } = coord;
    const response = await fetchLocationByCoord(lon, lat);
    return response.data;
  }
);

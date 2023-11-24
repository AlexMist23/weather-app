/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchForecast5 } from "./fetchForecast5";

export const setForecast5Async = createAppAsyncThunk(
  "currentWeather/fetchForecast5",
  async (coord: { lat: number; lon: number }) => {
    const response = await fetchForecast5(coord);
    return response.data;
  }
);

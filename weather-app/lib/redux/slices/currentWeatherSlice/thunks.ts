/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchCurrentWeather } from "./fetchCurrentWeather";

export const setCurrentWeatherAsync = createAppAsyncThunk(
  "currentWeather/fetchCurrentWeather",
  async (coord: { lat: number; lon: number }) => {
    const response = await fetchCurrentWeather(coord);
    return response.data;
  }
);

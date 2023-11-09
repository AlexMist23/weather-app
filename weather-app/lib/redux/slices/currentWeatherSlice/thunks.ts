/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchCurrentWeather } from "./fetchCurrentWeather";

export const setCurrentWeatherAsync = createAppAsyncThunk(
  "currentWeather/fetchCurrentWeather",
  async (coord: any) => {
    const response = await fetchCurrentWeather(coord.lat, coord.lon);
    return response;
  }
);

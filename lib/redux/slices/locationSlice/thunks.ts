/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchLocationList } from "./fetchLocationList";

export const setLocationListAsync = createAppAsyncThunk(
  "location/fetchLocationList",
  async (name: string) => {
    const response = await fetchLocationList(name);
    return response.data;
  }
);

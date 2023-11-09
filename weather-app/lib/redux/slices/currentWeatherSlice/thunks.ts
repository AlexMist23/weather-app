/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchCurrentWeather } from './fetchCurrentWeather'

export const setCurrentWeatherAsync = createAppAsyncThunk(
  'location/fetchCurrentWeather',
  async (cord: {lon:number, lat:number}) => {
    const response = await fetchCurrentWeather(cord.lat, cord.lon)

    return response
  }
)

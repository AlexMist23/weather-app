/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectCurrentWeatherData = (state: ReduxState) => state.currentWeather.data
export const selectCurrentWeatherStatus = (state: ReduxState) => state.currentWeather.isLoaded
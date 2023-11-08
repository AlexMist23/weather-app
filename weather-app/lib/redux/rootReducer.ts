/* Instruments */
import { counterSlice, locationSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  location: locationSlice.reducer
}

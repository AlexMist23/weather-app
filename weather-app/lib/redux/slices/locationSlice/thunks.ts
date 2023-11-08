/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchIdentityLocation } from './fetchIdentityLocation'
import { selectLocation } from './selectors'
import { locationSlice } from './locationSlice'
import type { ReduxThunkAction } from '@/lib/redux'

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const setLocationAsync = createAppAsyncThunk(
  'location/fetchIdentityLocation',
  async (name: string) => {
    const response = await fetchIdentityLocation(name)
    // The value we return becomes the `fulfilled` action payload
    console.log(response)
    return response
  }
)

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

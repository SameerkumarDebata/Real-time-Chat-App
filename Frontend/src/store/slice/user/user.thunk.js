//handles ansync actions related to user authentication and data fetching 
//using redux-thunk middleware
// First, create the thunk
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUserThunk = createAsyncThunk(
  'users/fetchById',
  async () => {
    console.log("Hello")
  },
)
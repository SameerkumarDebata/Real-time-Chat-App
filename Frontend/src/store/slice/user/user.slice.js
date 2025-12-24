import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk'

const initialState={
        isAuthenticated:false,
        screenLoading:false,
    }
    //functions with in the reducers are called actions

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    
   
    extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginUserThunk.pending, (state, action) => {
      console.log("Pending")
    
    })

     builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      console.log("fullfilled")
     
    })

     builder.addCase(loginUserThunk.rejected, (state, action) => {
      
     console.log("rejected")
    })
  },


})

export const {  } = userSlice.actions

export default userSlice.reducer
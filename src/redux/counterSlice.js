import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    userInfo : {}
  },
  reducers: {

    updateUser: (state, action) => {
      console.log( state,action)
      state.userInfo = action.payload.userInfo
      console.log( "after")
      console.log( state,action)
      console.log(state.userInfo)
    }
  }
})

export const {  updateUser } = formSlice.actions

export default formSlice.reducer
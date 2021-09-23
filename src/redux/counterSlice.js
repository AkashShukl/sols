import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    userInfo : {}
  },
  reducers: {
    updateUser: (state, action) => {
      state.userInfo = action.payload.userInfo
    }
  }
})

export const {  updateUser } = formSlice.actions

export default formSlice.reducer
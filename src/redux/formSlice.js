import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: "",
    email: "checkout",
    password: "",
    confirmPassword: "",
  },
  reducers: {
    onchange: (state, action) => {
      const payload = action.payload;
      const field  = payload.field
      state.name = payload.data
    },
  
  },
});

export const { onchange } = formSlice.actions;

export default formSlice.reducer;
//

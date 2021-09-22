import { configureStore } from '@reduxjs/toolkit'
import formReducer from "./counterSlice"

export default configureStore({
  reducer: {
    formreducer:formReducer
  }
})
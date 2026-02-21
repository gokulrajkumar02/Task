import { configureStore } from "@reduxjs/toolkit"
import variableReducer from "./variableSlice"

export const store = configureStore({
  reducer: {
    variable: variableReducer
  }
})

// types (important for TS)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

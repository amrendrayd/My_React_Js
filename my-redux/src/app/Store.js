import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/toto/TodoSlice"

export const store = configureStore({
    reducer: todoReducer
})
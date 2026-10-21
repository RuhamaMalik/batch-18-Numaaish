import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './store/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})


// const store = configureStore({
//     reducer: {
//         todo: todoReducer,
//         bookmark: todoReducer,
//     }
// })
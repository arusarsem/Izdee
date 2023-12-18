import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "../ToDo/ToDoSlice"

const store = configureStore({
    reducer: {
        todo: ToDoReducer,
    }
})

export default store;
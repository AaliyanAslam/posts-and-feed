import { configureStore } from "@reduxjs/toolkit";
import addUser from "../reducers/authSlice";

const store = configureStore({
    reducer: {
        auth : addUser,
    }
})

export default store;
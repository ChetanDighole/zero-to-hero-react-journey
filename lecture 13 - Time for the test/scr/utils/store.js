import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        // name of slice : cartSlice
        cart : cartSlice
    }
});

export default store


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/CartSlice";

const store = configureStore({
  reducer: {
    // sneakers: sneakersReducer;
    cart: cartReducer,
  },
});

export default store;

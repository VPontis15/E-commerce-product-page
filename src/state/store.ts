import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/CartSlice";

import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    // sneakers: sneakersReducer;
    cart: cartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;

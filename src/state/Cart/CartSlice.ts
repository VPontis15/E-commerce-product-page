import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType, CartState } from "../types/actions/cart";

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: function (state, action: PayloadAction<CartItemType>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => newItem.id == item.id);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity += newItem.quantity;
      }
    },
    removeFromCart: function (state, action: PayloadAction<CartItemType>) {
      const itemToBeRemoved = state.items.find(
        (item) => item.id == action.payload.id,
      );
      if (!itemToBeRemoved) return;
      state.items = state.items.filter(
        (item) => item.id !== itemToBeRemoved.id,
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

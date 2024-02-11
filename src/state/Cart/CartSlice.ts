import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../types/actions/cart";
import { addToCart } from "../types/actions/CartActions/cartActions";

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: function (state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => newItem.id == item.id);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity += newItem.quantity;
      }
    },
  },
});

export default cartSlice.reducer;

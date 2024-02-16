import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop(action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearItems } = CartSlice.actions;
export default CartSlice.reducer;

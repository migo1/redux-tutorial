import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 5,
  total: 0,
  isLodaing: true,
};

const cartSlice = createSlice({
    name: "cart",
    initialState
});

export default cartSlice.reducer;
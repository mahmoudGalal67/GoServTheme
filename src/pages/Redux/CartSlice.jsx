import { createSlice } from "@reduxjs/toolkit";

const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product_id === action.payload.product_id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          product_id: action.payload.product_id,
          price: action.payload.price,
          photoes: action.payload.photoes,
          product_name_ar: action.payload.product_name_ar,
          product_name_en: action.payload.product_name_en,
          quantity: 1,
        });
      }
      saveCartToLocalStorage(state.items);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product_id !== action.payload.id
      );
      saveCartToLocalStorage(state.items);
    },
    updateItemQuantity: (state, action) => {
      console.log(action.payload);
      const item = state.items.find(
        (item) => item.product_id === action.payload.product_id
      );
      if (item) {
        item.quantity = action.payload.quantity;
        item.price = action.payload.price;
      } else {
        state.items.push({
          product_id: action.payload.product_id,
          price: action.payload.price,
          quantity: action.payload.quantity,
          photoes: action.payload.photoes,
          product_name_ar: action.payload.product_name_ar,
          product_name_en: action.payload.product_name_en,
        });
      }
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

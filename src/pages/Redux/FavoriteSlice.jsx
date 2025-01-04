import { createSlice } from "@reduxjs/toolkit";

// Redux slice or actions
const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favoriteItems", JSON.stringify(favorites));
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: JSON.parse(localStorage.getItem("favoriteItems")) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload);
      saveFavoritesToLocalStorage(state.items);
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product_id !== action.payload
      );
      saveFavoritesToLocalStorage(state.items);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

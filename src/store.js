import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './pages/Redux/CartSlice';
import favoritesReducer from './pages/Redux/FavoriteSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

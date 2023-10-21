import { combineReducers } from "@reduxjs/toolkit";
import { apiService } from "./api/api";
import cartSlice from "./slice/cart/cartSlice";
import wishlistSlice from "./slice/wishlist/wishlistSlice";
import basketSlice from "./slice/basket/basketSlice";

export const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    cart: cartSlice,
    wishlist: wishlistSlice,
    basket :  basketSlice,
});
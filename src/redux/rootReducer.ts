import { combineReducers } from "@reduxjs/toolkit";
import { apiService } from "./api/api";
import wishlistSlice from "./slice/wishlist/wishlistSlice";
import cartSlice from "./slice/cart/cartSlice";


export const rootReducer = combineReducers({
    [apiService.reducerPath]: apiService.reducer,
    cart: cartSlice,
    wishlist: wishlistSlice,
});
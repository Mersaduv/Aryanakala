import { IProduct } from "@/components/products/types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface ICartProduct extends IProduct {
	count: number;
}

export interface ICartState {
	products: ICartProduct[];
}

const initialState: ICartState = {
	products: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// Check if the product is already in the cart
			let isDuplicated = false;
			state.products.map(product => {
				if (product.id === action.payload.id) {
					isDuplicated = true;
				}
			});

			if (!isDuplicated) {
				// Add the product to the cart
				const newCartProduct = {
					...action.payload,
					inCart: true,
				};
				state.products.push(newCartProduct);
				toast.success(`"${newCartProduct.name}" added to cart successfully`);
			}
		},
		removeFromCart: (state, action) => {
			const updated = state.products.filter(
				product => product.id !== action.payload.id
			);

			state.products = updated;
			toast.success(`"${action.payload.name}" removed from cart successfully`);
		},
		clearCart: state => {
			state.products = [];
			toast.success(`Cart cleared successfully`);
		},
		increaseProductCount: (state, action) => {
			state.products.map(product => {
				if (product.id === action.payload) {
					return {
						...product,
						count: product.count++,
					};
				} else {
					return {
						...product,
					};
				}
			});
		},
		decreaseProductCount: (state, action) => {
			state.products.map(product => {
				if (product.id === action.payload && product.count > 1) {
					return {
						...product,
						count: product.count--,
					};
				} else {
					return {
						...product,
					};
				}
			});
		},
	},
});

export default cartSlice.reducer;
export const {
	addToCart,
	removeFromCart,
	clearCart,
	increaseProductCount,
	decreaseProductCount,
} = cartSlice.actions;
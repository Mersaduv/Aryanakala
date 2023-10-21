import { IProduct } from "@/components/products/types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface IWishlistProduct extends IProduct {
	history: string;
}

export interface IWishlistState {
	products: IWishlistProduct[];
}

const initialState: IWishlistState = {
	products: [
		{
			id: "1",
			name: "Angus Burger",
			slug: "angus-burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			count: 1,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			freeDelivery: true,
			history: "October 3, 2023",
		},
		{
			id: "2",
			name: "Angus Burger",
			slug: "angus-burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			count: 1,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			freeDelivery: true,
			history: "October 3, 2023",
		},
		{
			id: "3",
			name: "Angus Burger",
			slug: "angus-burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			count: 1,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			freeDelivery: true,
			history: "October 3, 2023",
		},
		{
			id: "4",
			name: "Angus Burger",
			slug: "angus-burger",
			description: "new",
			price: 10,
			discount: 10,
			image: "/burger.png",
			available: true,
			inCart: false,
			count: 1,
			rate: 4,
			weight: "250g",
			categories: ["Food", "Burgers"],
			freeDelivery: true,
			history: "October 3, 2023",
		},
	],
};

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		addToWishlist: (state, action) => {
			// Check if the product is already in the wishlist
			let isDuplicated = false;
			state.products.map(product => {
				if (product.id === action.payload.id) {
					isDuplicated = true;
				}
			});

			if (!isDuplicated) {
				// Add the product to the wishlist
				const newWishlistProduct = {
					...action.payload,
					history: new Date().toString().split(" ").slice(0, 3).join(" "),
				};
				state.products.push(newWishlistProduct);
				toast.success(
					`"${newWishlistProduct.name}" added to wishlist successfully`
				);
			}
		},
		removeFromWishlist: (state, action) => {
			const updated = state.products.filter(
				product => product.id !== action.payload.id
			);

			state.products = updated;
			toast.success(
				`"${action.payload.name}" removed from wishlist successfully`
			);
		},
		clearWishlist: state => {
			state.products = [];
			toast.success(`Cart cleared successfully`);
		},
	},
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist, clearWishlist } =
	wishlistSlice.actions;
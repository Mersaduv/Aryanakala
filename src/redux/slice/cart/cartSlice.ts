import { ICart, IColor, ISize } from "@/types";
import { exsitItem, getTotal } from "@/utils";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    cartItems: ICart[]
    totalItems: number
    totalPrice: number
    totalDiscount: number
  }
  
  const getCartItems = (): ICart[] => {
    if (typeof window !== 'undefined') {
      const cartItemsJSON = localStorage.getItem('cartItems');
      if (cartItemsJSON) {
        const parsedCartItems = JSON.parse(cartItemsJSON) as ICart[];
        return parsedCartItems;
      }
    }
    return [] as ICart[];
  }
  
  
  const setCartItems = (cartItems: ICart[]) =>
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  
    const initialState: CartState = {
      cartItems: getCartItems(),
      totalItems: getTotal(getCartItems(), 'quantity'),
      totalPrice: getTotal(getCartItems(), 'price'),
      totalDiscount: getTotal(getCartItems(), 'discount'),
    }
    
  
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      
      addToCart: (state, action: PayloadAction<Omit<ICart, 'itemID'>>) => {
        const { productID } = action.payload;

        if (!state.cartItems) {
          state.cartItems = [];
        }
    
        let isItemExist = exsitItem(state.cartItems, productID);
  
        if (isItemExist) {
          isItemExist.quantity += 1
          state.totalItems = getTotal(state.cartItems, 'quantity')
          state.totalPrice = getTotal(state.cartItems, 'price')
          state.totalDiscount = getTotal(state.cartItems, 'discount')
          setCartItems(state.cartItems)
        } else {
          state.cartItems.push({ itemID: nanoid(), ...action.payload })
          state.totalItems = getTotal(state.cartItems, 'quantity')
          state.totalPrice = getTotal(state.cartItems, 'price')
          state.totalDiscount = getTotal(state.cartItems, 'discount')
          setCartItems(state.cartItems)
        }
      },
  
      removeFromCart: (state, action: PayloadAction<string>) => {
        const index = state.cartItems.findIndex(
          (item) => item.itemID === action.payload
        )
  
        if (index !== -1) {
          state.cartItems.splice(index, 1)
          state.totalItems = getTotal(state.cartItems, 'quantity')
          state.totalPrice = getTotal(state.cartItems, 'price')
          state.totalDiscount = getTotal(state.cartItems, 'discount')
          setCartItems(state.cartItems)
        }
      },
  
      increase: (state, action: PayloadAction<string>) => {
        state.cartItems.forEach((item) => {
          if (item.itemID === action.payload) item.quantity += 1
        })
        state.totalItems = getTotal(state.cartItems, 'quantity')
        state.totalPrice = getTotal(state.cartItems, 'price')
        state.totalDiscount = getTotal(state.cartItems, 'discount')
        setCartItems(state.cartItems)
      },
  
      decrease: (state, action: PayloadAction<string>) => {
        state.cartItems.forEach((item) => {
          if (item.itemID === action.payload) item.quantity -= 1
        })
        state.totalItems = getTotal(state.cartItems, 'quantity')
        state.totalPrice = getTotal(state.cartItems, 'price')
        state.totalDiscount = getTotal(state.cartItems, 'discount')
        setCartItems(state.cartItems)
      },
  
      clearCart: (state) => {
        state.cartItems = []
        state.totalItems = 0
        state.totalPrice = 0
        state.totalDiscount = 0
        localStorage.removeItem('cartItems')
      },
  
    },
  })
  
  export const {
    addToCart,
    removeFromCart,
    clearCart,
    decrease,
    increase,
  } = cartSlice.actions
  
  
export default cartSlice.reducer;
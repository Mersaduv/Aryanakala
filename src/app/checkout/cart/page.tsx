"use client";
import React, { useEffect, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { UseAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Box, Button } from "@mui/material";
import { ICart, IProduct } from "@/types";
import { exsitItem, formatNumber } from "@/utils";
import { addToCart, clearCart } from "@/redux/slice/cart/cartSlice";
import { showAlert } from "@/redux/slice/alert.slice";
import { Delete } from "@mui/icons-material";
import CartCard from "@/components/cart-card/components/cartCard";

interface Props {
  product: IProduct;
}
const Cart: React.FC<Props> = () => {
  const { push } = useRouter();
  const dispatch = UseAppDispatch();

  // const [isShowRedirectModal, redirectModalHandlers] = useDisclosure();

  // //? Get UserInfo
  // const { userInfo } = useUserInfo();

  //? Store
  const { cartItems, totalItems, totalPrice, totalDiscount } = useAppSelector(
    (state) => state.cart
  );

  //? Handlers
  const handleRoute = () => {
    // if (!userInfo) return redirectModalHandlers.open();

    push("/checkout/shipping");
  };

  if (cartItems.length === 0)
    return (
      <>
        <div>
          Cart
          <p>سبد خرید شما خالی است!</p>
        </div>
      </>
    );
  return (
    <div>
      <h1>Cart</h1>
      <div>جمع سبد خرید {formatNumber(totalPrice - totalDiscount)}</div>
      <div>
        {" "}
        {cartItems.map((item) => (
          <CartCard item={item} key={item.itemID} />
        ))}
      </div>
      <div>
        {" "}
        <button onClick={() => dispatch(clearCart())}>
          <Delete />
          <span>حذف همه</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;

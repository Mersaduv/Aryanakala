"use client";
import React, { useEffect, useState } from "react";
import { UseAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { ICart, IProduct } from "@/types";
import { useRouter } from "next/router";
import { exsitItem } from "@/utils";
import { showAlert } from "@/redux/slice/alert.slice";
import { addToCart } from "@/redux/slice/cart/cartSlice";
interface Props {
  product: IProduct;
}
const ProductCard: React.FC<Props> = ({ product }) => {
  //? Assets
  const dispatch = UseAppDispatch();

  //? Store
  const { cartItems } = useAppSelector((state) => state.cart);

  //? State
  const [currentItemInCart, setCurrentItemInCart] = useState<ICart | undefined>(
    undefined
  );

  //? Re-Renders
  useEffect(() => {
    const item = exsitItem(cartItems, product.id);
    setCurrentItemInCart(item ?? undefined);
  }, [cartItems]);

  const handleAddItem = () => {
    if (product.inStock === 0)
      return dispatch(
        showAlert({
          status: "error",
          title: "موجودی این محصول به اتمام رسیده",
        })
      );

    dispatch(
      addToCart({
        productID: product.id,
        name: product.title,
        slug: product.slug,
        price: product.price,
        discount: product.discount,
        inStock: product.inStock,
        sold: product.sold,
        img: product.images,
        quantity: 1,
      })
    );
    console.log("clicked", product);
  };
  return (
    <div>
      Product Card - {product.title}{" "}
      <div>
        {" "}
        <button onClick={handleAddItem}>افزودن به سبد</button>
      </div>
    </div>
  );
};

export default ProductCard;

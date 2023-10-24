import { ICart } from "@/types";

export default function exsitItem(
  cartItems: ICart[],
  productID: string,
) {
  if (!cartItems) {
    return null; 
  }

  let result;

    result = cartItems.find((item) => item.productID === productID);
  

  return result;
}

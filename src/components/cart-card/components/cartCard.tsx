import { UseAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { ICart } from "@/types";
import { formatNumber } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import DiscountCartItem from "./DiscountCartItem";

interface Props {
  item: ICart;
}

const CartCard: React.FC<Props> = (props) => {
  //? Props
  const { item } = props;
  const dispatch = UseAppDispatch();

  return (
    <div>
      <h5>
        <Link href={`/products/${item.slug}`}>{item.name}</Link>
      </h5>
      {item.discount > 0 ? (
        <DiscountCartItem discount={item.discount} price={item.price} />
      ) : (
        <div className="flex items-center gap-x-2">
          <span className="text-sm text-gray-700 farsi-digits">
            {formatNumber(item.price)}
          </span>
          تومن{" "}
        </div>
      )}
    </div>
  );
};

export default CartCard;

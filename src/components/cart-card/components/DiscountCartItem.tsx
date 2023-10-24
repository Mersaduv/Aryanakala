import { formatNumber } from "@/utils";

interface Props {
  discount: number;
  price: number;
}

const DiscountCartItem: React.FC<Props> = (props) => {
  //? Props
  const { discount, price } = props;

  //? Assets
  const discountPercent = discount / 100;

  //? Render(s)
  return (
    <div>
      <div>
        <span>{formatNumber(+(price * discountPercent).toFixed())}</span>

        <span>تخفیف</span>
      </div>
      <div>
        <span>{formatNumber(price - (discount * price) / 100)}</span>
        تومن{" "}
      </div>
    </div>
  );
};

export default DiscountCartItem;

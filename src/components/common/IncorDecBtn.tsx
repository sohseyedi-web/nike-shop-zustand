import { useCartStore } from "../../store/useCart";
import * as RiIcon from "react-icons/ri";
import { toPersianNumbersWithComma } from "../../utils/comma";
import { CartProduct } from "../../types/type";

const IncorDecBtn = ({ cart }: { cart: CartProduct}) => {
  const { addItemToCart, removeItemFromCart } = useCartStore();

  return (
    <div className="flex items-center gap-x-1 p-1 border dark:border-gray-700 rounded-xl">
      <button
        className="w-[35px] flex items-center justify-center text-white text-center h-[35px] border-none rounded-xl  bg-green-500"
        onClick={() => addItemToCart(cart)}
      >
        <RiIcon.RiAddLine />
      </button>
      <span className="mx-2 text-lg">
        {toPersianNumbersWithComma(String(cart.quantity))}
      </span>
      <button
        className="w-[35px] flex items-center justify-center text-white text-center h-[35px] border-none rounded-xl bg-green-500"
        onClick={() => removeItemFromCart(cart.id)}
      >
        <RiIcon.RiSubtractFill />
      </button>
    </div>
  );
};

export default IncorDecBtn;

import { ProductsListType } from "../../types/type";
import * as RiIcon from "react-icons/ri";
import { useCartStore } from "./../../store/useCart";
import { checkInCart } from "../../utils/checkInCart";
import { toPersianNumbersWithComma } from "./../../utils/comma";
import IncorDecBtn from "../common/IncorDecBtn";
const ProductList = ({ product }: { product: ProductsListType }) => {
  const { addItemToCart, cartItems } = useCartStore();

  let productQuantity = cartItems.find((c) => c.id === product.id);

  return (
    <div
      key={product.id}
      className="lg:w-[32%] md:w-[45%] w-[95%] p-2 lg:mx-0 mx-auto border border-gray-300 dark:border-slate-700 shadow rounded-xl dark:text-indigo-100"
    >
      <div
        className="p-1 w-full h-[150px] py-2 rounded-xl"
        style={{
          background: `linear-gradient(to bottom , ${product.oneColor} , ${product.twoColor})`,
        }}
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
      <h2 className="my-3 text-lg font-semibold">
        {product.name}-{" "}
        <span>{product.gender === "men" ? "مردانه" : "زنانه"}</span>
      </h2>
      <h6 className="my-2 text-lg ">
        قیمت : {toPersianNumbersWithComma(product.price)} تومان
      </h6>

      <div className="my-2 flex items-center gap-x-2 text-lg font-semibold">
        سایز :
        {product.size.map((s) => (
          <p className="w-[30px] text-base font-normal h-[30px] text-white m-0 rounded-full bg-blue-500 dark:bg-gray-700 flex items-center justify-center">
            {s}
          </p>
        ))}
      </div>
      <div className="flex items-center justify-between">
        {checkInCart(cartItems, product) ? (
          <IncorDecBtn cart={productQuantity} />
        ) : (
          <button
            onClick={() => addItemToCart(product)}
            className="h-[45px] w-[45%] font-semibold text-gray-200 rounded-xl border-none bg-indigo-600 dark:bg-gray-700"
          >
            افزودن به سبد خرید
          </button>
        )}

        <div className="flex items-center justify-center gap-x-4  text-indigo-600 dark:text-indigo-100">
          <span className="cursor-pointer shadow hover:scale-110 transition-all duration-300">
            <RiIcon.RiHeart2Line size={26} />
          </span>
          <span className="ml-3 cursor-pointer shadow hover:scale-110 transition-all duration-300">
            <RiIcon.RiBookmarkLine size={26} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

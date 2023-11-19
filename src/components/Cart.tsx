import { useCartStore } from "./../store/useCart";
import * as RiIcon from "react-icons/ri";
import { toPersianNumbersWithComma } from "../utils/comma";

const Cart = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useCartStore();
  const hasItems = cartItems.length;

  const totalPrice = cartItems.reduce(
    (price, total) => price + total.quantity * Number(total.price),
    0
  );

  const totalCount = cartItems.reduce(
    (quantity, total) => quantity + total.quantity,
    0
  );

  return (
    <section className="pt-28">
      <div className="max-w-7xl mx-auto flex justify-between lg:flex-row flex-col">
        {hasItems ? (
          <>
            <div className="lg:w-[75%] lg:mx-0 mx-auto md:w-[60%] w-[90%] shadow-md rounded-md">
              {cartItems.map((cart) => (
                <div
                  className="mb-3 flex items-center justify-between px-6 py-3"
                  key={cart.id}
                >
                  <div className="flex items-center">
                    <img
                      src={cart.img}
                      className="rounded-md lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] object-contain"
                      alt={cart.name}
                    />
                    <div className="lg:text-lg mr-4">
                      <div className="font-semibold">
                        {cart.name}
                      </div>
                      <div className="">{toPersianNumbersWithComma(cart.price)} تومان</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <button
                      className="w-[35px] flex items-center justify-center text-white text-center h-[35px] border-none rounded-full  bg-[#2eb573]"
                      onClick={() => addItemToCart(cart)}
                    >
                      <RiIcon.RiAddLine />
                    </button>
                    <span className="mx-2 text-lg">{toPersianNumbersWithComma(cart.quantity)}</span>
                    <button
                      className="w-[35px] flex items-center justify-center text-white text-center h-[35px] border-none rounded-full bg-[#2eb573]"
                      onClick={() => removeItemFromCart(cart.id)}
                    >
                      <RiIcon.RiSubtractFill />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="shadow-md lg:mx-0 mx-auto h-[220px] px-2 py-3 lg:w-[23%] md:w-[60%] w-[90%]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">جمع خرید</span>
                <span>{toPersianNumbersWithComma(String(totalPrice))}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">
                  تعداد سفارشات
                </span>
                <span>{toPersianNumbersWithComma(String(totalCount))}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">تخفیف</span>
                <span>{toPersianNumbersWithComma("0")}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">قیمت نهایی</span>
                <span>{toPersianNumbersWithComma(String(totalPrice))}</span>
              </div>
              <button className="w-full  bg-[#2eb573] rounded-md text-white border-none text-lg py-2">
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-2xl text-indigo-600 font-semibold w-full">
            No Items
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;

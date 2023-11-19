import { useCartStore } from "./../store/useCart";
import * as RiIcon from "react-icons/ri";
import { toPersianNumbersWithComma } from "../utils/comma";
import IncorDecBtn from "./common/IncorDecBtn";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useCartStore();
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
    <section className="py-7">
      <div className="max-w-7xl mx-auto flex justify-between lg:flex-row flex-col">
        {hasItems ? (
          <>
            <div className="lg:w-[75%] lg:mx-0 mx-auto md:w-[60%] w-[90%] shadow rounded-xl border-2 p-3">
              <div className="flex items-center  justify-between">
                <h3 className="text-xl font-semibold text-indigo-600 ">
                  سبد خرید
                </h3>
                <button>
                  <RiIcon.RiDeleteBin5Line size={28} className="text-red-600" />
                </button>
              </div>
              <hr className="my-3" />

              {cartItems.map((cart) => (
                <div
                  className="mb-3 flex items-center justify-between"
                  key={cart.id}
                >
                  <div className="flex items-center">
                    <img
                      src={cart.img}
                      className="rounded-md lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] object-contain"
                      alt={cart.name}
                    />
                    <div className="lg:text-lg mr-4">
                      <div className="font-semibold">{cart.name}</div>
                      <div className="">
                        {toPersianNumbersWithComma(cart.price)} تومان
                      </div>
                    </div>
                  </div>
                  <IncorDecBtn cart={cart} />
                </div>
              ))}
            </div>
            <div className="shadow-md lg:mx-0 mx-auto h-[220px] px-2 py-3 lg:w-[23%] md:w-[60%] w-[90%]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">جمع خرید</span>
                <span>{toPersianNumbersWithComma(String(totalPrice))}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold capitalize">تعداد سفارشات</span>
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
              <button className="btnForm">Submit</button>
            </div>
          </>
        ) : (
          <div className="lg:w-[45%] flex items-center space-y-4 justify-center flex-col text-center mx-auto md:w-[60%] w-[95%] shadow rounded-xl border-2 py-3">
            <p className="text-xl text-indigo-600 font-medium">
              سبد خرید خالی است
            </p>
            <RiIcon.RiEmotionUnhappyLine
              size={60}
              className="text-indigo-600"
            />
            <Link
              to={"/"}
              className="px-8 py-2 animate-bounce rounded-xl shadow bg-indigo-600 text-white"
            >
              صفحه اصلی
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;

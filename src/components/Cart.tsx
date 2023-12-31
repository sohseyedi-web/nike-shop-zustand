import { useCartStore } from "./../store/useCart";
import * as RiIcon from "react-icons/ri";
import { toPersianNumbersWithComma } from "../utils/comma";
import IncorDecBtn from "./common/IncorDecBtn";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

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
    <motion.section
      className="py-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between lg:flex-row gap-y-3 flex-col">
        {hasItems ? (
          <>
            <div className="lg:w-[75%] lg:mx-0 mx-auto md:w-[60%] w-[90%] shadow rounded-xl border-2 dark:border-gray-700 p-3">
              <div className="flex items-center  justify-between">
                <h3 className="text-xl font-semibold text-indigo-600  dark:text-indigo-100">
                  سبد خرید
                </h3>
                <button>
                  <RiIcon.RiDeleteBin5Line
                    size={28}
                    className="text-red-600 dark:text-red-500"
                  />
                </button>
              </div>
              <hr className="my-3 dark:border-gray-700" />

              {cartItems.map((cart) => (
                <div
                  className="mb-3 flex items-center justify-between dark:text-indigo-100"
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
            <div className="shadow lg:mx-0 mx-auto border dark:border-gray-700 rounded-xl dark:text-indigo-100 h-[230px] p-3 lg:w-[23%] md:w-[60%] w-[90%]">
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
              <button className="btnForm">پرداخت فاکتور</button>
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
    </motion.section>
  );
};

export default Cart;

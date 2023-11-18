import * as RiIcon from "react-icons/ri";
import { Link } from "react-router-dom";
import { toPersianNumbers } from "../utils/comma";
import { useCartStore } from "./../store/useCart";
const Navbar = () => {
  const { cartItems } = useCartStore();

  return (
    <aside className="min-h-screen w-12 border-l border-gray-300 bg-gray-50 z-20">
      <div className="px-5 py-7 flex items-center flex-col justify-between">
        <div>
          <RiIcon.RiXingLine size={26} />
        </div>
        <div className="my-12">
          <div className="my-10 transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
            <Link to={"/"}>
              <RiIcon.RiHome2Line size={26} />
            </Link>
          </div>
          <div className="my-10 transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
            <Link to={"/products"}>
              <RiIcon.RiUser3Line size={26} />
            </Link>
          </div>
          <div className="my-10 relative transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
            <Link to={"/cart"}>
              <RiIcon.RiShoppingCartLine size={26} />
              {cartItems.length ? (
                <span className="w-[20px] h-[20px] text-center leading-[25px] rounded-full bg-blue-700 text-white absolute -right-1 -top-2">
                  {toPersianNumbers(String(cartItems.length))}
                </span>
              ) : null}
            </Link>
          </div>
          <div className="my-10 transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
            <Link to={"/support"}>
              <RiIcon.RiCustomerService2Line size={26} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 hover:rotate-[260deg] cursor-pointer rotate-0 transition-all duration-300">
          <RiIcon.RiMoonLine size={26} />
        </div>
      </div>
    </aside>
  );
};

export default Navbar;

import * as RiIcon from "react-icons/ri";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <aside className="fixed top-0 z-20 bg-slate-50 right-0 h-screen w-12 border-l border-solid border-gray-300">
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
              <RiIcon.RiShoppingBag2Line size={26} />
            </Link>
          </div>
          <div className="my-10 transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
            <Link to={"/cart"}>
              <RiIcon.RiShoppingCartLine size={26} />
            </Link>
          </div>
          <div className="my-10 transition-all scale-1 duration-500 hover:transition-all hover:scale-125 hover:duration-500 ">
            <Link to={"/support"}>
              <RiIcon.RiCustomerService2Line size={26} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8">
          <Link to={"/auth"}>
            <RiIcon.RiLogoutBoxLine size={26} />
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Navbar
import * as RiIcon from "react-icons/ri";
import { useCartStore } from "./../../store/useCart";

const Search = () => {
  const { searchTerm, setSearchTerm } = useCartStore();

  return (
    <form className="lg:w-[400px] w-full h-[45px] shadow rounded-xl outline-none bg-gray-50 dark:bg-slate-950 relative">
      <span className="absolute right-2 top-2 text-indigo-500 dark:text-indigo-100">
        <RiIcon.RiSearch2Line size={26} />
      </span>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full h-full text-black dark:text-indigo-100 pr-10 rounded-xl bg-transparent transition-all duration-200 focus:border-indigo-400 focus:dark:border-indigo-100 outline-none border-2 dark:border-slate-700"
        placeholder="جستجو محصولات"
      />
    </form>
  );
};

export default Search;

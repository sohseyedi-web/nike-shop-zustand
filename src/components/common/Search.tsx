import * as RiIcon from "react-icons/ri";

const Search = () => {
  return (
    <form className="lg:w-[400px] w-full h-[45px] shadow rounded-xl outline-none bg-gray-50 relative">
      <span className="absolute right-2 top-2 text-indigo-500">
        <RiIcon.RiSearch2Line size={26} />
      </span>
      <input
        type="text"
        className="w-full h-full pr-10 rounded-xl bg-transparent transition-all duration-200 focus:border-indigo-400 outline-none border-2"
        placeholder="جستجو محصولات"
      />
    </form>
  );
};

export default Search;

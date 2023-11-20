import Search from "./../common/Search";
import * as RiIcon from "react-icons/ri";
const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-2">
      <div className="flex items-center gap-x-4 justify-between w-full lg:w-auto lg:justify-start flex-wrap space-y-2">
        <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-100">نایک استور</h3>
        <button className="lg:hidden w-[45px] flex items-center justify-center h-[45px] rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-gray-700 hover:dark:bg-gray-800 transition-all duration-300 text-white dark:text-indigo-100">
          <RiIcon.RiDownloadCloud2Line size={24} />
        </button>
        <Search />
      </div>
      <button className="lg:block hidden px-4 h-[45px] rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-gray-700 hover:dark:bg-gray-800 transition-all duration-300 text-white dark:text-indigo-100 text-lg font-semibold">
        دانلود نسخه PWA
      </button>
    </header>
  );
};

export default Header;

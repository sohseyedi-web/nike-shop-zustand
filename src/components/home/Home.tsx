import { productList } from "../../utils/dataList";
import Header from "./Header";
import ProductList from "./ProductList";
import { useCartStore } from "./../../store/useCart";
import { motion } from "framer-motion";

const Home = () => {
  const { searchTerm } = useCartStore();


  const filterSearch = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.section
      className="max-w-7xl mx-auto py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Header />
      <hr className="my-4 dark:border-slate-700" />
      <div className="flex items-center gap-x-6 flex-wrap gap-y-5">
        {filterSearch.length ? (
          filterSearch.map((product) => (
            <ProductList key={product.id} product={product} />
          ))
        ) : (
          <div className="w-full text-center text-2xl font-semibold text-red-600 dark:text-red-300 mt-5">
            محصول مورد نظر رو نداریم :((
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Home;

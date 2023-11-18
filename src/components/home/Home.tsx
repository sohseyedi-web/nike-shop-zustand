import { productList } from "../../utils/dataList";
import Header from "./Header";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto py-5">
      <Header />
      <hr className="my-4" />
      <div className="flex items-center gap-x-6 flex-wrap gap-y-5">
        {productList.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;

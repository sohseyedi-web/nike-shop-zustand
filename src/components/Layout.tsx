import { productList } from "./../utils/dataList";
import { useCartStore } from "./../store/useCart";
const Layout = () => {
  const { addItemToCart } = useCartStore();


  return (
    <div className="min-h-screen bg-green-400">
      {productList.map((product) => (
        <div className="w-1/4" key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => addItemToCart(product)}>ok</button>
        </div>
      ))}
    </div>
  );
};

export default Layout;

import { productList } from "./../utils/dataList";
import { useCartStore } from "./../store/useCart";
const Layout = () => {
  const { cartItems,addItemToCart } = useCartStore();

  console.log(cartItems);

  return (
    <div>
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

import { CartProduct, ProductsListType } from "../types/type";

export function checkInCart(products: CartProduct[], item: ProductsListType) {
  return products.find((c) => c.id === item.id);
}

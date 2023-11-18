import { create } from "zustand";
import { CartProduct, ProductsListType } from "../types/type";

interface CartState {
  cartItems: CartProduct[];
  addItemToCart: (item: ProductsListType) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  addItemToCart: (item) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        itemExists.quantity++;
      }

      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },
}));

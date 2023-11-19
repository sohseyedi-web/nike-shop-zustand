import { create } from "zustand";
import { CartProduct, ProductsListType } from "../types/type";
import { persist } from "zustand/middleware";

interface CartState {
  cartItems: CartProduct[];
  searchTerm: string;
  addItemToCart: (item: ProductsListType) => void;
  removeItemFromCart: (productId: string) => void;
  setSearchTerm: (item: string) => void;
}

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cartItems: [],
      searchTerm: "",

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
      removeItemFromCart: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            if (itemExists.quantity === 1) {
              const updatedCartItems = get().cartItems.filter(
                (item) => item.id !== productId
              );
              set({ cartItems: updatedCartItems });
            } else {
              itemExists.quantity--;
              set({ cartItems: [...get().cartItems] });
            }
          }
        }
      },
      setSearchTerm: (item) => set({ searchTerm: item }),
    }),
    {
      name: "cart-items",
    }
  )
);

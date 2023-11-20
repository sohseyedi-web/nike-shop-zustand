export type ProductsListType = {
  id: string;
  img: string;
  name: string;
  price: string;
  gender: string;
  size: string[];
  oneColor: string;
  twoColor: string;
  quantity: number;
};

export type CartProduct = ProductsListType & {
  quantity: number;
};

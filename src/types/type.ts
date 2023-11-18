export type ProductsListType = {
  id: string;
  img: string;
  name: string;
  price: string;
  gender: string;
  size: string[];
  oneColor: string;
  twoColor: string;
};

export type CartProduct = ProductsListType & {
  quantity: number;
};
export interface ProductItemProps {
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  id: number;
  quantity?: number;
  total?: number;
}

export interface CartState {
  items: ProductItemProps[];
}

export interface WishListState {
  items: ProductItemProps[];
}

export type Product = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

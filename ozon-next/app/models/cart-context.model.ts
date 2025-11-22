import type { SetStateAction } from "react";
import type { Product } from "./product.model";
import type { CartItem } from "./cart-item.model";

export interface CartContextType {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  addToCart: (product: Product) => void;
  isOpen: boolean;
  cartItems: CartItem[];
  removeOnCard: (id: number | string) => void;
};
'use client'

import { ReactNode, createContext, useContext, useState } from "react";

import type { CartContextType } from "../models/cart-context.model";
import type { CartItem } from "../models/cart-item.model";
import type { Product } from "../models/product.model";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Оберните в CartProvider');
  }

  return context
}

export default function CartProvider({ children}: { children: ReactNode}) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => setCartItems(prevProduct => {
      const findProduct = cartItems.find(prod => prod.id === product.id);

      if (findProduct) {
        return prevProduct.map(p => p.id === findProduct.id ? {...p, count: p.count + 1 } : p)
      } else {
        return [...prevProduct, { ...product, count: 1 }]
      }
    });

    const removeOnCard = (id: number | string) => setCartItems(prevProduct => {
      const findProduct = cartItems.find(prod => prod.id === id);

      if (findProduct) {
        return findProduct.count > 1
          ? prevProduct.map(p => p.id === findProduct.id ? {...p, count: p.count - 1 } : p)
          : prevProduct.filter(({ id: productId}) => productId.toString() !== id.toString())
      }

      return prevProduct;
    })
    
    
  return (
    <CartContext.Provider value={{isOpen, setIsOpen, cartItems, addToCart, removeOnCard}}>
      {children}
    </CartContext.Provider>
  )
}
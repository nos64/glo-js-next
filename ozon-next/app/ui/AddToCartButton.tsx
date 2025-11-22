'use client'

import { useCart } from "../providers/CartProvider";

import type { Product } from "../models/product.model";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return <button className="btn btn-primary" onClick={() => addToCart(product)}>В корзину</button>
}
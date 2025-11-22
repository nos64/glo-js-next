'use client'

import { CartItem } from "../models/cart-item.model";
import { useCart } from "../providers/CartProvider";

export default function Cart() {
  const { isOpen, setIsOpen, cartItems, removeOnCard } = useCart();

  return (
    <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="cart-body">
        <div className="cart-title">Корзина</div>
        <div className="cart-total">Общая сумма: <span>0</span> руб</div>

        <div className="cart-wrapper">
          {!cartItems.length ? (
            <div id="cart-empty">
              Ваша корзина пока пуста
            </div>
          )
            : cartItems.map((goodsItem: CartItem) => (

              <div
                className="card"
                data-key={goodsItem.id}
                key={goodsItem.id}
              >
                {goodsItem.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : null}
                <div className="card-img-wrapper">
                  <span
                    className="card-img-top"
                    style={{ backgroundImage: `url(${goodsItem.img})` }}
                  />
                </div>
                <div className="card-body justify-content-between">
                  <div className="card-price">{goodsItem.price} ₽</div>
                  <h5 className="card-title">{goodsItem.title}</h5>
                  <div>
                    <span className="card-title">Количество в корзине </span>
                    <span className="card-price">{goodsItem.count}</span>
                  </div>
                  {goodsItem.count > 1 && (
                    <div>
                      <span className="card-title">Стоимость </span>
                      <span className="card-price">{goodsItem.count * goodsItem.price} ₽</span>
                    </div>
                  )}


                  <button onClick={() => removeOnCard(goodsItem.id)} className="btn btn-primary">Удалить</button>
                </div>
              </div>
            ))
          }

        </div>

        <button onClick={() => setIsOpen(false)} className="btn btn-primary cart-confirm">Оформить заказ</button>
        <div onClick={() => setIsOpen(false)} className="cart-close">

        </div>
      </div>
    </div>
  )
}
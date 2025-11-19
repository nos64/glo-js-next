import renderCart from './renderCart';
import postData from './postData';

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const closeCartBtn = cartModal.querySelector('.cart-close');
  const cartTotal = cartModal.querySelector('.cart-total > span');
  const cartWrapper = cartModal.querySelector('.cart-wrapper');
  const cartSendBtn = cartModal.querySelector('.cart-confirm');
  

  const goodsWrapper = document.querySelector('.goods');


  const openCart = () => {
    cartModal.style.display = 'flex';

    const cart = JSON.parse(localStorage.getItem('cart'))
        ? JSON.parse(localStorage.getItem('cart'))
        : [];

    renderCart(cart);

    cartTotal.textContent = cart.reduce((acc, good) => acc + good.price, 0);
  }
  const closeCart = () => cartModal.style.display = 'none';

  cartBtn.addEventListener('click', openCart);

  closeCartBtn.addEventListener('click', closeCart);
  cartModal.addEventListener('click', e => {
    const cartBody = document.querySelector('.cart-body');


    // if (!cartBody.contains(e.target)) {
    //   closeCart();
    // }
  });

  goodsWrapper.addEventListener('click', e => {
    if (e.target.classList.contains('btn-primary')) {
      const card = e.target.closest('.card');
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem('goods'));

      const cart = JSON.parse(localStorage.getItem('cart'))
        ? JSON.parse(localStorage.getItem('cart'))
        : [];

      const goodsItem = goods.find(good => good.id === +key);

      cart.push(goodsItem);

      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  cartWrapper.addEventListener('click', e => {
    if (e.target.classList.contains('btn-primary')) {
      const cart = JSON.parse(localStorage.getItem('cart'))
        ? JSON.parse(localStorage.getItem('cart'))
        : [];

      const card = e.target.closest('.card');
      const key = card.dataset.key;

      const index = cart.findIndex(good => good.id === +key);

      cart.splice(index, 1);
    
      console.log('cart: ', cart);
      cart.filter(good => good.id !== +key)
      console.log('cart: ', cart);

      localStorage.setItem('cart', JSON.stringify(cart));

      renderCart(cart);

      cartTotal.textContent = cart.reduce((acc, good) => acc + good.price, 0);
    }
  });

  cartSendBtn.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
      postData(cart).then(() => {
        localStorage.removeItem('cart')
        console.log('cart: ', cart);

        renderCart([]);

        cartTotal.textContent = 0;
      });
  });
};

export default cart;
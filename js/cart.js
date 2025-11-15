const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');

  const closeCartBtn = cartModal.querySelector('.cart-close');

  const openCart = () => cartModal.style.display = 'flex';
  const closeCart = () => cartModal.style.display = 'none';

  cartBtn.addEventListener('click', openCart);

  closeCartBtn.addEventListener('click', closeCart);
  cartModal.addEventListener('click', e => {
    const cartBody = document.querySelector('.cart-body');

    if (!cartBody.contains(e.target)) {
      closeCart();
    }
  });
};

cart();
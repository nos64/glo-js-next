export const searchFilter = (goods, value) => {
  return goods.filter(good => good.title.toLowerCase().includes(value.toLowerCase()));
};

export const categoryFilter = (goods, value) => {
  return goods.filter(good => good.category.toLowerCase().includes(value.toLowerCase()));
};

export const priceFilter = (goods, min, max) => {
  return goods.filter(good => {
    if (min === '' && max === '') {

      return good;
    } else if (min !== '' && max !== '') {

      return good.price >= +min && good.price <= +max;
    } else if (min !== '' && max === '') {

      return good.price >= +min;
    } else if (min === '' && max !== '') {

      return good.price <= +max;
    }
  });
};

export const hotSaleFilter = (goods, value) => {
  return goods.filter(good => value ? good.sale : good);
};

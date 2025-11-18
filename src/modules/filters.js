export const searchFilter = (goods, value) => {
  return goods.filter(good => good.title.toLowerCase().includes(value.toLowerCase()));
};

export const categoryFilter = (goods, value) => {
  return goods.filter(good => good.category.toLowerCase().includes(value.toLowerCase()));
};

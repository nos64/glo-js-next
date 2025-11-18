import getData from './getData';
import renderGoods from './renderGoods';
import { categoryFilter } from './filters';

const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');
  const catalogModalItems = document.querySelectorAll('.catalog li');

  let isCatalogOpen = false;

  const closeCategory = () => {
    isCatalogOpen = !isCatalogOpen;
    catalogModal.style.display = isCatalogOpen ? 'block' : 'none';
  }

  btnCatalog.addEventListener('click', closeCategory);

  catalogModalItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent;

      getData().then(data => renderGoods(categoryFilter(data, text)));

      closeCategory();
    })
  })
};

export default catalog;
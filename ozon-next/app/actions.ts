import type { Product } from './models/product.model';
import type { Query } from './models/query.model';


export const getData = async (query: Query) => {
  const response = await fetch('https://glo-next-js-default-rtdb.firebaseio.com/goods.json');
  const data = await response.json();
  
	return data.filter((product: Product) => {
    if (query.category) {
      if (query.category !== product.category) {

        return false;
      }
    };

    if (query.search) {
      if (!product.title.toLowerCase().includes(query.search.toLowerCase())) {
        
        return false;
      }
    }

    return true;
  })
}
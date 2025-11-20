
const getData = (str) => fetch(
    `https://glo-next-js-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
    ).then(response => response.json())

export default getData;

const getData = () => fetch('https://glo-next-js-default-rtdb.firebaseio.com/goods.json')
    .then(response => response.json())

export default getData;
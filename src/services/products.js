import request from '../utils/axios'

const req = {
  getRestaurants: () => request({ method: 'get', url: '/merchant/list' }),
  getRestaurantById: (guid) => request({ method: 'get', url: '/merchant/get/' + guid }),
  getCategories: (guid) => request({ method: 'get', url: `/category/get/${guid}` }),
  getProducts: (guid) => request({ method: 'get', url: `/merchant/products/${guid}` }),
  getOrderList: () => request({ method: 'get', url: '/order/list' }),
  getUserOrderList: (guid) => request({ method: 'get', url: `/user/${guid}/orders` })
}

export default req

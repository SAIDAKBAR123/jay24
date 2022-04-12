import request from '../utils/axios'

const req = {
  getRestaurants: () => request({ method: 'get', url: '/merchant/list' }),
  getRestaurantById: (guid) => request({ method: 'get', url: '/merchant/get/' + guid }),
  getCategories: (guid) => request({ method: 'get', url: `/category/get/${guid}` }),
  getProducts: (guid) => request({ method: 'get', url: `/merchant/products/${guid}` }),
  getOrderList: () => request({ method: 'get', url: '/order/list' })
}

export default req

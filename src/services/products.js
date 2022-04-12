import request from '../utils/axios'

const req = {
  getRestaurants: () => request({ method: 'get', url: '/merchant/list' }),
  getCategories: (guid) => request({ method: 'get', url: `/category/get/${guid}` }),
  getProducts: (guid) => request({ method: 'get', url: `/merchant/products/${guid}` }),
  getOrderList: () => request({ method: 'get', url: '/order/list' })
}

export default req

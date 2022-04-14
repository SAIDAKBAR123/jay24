import request from '../utils/axios'

const req = {
  getRestaurants: () => request({ method: 'get', url: '/merchant/list' }),
  getRestaurantById: (guid) => request({ method: 'get', url: '/merchant/get/' + guid }),
  getCategories: (guid) => request({ method: 'get', url: `/category/get/${guid}` }),
  getProducts: (guid) => request({ method: 'get', url: `/merchant/products/${guid}` }),
  getMerchantBranches: (guid) => request({ method: 'get', url: `/merchant/get-branches/${guid}` }),
  getOrderList: () => request({ method: 'get', url: '/order/list' }),
  getUserOrderList: (guid) => request({ method: 'get', url: `/user/${guid}/orders` }),
  orderCreate: (data) => request({ method: 'post', url: '/order/create', data })
}

export default req

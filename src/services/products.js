import request from '../utils/axios'

const req = {
  getRestaurants: () => request({ method: 'get', url: '/merchant/list' }),
  getProducts: () => request({ method: 'get', url: '/product/list' })
}

export default req

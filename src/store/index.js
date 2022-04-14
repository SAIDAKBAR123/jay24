import Vue from 'vue'
import Vuex from 'vuex'
import request from '../utils/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    productImage: JSON.parse(localStorage.getItem('image')),
    products: []
  },
  getters: {
    products: (state) => state.products
  },
  mutations: {
    SET_LOGIN (state, payload) {
      localStorage.setItem('user', JSON.stringify(payload))
      state.user = payload
    },
    SET_REGISTER (state, payload) {
      localStorage.setItem('user', JSON.stringify(payload))
      state.user = payload
    },
    SET_PICTURE (state, payload) {
      state.productImage = payload
    },
    SAVE_PRODUCT (state, payload) {
      state.products = [...state.products, payload]
    },
    SAVE_STATE_PRODUCT (state, payload) {
      state.products = payload
    },
    CLEAR_PRODUCT (state) {
      state.products = []
    }
  },
  actions: {
    Login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          url: '/user/login',
          data: data
        }).then((res) => {
          if (res.exist) {
            commit('SET_LOGIN', res)
            console.log('login', res)
            resolve(res)
          } else {
            reject(new Error('There is no user'))
          }
        })
      })
    },
    registration ({ commit }, data) {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          url: '/user/create',
          data
        }).then((res) => {
          commit('SET_REGISTER', res.guid)
          console.log(res)
          resolve(res)
        })
      })
    },
    setImage ({ commit }, data) {
      commit('SET_PICTURE', data)
    },
    saveProduct ({ commit }, data) {
      console.log('vuex', data)
      commit('SAVE_PRODUCT', data)
    }
  },
  modules: {}
})

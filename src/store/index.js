import Vue from 'vue'
import Vuex from 'vuex'
import request from '../utils/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    productImage: JSON.parse(localStorage.getItem('image'))
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
      localStorage.setItem('image', JSON.stringify(payload))
      state.productImage = payload
    }
  },
  actions: {
    Login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          url: '/user/login',
          data: data
        })
          .then(res => {
            commit('SET_LOGIN', res)
            console.log('login', res)
            resolve(res)
          })
      })
    },
    registration ({ commit }, data) {
      return new Promise((resolve, reject) => {
        request({
          method: 'POST',
          url: '/user/create',
          data
        })
          .then(res => {
            commit('SET_REGISTER', res.guid)
            console.log(res)
            resolve(res)
          })
      })
    },
    setImage ({ commit }, data) {
      commit('SET_PICTURE', data)
    }
  },
  modules: {
  }
})

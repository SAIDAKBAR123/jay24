import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        success: '#119C2B',
        main: '#000000',
        primary: '#4285F4',
        gray: '#EFEFF4',
        red: '#F2271C',
        grayLight: '#9E9E9E',
        grayBack: '#F6F8F9'
      }
    }
  }
})

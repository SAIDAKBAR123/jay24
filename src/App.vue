<template>
  <v-app id="inspire">
    <Headers @toggle-modal-login="toggleLogin" @toggle-modal-register="toggleRegister" />
    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Login v-if="loginModal" @toggle-login-modal="toggleLogin" />
    <Register v-if="registerModal" @toggle-register-modal="toggleRegister" />
  </v-app>
</template>

<script>
import './global.scss'
import Headers from './components/header/index.vue'
import Login from './components/loginModal/Login.vue'
import Register from './components/registerModal/index.vue'
export default {
  components: {
    Headers,
    Login,
    Register
  },
  data: () => ({
    links: [{
      title: 'Пользователи',
      link: 'users'
    },
    {
      title: 'Обеды',
      link: 'lunchs'
    },
    {
      title: 'Меню',
      link: 'menus'
    },
    {
      title: 'Отчеты',
      link: 'reports'
    },
    {
      title: 'Настройки',
      link: 'settings'
    }
    ],
    loginModal: false,
    registerModal: false
  }),
  created () {
    // this.$vuetify.theme = 'dark'
  },
  methods: {
    toggleLogin () {
      this.loginModal = !this.loginModal
    },
    toggleRegister () {
      this.registerModal = !this.registerModal
    }
  }
}
</script>
<style scoped>
  .trueClass {
    background: red;
  }

  .startLunk {
    background: rgba(15, 158, 214, 0.37);
    color: rgb(10, 84, 223) !important;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>

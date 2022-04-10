<template>
  <v-app id="inspire">
    <Headers @toggle-login="toggleLogin" />
    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-dialog v-model="dialog" width="500" white class="rounded-md">
      <v-card class="pa-8">
        <v-card-title class="text-h5 justify-center white">
          Create an account or log in
        </v-card-title>
        <v-card-text>
          <div class="text-center">Log in below or create a new Wolt account.</div>
        </v-card-text>
        <div class="justify-center">
          <form class="py-6">
            <v-text-field
            outlined
            label="Login"
            prepend-inner-icon="mdi-login"
          ></v-text-field>
            <v-text-field
             type="password"
            outlined
            label="Password"
            prepend-inner-icon="mdi-login"
          ></v-text-field>
            <v-btn class="primary pa-4" large style="width: 100%" @click="submit">
            submit
          </v-btn>
        </form>
        </div>
        <v-card-text class="pb-0">
          <p class="text-center">This site is protected by hCaptcha. The hCaptcha Privacy Policy and Terms of Service apply.</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import './global.scss'
import Headers from './components/header/index.vue'
export default {
  components: {
    Headers
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
    dialog: false
  }),
  created () {
    // this.$vuetify.theme = 'dark'
  },
  methods: {
    toggleLogin () {
      this.dialog = !this.dialog
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

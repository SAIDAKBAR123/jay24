<template>
  <v-app id="inspire">
    <Headers />
    <v-main class="grey lighten-3">
      <v-container fluid>
            <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Headers from './components/header/index.vue'
export default {
  components: {
    Headers
  },
  data: () => ({
    links: [
      {
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
    ]
  }),
  created () {
    // this.$vuetify.theme = 'dark'
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

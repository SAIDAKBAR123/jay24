<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
      elevate-on-scroll
      elevation="6"
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-2"
          color="grey darken-1"
          size="42"
        >
          <v-img src="https://media-exp1.licdn.com/dms/image/C4D03AQG-qhCH7f2HuA/profile-displayphoto-shrink_800_800/0/1631712305647?e=1652918400&v=beta&t=lWbjKVBYkHpP9Fdv8bUM6vHTz4M1PV9i_q6EtFUa4Vs"></v-img>
        </v-avatar>
            <span class="text">Kamila <br> Shadimetova</span>
            <v-spacer></v-spacer>
            <TransitionGroup name="list" tag="button">
               <v-btn
              v-for="link in links"
              :key="link"
              active-class="startLunk"
              :to="link.link"
              text
            >
              {{ link.title }}
            </v-btn>

            </TransitionGroup>
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg" >
              <v-list color="transparent">
                <v-list-item
                  active-class="true"
                  v-for="n in links"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{n.title}}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Выйти
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="py-5 px-5"
            >
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
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

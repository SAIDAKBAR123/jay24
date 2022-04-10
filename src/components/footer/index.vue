<template>
  <footer class="products__footer mt-16 pt-10 px-6">
    <v-container fluid>
      <div>
        <img class="logo" @click="$router.push('/')" height="auto" width="130" :src="logo" alt="asd" srcset="" />
      </div>
      <v-row class="mb-6" no-gutters>
        <v-col sm="2" md="3">
          <v-card class="pa-2" tile>
            <h4>Download the app</h4>
          </v-card>
        </v-col>
        <v-col sm="5" offset-sm="2" md="4" offset-md="0">
          <v-card class="pa-2" tile>
            <h4 class="mb-5">Let's do this together</h4>
            <ul>
              <li v-for="(item, index) in 5" :key="index">
                <router-link to="#" class="line-animation">For Companies</router-link>
              </li>
            </ul>
          </v-card>
        </v-col>
        <v-col sm="5" offset-sm="2" md="3" offset-md="0">
          <v-card class="pa-2" tile>
            <h4 class="mb-5">Wolt links</h4>
            <ul>
              <li v-for="(item, index) in 5" :key="index">
                <router-link to="#" class="line-animation">Contact</router-link>
              </li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mb-6 bottom" align="center" no-gutters>
        <v-col sm="2" md="3">
          <v-card class="pa-2" tile>
            <span class="inf">©️ Wolt 2014–2022</span>
          </v-card>
        </v-col>
        <v-col sm="5" offset-sm="2" md="4" offset-md="0">
          <v-card class="pa-2" tile>
            <ul>
              <li v-for="(item, index) in 3" :key="index">
                <router-link to="#">Accessibility statement</router-link>
              </li>
            </ul>
          </v-card>
        </v-col>
        <v-col sm="5" offset-sm="2" md="3" offset-md="0">
          <v-card tile>
            <ul class="socials">
              <li v-for="(item, index) in 4" :key="index">
                <router-link to="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                      fill="#023462" />
                  </svg>
                </router-link>
              </li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
import './footer.scss'
import logo from '../../assets/deliveryegy.svg'
export default {
  data () {
    return {
      logo
    }
  }
}
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>

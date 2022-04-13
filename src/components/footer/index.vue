<template>
  <footer class="products__footer py-2 px-6">
    <v-container fluid class="d-flex justify-space-between align-center">
      <div>
        <img class="logo" @click="$router.push('/')" height="auto" width="130" :src="logo" alt="asd" srcset="" />
      </div>
      <p class="main--text">© Beeyor 2005 - 2022 All rights reserved</p>
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

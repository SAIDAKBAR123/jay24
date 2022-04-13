<template>
  <section class="wrapper">
    <v-parallax dark :src="main.background_image" height="100" style="object-fit: cover">
      <v-row style="background: #00000073; background-blend-mode: lighten;">
        <v-col cols="12">
          <v-container>
            <div class="content">
              <div class="top d-flex">
                <p class="mr-md-16">The average delivery time is 20–40 min</p>
                <p>Open today: 11.00–23.00</p>
              </div>
              <div class="bottom">
                <h1 class="text-h4 font-weight-thin mb-4 title">
                  {{ main.name }}
                </h1>
                <p class="subtitle">Utforsk det italienske kjøkkenet.</p>
                <div class="order">
                  <p>MIN. ORDER: 150.00</p>
                </div>
              </div>
            </div>
            <div class="single-product__status white lighten-5 d-none justify-space-between">
              <div class="d-flex aside-left">
                <div class="mr-10 number d-flex align-center">
                  <span class="mr-2">9.9</span>
                  <p>Out of 10</p>
                </div>
                <div>
                  <v-btn outlined class="ma-2 black--text">
                    <v-icon left>mdi-heart</v-icon>
                    Favorite
                  </v-btn>
                </div>
              </div>
              <div class="aside-right">
                <div class="d-flex align-center input">
                  <v-icon>mdi-magnify</v-icon>
                  <input type="text" placeholder="Search">
                </div>
              </div>
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
import Service from '../../../services/products'
export default {
  props: ['main'],
  methods: {
    getRestaurantById () {
      Service.getRestaurantById(this.$route.params.id).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    this.getRestaurantById()
  }
}
</script>

<style scoped>
  .wrapper {
    position: relative;
    height: 80vh !important;
  }

  /* .wrapper::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  } */
</style>

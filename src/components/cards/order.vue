<template>
  <v-row no-gutters>
      <v-col
        cols="12"
        sm="4"
        v-for="(order, i) in orderList"
        :key="i"
      >
        <v-card class="rounded-lg d-flex align-center flex-column ma-2">
          <v-card-text>
            <div class="text-center text-[#119C2B] title success--text mb-2">{{ getStatus(order.status) }}</div>
          </v-card-text>
          <!-- <v-img class="rounded-lg" :lazy-src="require('../../assets/loader.jpg')" max-height="160" max-width="260"
            :src="order.products ? order.products[0].image : ''" alt="sds" /> -->
          <v-row justify="center" class="mx-1">
            <v-col cols="auto" v-for="pr in order.products" :key="pr.id">
              <v-img height="100" width="140" contain class="rounded-lg style_img" :lazy-src="require('../../assets/loader.jpg')" max-height="160" max-width="260"
            :src="pr.image ? pr.image : ''" :alt="pr.image" />
            </v-col>
          </v-row>
            <v-card-text class="text-center">
              <p class="text-h6 main--text">Order number: {{ order.guid.substring(0,6) }} </p>
              <p class="font-weight-medium main--text mt-1 mx-auto" style="opacity: 0.7; width: 70%">
                Your order has been successfully created.
                Thanks for choosing
              </p>
            </v-card-text>
          <v-card-actions style="width: 100%" class="pa-4">
            <v-btn @click="back" text color="white" class="primary py-6 rounded-lg" style="width: 100% !important; text-transform: unset; letter-spacing: 1px;">
              Go to main
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
  props: ['orderList'],

  methods: {
    getStatus (status) {
      switch (status) {
        case 'new':
          return 'New'
        case 'restaurant-proccess':
          return 'Restaurant process'
        case 'restaurant-ready':
          return 'Restaurant ready'
        case 'courier-accepted':
          return 'Courier accepted'
        case 'courier-delivered':
          return 'Courier delivered'
        default:
          return 'New'
      }
    },
    back () {
      this.$router.push('/')
    }
  },
  created () {
    setTimeout(() => {
      console.log(this.orderList)
    }, 2000)
  }
}
</script>
<style scoped>
.style_img {
  /* border: 1px solid #9d9d9d5f; */
  transition: transform .2s;
}
.style_img:hover {
    /* Start the shake animation and make the animation last for 0.5 seconds */
   -ms-transform: scale(1.4); /* IE 9 */
  -webkit-transform: scale(1.4); /* Safari 3-8 */
  transform: scale(1.4);
  /* When the animation is finished, start again */
}

</style>

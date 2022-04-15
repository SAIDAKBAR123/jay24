<template>
  <v-row justify="center" class="fireworks-container">
    <v-col cols="auto" class="mt-10">
      <v-card color="white" class="rounded-lg pa-2" height="auto" width="441">
          <v-card-text class="">
              <v-row justify="center">
                  <v-col cols="12"><p class="text-center headline font-weight-bold">Success ✅</p></v-col>
                  <v-col cols="auto">
                      <p class="headline">Check number: <strong>{{ getOrderNumber }}</strong></p>
                  </v-col>
                  <v-col cols="auto">
                      <p class="text-center">Your order has been successfully created.
                        Thanks for choosing us</p>
                  </v-col>
              </v-row>
          </v-card-text>
            <v-card-actions>
                <v-btn class="rounded-lg mt-3" to="/" block color="primary">return to main page</v-btn>
            </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { Fireworks } from 'fireworks-js'

export default {
  computed: {
    getOrderNumber () {
      return this.$route.params.order_guid.substring(0, 6)
    }
  },
  created () {
    this.$store.commit('CLEAR_PRODUCT')
  },
  mounted () {
    const container = document.querySelector('.fireworks-container')
    const fireworks = new Fireworks(container, { /* options */ })
    fireworks.start()
    // fireworks.pause()
    // fireworks.clear()
    // // stop and clear fireworks
    // fireworks.stop()
    // after initialization you can change the fireworks parameters
    fireworks.setOptions({
      delay: { min: 10, max: 15 },
      acceleration: 1.06,
      explosion: 10
    })
  }
}
</script>

<style lang="scss">

</style>

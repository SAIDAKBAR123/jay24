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
          <v-img class="rounded-lg" :lazy-src="require('../../assets/loader.jpg')" max-height="160" max-width="260"
            :src="order.image" alt="" />
            <v-card-text class="text-center">
              <p class="text-h6 main--text">Номер заказа: 3234</p>
              <p class="font-weight-medium main--text mt-1" style="opacity: 0.7;">
                Ваш заказ успешно был создан.
                Спасибо за выбор
              </p>
            </v-card-text>
          <v-card-actions style="width: 100%" class="pa-4">
            <v-btn @click="this.$router.push('/')" text color="white" class="primary py-6 rounded-lg" style="width: 100% !important; text-transform: unset; letter-spacing: 1px;">
              Перейти к главному
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
    }
  }
}
</script>

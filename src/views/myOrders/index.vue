<template>
  <v-container fluid class="d-flex flex-wrap">
    <orderCard :orderList="orderList" />
  </v-container>
</template>

<script>
import orderCard from '../../components/cards/order.vue'
import ProductService from '../../services/products'
export default {
  data () {
    return {
      orderList: []
    }
  },
  components: {
    orderCard
  },
  methods: {
    getOrderList () {
      ProductService.getOrderList().then((res) => {
        this.orderList = res.orders.filter(el => el.user_id === this.$store.state.user.guid)
      })
    }
  },
  mounted () {
    this.getOrderList()
  }
}
</script>

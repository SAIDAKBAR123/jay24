<template>
  <div ref="wrapper" @click="toggleModal" class="wrapper">
    <v-card class="px-8 py-16 cart" width="600">
      <v-icon @click="closeModal" class="close">
        mdi-close
      </v-icon>
      <div class="text-h5">
        <div class="d-flex justify-space-between align-center">
          <p class="font-weight-bold">Ваш заказ</p>
          <p class="red--text text-h6">
            Очистить корзину
          </p>
        </div>
      </div>
      <v-list-item class="mt-6" v-for="item in orderList" :key="item.guid">
        <v-list-item-content>
          <div class="d-flex justify-space-between align-center">
          <div class="d-flex align-center">
            <v-icon>mdi-trash-can-outline</v-icon>
            <v-img class="rounded-lg mr-4 ml-6" width="80" src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"></v-img>
            <div style="width: 160px;">
              <h4>Гамбургер</h4>
              <p class="grayLight--text mt-1">Булочка гамбургер, соленые огурцы</p>
            </div>
          </div>
          <div>
            <p class="primary--text font-weight-bold">21 000 сум</p>
            <div class="grayBack rounded-lg pa-2 mt-2">
              <v-icon>mdi-minus</v-icon>
              <span class="mx-3">1</span>
              <v-button>
                <v-icon>mdi-plus</v-icon>
              </v-button>
            </div>
          </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import ProductServese from '../../services/products'
export default {
  data () {
    return {
      orderList: []
    }
  },
  methods: {
    toggleModal (e) {
      if (this.$refs.wrapper === e.target) {
        this.$emit('toggle-cart-modal')
      }
    },
    closeModal () {
      this.$emit('close-modal')
    },
    getUserOrders () {
      // const userData = localStorage.getItem('user')
      // const user = JSON.parse(userData)
      // console.log('user guid', user.guid || user)
      ProductServese.getUserOrderList('ba8cd451-e95c-466a-bf71-c28d3d4b73f3').then((res) => {
        console.log('order user', res.orders)
        this.orderList = res.orders
      })
    }
  },
  mounted () {
    this.getUserOrders()
  }
}
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 99999;
  }

  .cart {
    min-height: 100vh;
    position: relative;
  }
  .close {
    position: absolute;
    right: 25px;
    top: 20px;
    cursor: pointer;
  }
</style>

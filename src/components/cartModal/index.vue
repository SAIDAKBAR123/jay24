<template>
  <div ref="wrapper" @click="toggleModal" class="wrapper">
    <v-card class="px-8 py-16 cart rounded-0" width="600">
      <v-icon @click="closeModal" class="close">
        mdi-close
      </v-icon>
      <div class="text-h5">
        <div class="d-flex justify-space-between align-center">
          <p class="font-weight-bold">Your orders</p>
          <v-btn text :ripple="false">Clear cart</v-btn>
        </div>
      </div>
      <div class="list">
        <v-list-item class="mt-6 " v-for="item in products" :key="item.guid">
          <v-list-item-content>
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <v-btn text small color="red" fab @click="removeProduct(item)"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                <v-img class="rounded-lg mr-4 ml-6" width="80"
                  :src="item.image"></v-img>
                <div style="width: 160px;">
                  <h4 class="font-weight-bold title">{{ item.name }}</h4>
                </div>
              </div>
              <div>
                <p class="primary--text font-weight-bold">{{ item.price ? item.price : 0 }} uzs</p>
                <div class="grayBack rounded-lg pa-2 mt-2">
                  <v-btn small text>
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <span class="mx-3">1</span>
                  <v-btn small text>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-list-item-content>
        </v-list-item>
      </div>
      <div class="infomation pa-8">
        <v-row>
          <v-col>
            <p class="main--text font-weight-bold text-h5">Total price</p>
          </v-col>
          <v-col>
            <p class="primary--text font-weight-bold text-h5 d-flex justify-end">{{ totalPrice ? totalPrice : '' }} uzs
            </p>
          </v-col>
        </v-row>
        <div class="mt-4">
          <v-btn @click="addToOrder" text color="white" class="primary py-6 px-12 text-h6 font-weight-bold rounded-lg"
            style="text-transform: unset; letter-spacing: 1px; width: 100%">
            Order
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
// import ProductServese from '../../services/products'
export default {
  data () {
    return {
      orderList: [],
      totalPrice: null
    }
  },
  methods: {
    addToOrder () {
      console.log(this.$route)
      this.$emit('toggle-cart-modal')
      this.$router.push({
        path: this.$route.path + '/orders'
      })
    },
    removeProduct (item) {
      this.$store.commit('SAVE_STATE_PRODUCT', this.products.filter(el => el.guid !== item.guid))
      this.getTotalPrice()
      if (!this.products.length) {
        this.$emit('toggle-cart-modal')
      }
    },
    toggleModal (e) {
      if (this.$refs.wrapper === e.target) {
        this.$emit('toggle-cart-modal')
        console.log('getter', this.products)
      }
    },
    closeModal () {
      this.$emit('close-modal')
    },
    getUserOrders () {
      console.log(this.$store.state)
      // const userData = localStorage.getItem('user')
      // const user = JSON.parse(userData)
      // console.log('user guid', user.guid || user)
      // ProductServese.getUserOrderList().then((res) => {
      //   // console.log('order user', res.orders)
      //   this.orderList = res.orders
      // })
    },
    getTotalPrice () {
      this.totalPrice = this.products.reduce(function (sum, current) {
        return sum + parseInt(current.price)
      }, 0)
    }
  },
  computed: {
    ...mapGetters(['products'])
  },
  mounted () {
    this.getUserOrders()
    this.getTotalPrice()
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

  .list {
    min-height: 480px;
    max-height: 480px;
    overflow-y: scroll;
  }

  .list::-webkit-scrollbar {
    width: 12px;
    height: 10px !important;
    margin-right: 2px;
  }

  .list::-webkit-scrollbar-thumb {
    background: linear-gradient(60deg, #4285F4 43%, #4285F4 49%);
    border-radius: 12px;
  }

  .list::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #4285F4 14%, #4285F4 64%);
  }

  .list::-webit-scrollbar-track {
    background: rgba(245, 245, 245, 0.88);
    border-radius: 10px;
    -webkit-box-shadow: inset 0px 0px 0px rgba(245, 245, 245, 0.88);
    box-shadow: inset 0px 0px 0px rgba(245, 245, 245, 0.88);
  }

  .infomation {
    margin-top: auto;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0px;
  }
</style>

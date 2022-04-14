<template>
  <v-container fluid>
    <div>
      <h2 class="pa-2 text-h4 font-weight-bold main--text">Checkout your order</h2>
    </div>
    <v-row class="mt-6" outlined>
      <v-col cols="6">
        <v-card>
          <div class="pa-4">
            <h3 class="text-h5 font-weight-bold main--text">Private information</h3>
            <v-row class="pa-2 mt-4">
              <v-col cols="6" class="grayBack mr-2 rounded-lg main--text">
                <input type="text" :value="$store.state.user.name" placeholder="John" required />
              </v-col>
              <v-col cols="5" class="grayBack rounded-lg main--text">
                <input type="text" placeholder="+998 90 123 45 67" required />
              </v-col>
            </v-row>
          </div>
        </v-card>
        <v-card class="mt-4">
          <div class="pa-4">
            <h3 class="text-h5 font-weight-bold title">Your order</h3>
            <v-list-item class="mt-5 pa-0" v-for="(product, index) in products" :key="index">
              <v-list-item-content>
                <div class="d-flex justify-space-between align-center">
                  <div class="d-flex align-center">
                    <v-img class="rounded-lg mr-4" width="80"
                      :src="product.image"></v-img>
                    <div style="width: 160px;">
                      <h4 class="title font-weight-bold main--text">{{ product.name }}</h4>
                      <!-- <p class="grayLight--text mt-1">Булочка гамбургер, соленые огурцы</p> -->
                    </div>
                  </div>
                  <div>
                    <p class="primary--text font-weight-bold text-h5">{{ product.price }} uzs</p>
                    <div class="grayBack rounded-lg pa-2 mt-2">
                      <v-btn text>
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      <span class="mx-4 main--text">1</span>
                      <v-btn text>
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-card>
        <v-card class="mt-6">
          <div class="pa-4">
            <h3 class="text-h5 font-weight-bold main--text">Delivery type</h3>
            <v-radio-group row v-model="form.delivery_type">
              <v-radio label="Delivery" value="delivery" class="grayBack rounded-lg pa-2"
                style="width: 45%"></v-radio>
              <v-radio label="Self pickup" value="self-pick-up" class="grayBack rounded-lg pa-2"
                style="width: 45%">
              </v-radio>
            </v-radio-group>
          </div>
        </v-card>
        <v-card class="mt-6">
          <div class="pa-4">
            <h3 class="text-h5 font-weight-bold main--text">Choose branch</h3>
            <v-radio-group v-model="form.branch_id">
              <v-radio v-for="(item, n) in branches" :key="n" :label="item.name" :value="item.guid"></v-radio>
            </v-radio-group>
          </div>
        </v-card>
        <v-card class="mt-6">
          <div class="pa-4">
            <h3 class="text-h5 font-weight-bold main--text">Payment method</h3>
            <v-radio-group v-model="form.payment_type" row>
              <v-radio label="Cash" value="cash" class="grayBack rounded-lg pa-2" style="width: 47%"></v-radio>
              <v-radio label="Card" value="card" class="grayBack rounded-lg pa-2" style="width: 47%">
              </v-radio>
            </v-radio-group>
          </div>
        </v-card>
          <div class="mt-8">
            <v-textarea v-model="form.address" solo name="input-7-4" label="Enter your address"></v-textarea>
          </div>
          <div class="mt-8">
            <v-textarea v-model="form.comment" solo name="input-7-4" label="Enter your comment"></v-textarea>
          </div>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-4">
          <h3 class="text-h5 font-weight-bold main--text mb-4">Total</h3>
          <v-row class="pa-3" v-for="(product, index) in products" :key="index">
            <v-col cols="6 pa-0">
              <p class="grayDark--text">{{ product.name }}</p>
            </v-col>
            <v-col cols="6 pa-0">
              <p class="d-flex justify-end main--text font-weight-bold">{{ product.price }} uzs</p>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <v-row>
            <v-col>
              <p class="main--text font-weight-bold text-h6">Total price</p>
            </v-col>
            <v-col>
              <span class="primary--text font-weight-bold d-flex justify-end text-h6">{{ totalPrice }} сум</span>
            </v-col>
          </v-row>
          <v-card-actions class="pa-0 mt-6">
            <v-btn :loading="loading" @click="createOrder" text color="white" class="primary py-6 rounded-lg font-weight-bold text-h6"
              style="width: 100% !important; text-transform: unset; letter-spacing: 1px;">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Services from '../../services/products'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: {
        address: '',
        branch_id: '',
        comment: '',
        delivery_type: '',
        payment_type: '',
        product_id: [],
        user_id: this.$store.state.user.guid
      },
      branches: [],
      totalPrice: null
    }
  },
  methods: {
    createOrder () {
      console.log(this.form, this.$store.state.user.guid)
      this.loading = true
      Services.orderCreate({
        ...this.form,
        product_id: this.products.map(el => el.id)
      }).then(res => {
        console.log(res)
        this.loading = false
        this.$router.push({
          path: this.$route.path + '/success/' + res.guid
        })
        // alert('Successfully created !')
      }).catch(err => {
        alert(err.data.message)
      }).finally(() => {
        this.loading = false
      })
    },
    getMerchantBranches () {
      Services.getMerchantBranches(this.$route.params.id).then(res => {
        console.log(res)
        this.branches = res.merchant_branches
      })
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
    this.getTotalPrice()
  },
  created () {
    this.getMerchantBranches()
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .v-textarea .v-input__control .v-input__slot {
    box-shadow: unset !important;
  }

  textarea {
    box-shadow: unset !important;
  }

  .v-textarea div {
    box-shadow: unset !important;
  }
</style>

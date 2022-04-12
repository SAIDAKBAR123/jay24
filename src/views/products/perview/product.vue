<template>
  <v-row class="products pt-10">
    <v-col cols="6" md="2" class="menu-fixed">
      <v-card class="pa-2" style="background: transparent;">
        <div class="aside-left">
          <ul class="d-flex flex-column">
            <li @click="$vuetify.goTo(`#${categories.name}`, options)">
              {{ categories.name }}
            </li>
          </ul>
        </div>
      </v-card>
    </v-col>
    <v-col cols="8" md="8">
      <div class="pa-2">
        <div class="aside-center">
          <div class="mb-16" :id="categories.name">
            <div>
              <h2 class="font-weight-bold text-h4">{{ categories.name }}</h2>
            </div>
            <v-row no-gutters class="mt-6">
              <v-col cols="12" sm="4" v-for="i in 2" :key="i" class="ma-2">
                <v-card :loading="loading" class="mx-auto rounded-lg">
                  <v-img height="220" :src="product.image"></v-img>

                  <v-card-text>
                    <p class="primary--text font-weight-bold text-h6">{{ product.price }} сум</p>
                    <p class="main--text text-h6 font-weight-medium">
                      {{ product.name }}
                    </p>
                    <p class="font-weight-medium main--text" style="opacity: 0.7;">
                      Булочка гамбургер, соленые огурцы
                    </p>
                  </v-card-text>
                  <v-card-actions class="pa-4">
                    <v-btn @click="toggleDialog(product.id)" text
                      class="gray py-6 rounded-lg main--text font-weight-medium"
                      style="width: 100% !important; text-transform: unset; letter-spacing: 1px;">
                      В корзину
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-col>
    <Modal v-if="dialog" @toggle-dialog="toggleDialog" :product="product" />
  </v-row>
</template>

<script>
import Modal from './Modal.vue'
import * as easings from 'vuetify/lib/services/goto/easing-patterns'
import Product from '../../../services/products'
export default {
  props: ['product'],
  components: {
    Modal
  },
  data () {
    return {
      loading: false,
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),
      name: 'burger',
      dialog: false,
      categories: [],
      names: [{
        name: 'Burger'
      },
      {
        name: 'Lavash'
      }
      ]
    }
  },
  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    }
  },
  methods: {
    toggleDialog (e) {
      this.dialog = !this.dialog
      this.productId = this.product.find(product => product.id === e)
      console.log('product', this.product)
    },
    getCategories () {
      const categoryId = this.product.category_id
      Product.getCategories(categoryId).then((res) => {
        console.log('category', res)
        this.categories = res
      })
    }
  },
  created () {
    this.getCategories()
  }
}
</script>

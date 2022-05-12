<template>
  <v-container class="products">
     <div class="aside-center main--text">
          <div class="mb-16" :id="'a'+product.id">
            <div>
              <h2 class="font-weight-bold text-h4">{{ categories.name }}</h2>
            </div>
            <v-row no-gutters class="mt-6">
              <v-col cols="12" sm="3" class="ma-2" >
                <v-card class="mx-auto rounded-lg">
                  <v-img height="220" :src="product.image"></v-img>

                  <v-card-text>
                    <p class="primary--text font-weight-bold text-h6">{{ product.price }} uzs</p>
                    <p class="main--text text-h6 font-weight-medium">
                      {{ product.name }}
                    </p>
                    <!-- <p class="font-weight-medium main--text" style="opacity: 0.7;">
                      Булочка гамбургер, соленые огурцы
                    </p> -->
                  </v-card-text>
                  <v-card-actions class="pa-4">
                    <v-btn @click="toggleDialog(product)" text
                      class="gray py-6 rounded-lg main--text font-weight-medium text-h6"
                      style="width: 100% !important; text-transform: unset; letter-spacing: 1px;">
                      In cart
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
    <Modal v-if="dialog" @toggle-dialog="toggleDialog" :product="product" :option="option" />
  </v-container>
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
      option: {},
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

    getPropName (arg) {
      return arg.split(' ').join('')
    },

    toggleDialog (e) {
      this.dialog = !this.dialog
      this.option = { ...e }
    },
    getCategories () {
      const categoryId = this.product.category_id
      Product.getCategories(categoryId).then((res) => {
        this.categories = res
      })
    }
  },
  created () {
    this.$vuetify.goTo(0, {
      duration: 0,
      easing: 'linear'
    })
    this.getCategories()
  }
}
</script>

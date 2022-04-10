<template>
  <v-row>
    <v-col cols="6" md="2" class="menu-fixed">
      <v-card class="pa-2">
        <div class="aside-left">
          <ul class="d-flex flex-column">
            <li v-for="(item, index) in names" :key="index" @click="$vuetify.goTo(`#${item.name}`, options)">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </v-card>
    </v-col>
    <v-col cols="6" md="7">
      <v-card class="pa-2">
        <div class="aside-center">
          <div class="mb-16" v-for="(i, index) in names" :key="index" :id="i.name" :ref="i.name">
            <div>
              <h2 class="font-weight-bold">{{ i.name }}</h2>
            </div>
            <ul class="products__list">
              <li @click="toggleDialog" v-for="product in products" :key="product.id" class="d-flex justify-space-between">
                <div>
                  <h2 class="title font-weight-bold">{{product.name}}</h2>
                  <p class="font-weight-regular py-3">
                    {{ product.text }}
                  </p>
                  <span class="font-weight-medium text-uppercase blue--text" ref="product">NOk
                    {{ product.price }}</span>
                </div>
                <v-img class="rounded-lg" lazy-src="https://picsum.photos/id/11/10/6" max-height="185" max-width="219"
                  src="https://cdn.pixabay.com/photo/2019/02/26/16/45/burger-4022487_960_720.jpg"></v-img>
              </li>
            </ul>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="6" md="2">
      <v-card class="pa-2">
        <div class="aside-right">
          <h3 class="font-weight-bold">Restaurant information</h3>
          <div class="address d-flex flex-column space-top1 mt-6">
            <h5 class="py-1 font-weight-black">Address</h5>
            <span class="py-1 text text">Skippergata 6A</span>
            <span class="py-1 subtext">9008 Tromsø</span>
            <a href="#" class="text-decoration-none font-weight-black blue--text mt-3">See map</a>
          </div>
          <div class="mt-8">
            <h5>Opening times</h5>
            <div class="tab">
              <v-card>
                <v-tabs v-model="tab" dark>
                  <v-tab v-for="item in items" :key="item.tab">
                    {{ item.tab }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item v-for="item in items" :key="item.tab">
                    <v-card flat>
                      <v-card-text>
                        <p class="text">{{ item.day }}</p>
                        <span class="subtext">{{ item.time }}</span>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </div>
            <p class="text mt-6" ref="burger">
              If you have allergies or other dietary restrictions, please contact the restaurant. The
              restaurant will provide food-specific information upon request.
            </p>
            <a href="#" class="font-weight-bold blue--text">+4794096129</a>
            <a href="#" class="font-weight-bold blue--text mt-6 d-block" size="14">See more information</a>
            <div class="mt-6">
              <h5>Categories</h5>
              <ul class="d-flex pa-0">
                <li>
                  <a href="#" class="blue--text font-weight-bold mr-2 text-decoration-none">American</a>
                </li>
                <li>
                  <a href="#" class="blue--text font-weight-bold mr-2 text-decoration-none">Dessert</a>
                </li>
                <li>
                  <a href="#" class="blue--text font-weight-bold mr-2 text-decoration-none">Burger</a>
                </li>
                <li>
                  <a href="#" class="blue--text font-weight-bold mr-2 text-decoration-none">BBQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
    <Modal v-if="dialog" @toggle-dialog="toggleDialog" />
  </v-row>
</template>

<script>
import Modal from './modal/index.vue'
import * as easings from 'vuetify/lib/services/goto/easing-patterns'
export default {
  props: ['products'],
  components: {
    Modal
  },
  data () {
    return {
      type: 'number',
      number: 9999,
      selector: '#5',
      selections: ['#5', '#second', '#third'],
      selected: 'Button',
      elements: ['Button', 'Radio group'],
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),
      name: 'burger',
      dialog: false,
      names: [{
        name: 'burger'
      },
      {
        name: 'lavash'
      },
      {
        name: 'pizza'
      },
      {
        name: 'chiz'
      },
      {
        name: 'zzzz'
      }
      ]
    }
  },
  computed: {
    target () {
      const value = this[this.type]
      if (!isNaN(value)) return Number(value)
      else return value
    },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    },
    element () {
      if (this.selected === 'Button') return this.$refs.burger
      else if (this.selected === 'Radio group') return this.$refs.radio
      else return null
    }
  },
  methods: {
    toggleDialog () {
      this.dialog = !this.dialog
    }
  }
}
</script>

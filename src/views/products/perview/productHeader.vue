<template>
  <div class="menu-fixed">
     <div class="aside-left">
        <ul class="d-flex flex-column">
          <li v-for="product in products" :key="product.id" @click="$vuetify.goTo(`#a${product.id}`, {duration: 100,
            offset: 0,
            easing: 'easeInOutCubic',
            })">
            {{ product.name }}
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
// import Product from '../../../services/products'
export default {
  props: ['products'],
  data () {
    return {
      categories: []
    }
  },
  methods: {
    getPropName (arg) {
      return arg.split(' ').join('')
    }
  }
}
</script>

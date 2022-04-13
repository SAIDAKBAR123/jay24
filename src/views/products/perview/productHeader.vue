<template>
  <div class="menu-fixed">
     <div class="aside-left">
        <ul class="d-flex flex-column">
          <li v-for="product in products" :key="product.id" @click="$vuetify.goTo(`#${product.name}`, options)">
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
  }
}
</script>

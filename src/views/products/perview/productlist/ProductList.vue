<template>
  <section>
    <v-container fluid>
      <div class="products d-flex justify-space-between">
            <ProductItem :products="products" />
      </div>
    </v-container>
  </section>
</template>

<script>
import './style.scss'
import ProductItem from './productItem/productItem.vue'
export default {
  props: ['products', 'items'],
  components: {
    ProductItem
  },
  data () {
    return {
      dialog3: false
    }
  }
}
</script>

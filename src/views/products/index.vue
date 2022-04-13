<template>
  <div class="single-product">
    <main-section :main="merchant" />
    <v-row class="mt-16">
      <v-col cols="2">
        <productHeader :products="products" />
      </v-col>
      <!-- <product-list :items="items" :products="products" /> -->
      <v-col cols="10">
        <product-item v-for="(product, index) in products" :product="product" :key="index" />
      </v-col>
    </v-row>
    <Footer />
    <button v-show="scY > 750" class="toTopBtn" @click="scrollToTop">
      <v-icon>mdi-chevron-up</v-icon>
    </button>
  </div>
</template>
<script>
import MainSection from './perview/main.vue'
import ProductItem from './perview/product.vue'
import Footer from '../../components/footer/index.vue'
import Product from '../../services/products'
import './product.scss'
import productHeader from './perview/productHeader.vue'
export default {
  components: {
    MainSection,
    Footer,
    ProductItem,
    productHeader
  },
  data () {
    return {
      dialog3: false,
      text: 'hello',
      scTimer: 0,
      scY: 0,
      merchant: {},
      products: [],
      productsCategoryID: [],
      activeBlock: null
    }
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    openModal () {
      this.dialog3 = !this.dialog3
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    getProducts () {
      console.log(this.$route.params.id)
      Product.getProducts(this.$route.params.id).then((res) => {
        console.log(res)
        this.products = res.products
        // this.productsCategoryID = res.products.forEach(el => {
        //   return el.id
        // })
      })
    },
    getRestaurantById () {
      Product.getRestaurantById(this.$route.params.id).then(res => {
        console.log(res)
        this.merchant = res
      })
    }
  },
  created () {
    this.getProducts()
    this.getRestaurantById()
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  a {
    font-size: inherit;
    line-height: inherit;
  }

  .cancel-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 0 !important;
    cursor: pointer;
  }

  .toTopBtn {
    position: fixed;
    bottom: 40px;
    right: 100px;
    border-radius: 50%;
    background-color: #E3E3E5;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toTopBtn:hover {
    border: 1px solid #111;
    transition: 0.5s;
    z-index: 1;
  }
</style>

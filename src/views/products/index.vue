<template>
  <div class="single-product">
    <div class="wrapper">
      <main-section />
      <product-list :products="products" />
      <Footer />
    </div>
    <button class="toTopBtn">
      <span class="font-weight-black text-h6">&#8593;</span>
    </button>
  </div>
</template>
<script>
import MainSection from './perview/main/index.vue'
import ProductList from './perview/productlist/ProductList.vue'
import Footer from '../../components/footer/index.vue'
export default {
  components: {
    MainSection,
    ProductList,
    Footer
  },
  data () {
    return {
      dialog3: false,
      text: 'hello',
      items: [{
        tab: 'tab1',
        content: 'tab 1 content',
        day: 'Modday-Friday',
        time: '10.00-21.00'
      },
      {
        tab: 'tab2',
        content: 'tab 2 content',
        day: 'Sunday',
        time: '10.00-20.00'
      }
      ],
      products: [
        {
          id: Date.now(),
          name: 'Pizza',
          price: '54.000',
          text: 'lorem ipsum'
        },
        {
          id: Date.now(),
          name: 'Burger',
          price: '34.000',
          text: 'lorem ipsum'
        }
      ],
      activeBlock: null,
      idBlocks: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    openModal () {
      this.dialog3 = !this.dialog3
    }
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
    right: 200px;
    border-radius: 50%;
    background-color: #E3E3E5;
    width: 40px;
    height: 40px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .toTopBtn:hover {
    border: 1px solid #111;
    transition: 0.5s;
    z-index: 1;
  }
</style>

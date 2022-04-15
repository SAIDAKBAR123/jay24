<template>
  <div>
    <v-row no-gutters class="my-2">
    </v-row>
    <v-row class="mx-1">
      <v-col>
        <v-carousel hide-delimiters class="rounded-lg im">
          <v-carousel-item
            class="rounded-lg"
            v-for="(item,i) in banners"
            :key="i"
            :src="require('../../assets/' + item.src)"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row class="mx-1">
      <v-col cols="12">
        <h1 class="">Merchant life 💰🤑</h1>
      </v-col>
      <v-col v-for="(item,i) in restaurants" :key="i" cols="12" sm="6" md="4" xl="3">
        <Card :element="item">hello</Card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Product from '../../services/products'
import Card from '../../components/cards'
export default {
  components: {
    Card
  },
  data () {
    return {
      restaurants: [
        {
          url: '',
          title: "McDonald's Sliema",
          description: "I'm lovin' it! Minimum order 15€",
          image:
            'https://imageproxy.wolt.com/venue/5e874c0da63b1e40831cb39b/2783d026-77eb-11ea-b3e5-0a58647e8cba_1010-x-544.jpg',
          delevery_time: '15 ~ 20 min',
          rating: 5
        },
        {
          url: '',
          title: 'KFC Gzira',
          description: "Finger lickin' good.",
          image:
            'https://imageproxy.wolt.com/venue/5f9812bfdc6e1970d31c866a/0cd2c572-1f78-11eb-8ed9-c6a78ec5cb8a_wolt_banner_strips.jpg',
          delevery_time: '15 ~ 25 min',
          rating: 3.5
        },
        {
          url: '',
          title: "J'Oli Sandwich and Salad",
          description: 'Delicious healthy food',
          image:
            'https://imageproxy.wolt.com/venue/5e6fa61d14bcaedc41e84673/1855e6ca-a1f3-11ea-bdd8-0a5864764224_9_daryl_cauchi_dsc_7535.jpg',
          delevery_time: '20 ~ 30 min',
          rating: 2
        },
        {
          url: '',
          title: "Moo's Kebab Gzira",
          description: 'Turkish delicacies!',
          image:
            'https://imageproxy.wolt.com/venue/5e7c615ef14d33ada8c0860c/0055942a-bf5e-11ea-883a-223c443d7624_118_daryl_cauchi_9328.jpg',
          delevery_time: '21 ~ 30 min',
          rating: 4
        },
        {
          url: '',
          title: 'Pad Thai Kitchen',
          description: 'Previously Good Thaimes at Ju',
          image:
            'https://imageproxy.wolt.com/venue/5ed1251a79f6b34a1399f7e3/fbe4be7e-d335-11eb-a9c4-fe525f04ec15_pad_thai_kitchen_2.jpg',
          delevery_time: '21 ~ 30 min',
          rating: 4
        },
        {
          url: '',
          title: "Moo's Kebab Gzira",
          description: 'Turkish delicacies!',
          image:
            'https://imageproxy.wolt.com/venue/5e7c615ef14d33ada8c0860c/0055942a-bf5e-11ea-883a-223c443d7624_118_daryl_cauchi_9328.jpg',
          delevery_time: '21 ~ 30 min',
          rating: 5
        }
      ],
      btnLink: [
        {
          link: '/discovery',
          title: 'Discovery',
          icon: 'mdi-map-marker-distance'
        },
        {
          link: '/',
          title: 'Restaurants',
          icon: 'mdi-silverware-fork-knife'
        },
        {
          link: '/stores',
          title: 'Stores',
          icon: 'mdi-shopping'
        }
      ],
      banners: [
        {
          src: 'banner1.jpg'
        },
        {
          src: 'banner2.jpg'
        },
        {
          src: 'banner4.jpg'
        }
      ]
    }
  },
  methods: {
    getRestaurants () {
      Product.getRestaurants().then(res => {
        this.restaurants = res.merchants
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getRestaurants()
  },
  created () {
    this.$store.commit('CLEAR_PRODUCT')
  }
}
</script>

<style scoped lang="scss">
 .title {
   color: red;
 }
</style>

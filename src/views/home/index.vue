<template>
  <div>
    <v-row no-gutters class="my-4">
      <v-col cols="4">
        <v-btn text>Malta <v-icon right>mdi-chevron-down</v-icon></v-btn>
      </v-col>
      <v-col cols="auto">
        <v-row no-gutters justify="center">
          <v-col
            v-for="item in btnLink"
            :key="item.link"
            cols="auto"
            class="mx-1"
          >
            <v-btn
              text
              class="rounded-xl text-capitalize"
              :to="item.link"
              active-class="background blue darken-1 white--text"
            >
              <v-icon left> {{ item.icon }}</v-icon
              >{{ item.title }}</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto"> </v-col>
    </v-row>
    <v-row class="mx-1">
      <v-col>
        <v-carousel hide-delimiters class="rounded-lg im">
          <v-carousel-item
            class="rounded-lg"
            v-for="(item,i) in banners"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row class="mx-1">
      <v-col cols="12">
        <h1 class="">€0 Delivery Fee up to 2Km 💰🤑</h1>
      </v-col>
      <v-col v-for="(item,i) in restaurants" :key="i" cols="4">
        <Card :element="item">hello</Card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
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
          src: 'https://discovery-cdn.wolt.com/cities/malta/sections/48cf8754-566d-11ec-844d-9e36fa60c423_12f3f254_f10b_11eb_a680_82f2988b9701_1_darylcauchi_convenience_4271.jpg'
        },
        {
          src: 'https://discovery-cdn.wolt.com/cities/malta/sections/e991e678-16cb-11ec-ae14-0ebfd5c4794a_discovery6666.jpg'
        },
        {
          src: 'https://imageproxy.wolt.com/venue/60ee9b02c5a9794eb92c086e/52830008-057a-11ec-a63b-b6ea38b4b54b_tuk_tuk_10.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
 .title {
   color: red;
 }
</style>

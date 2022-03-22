<template>
  <div>
    <v-row no-gutters class="my-4">
    <v-col cols="4">
      <v-btn text>Malta <v-icon right>mdi-chevron-down</v-icon></v-btn>
    </v-col>
    <v-col cols="auto">
      <v-row no-gutters justify="center">
        <v-col v-for="item in btnLink" :key="item.link" cols="auto" class="mx-1">
          <v-btn text class="rounded-xl text-capitalize" :to="item.link" active-class="background blue darken-1 white--text"> <v-icon left> {{ item.icon }}</v-icon>{{ item.title }}</v-btn>
        </v-col>
      </v-row>
    </v-col>
        <v-spacer></v-spacer>
  <v-col cols="auto">
    </v-col>
  </v-row>
  <v-row>
    <v-col v-for="item in restaurants" :key="item" cols="4">
      <Card :element="item" >hello</Card>
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
          image: 'https://imageproxy.wolt.com/venue/5e874c0da63b1e40831cb39b/2783d026-77eb-11ea-b3e5-0a58647e8cba_1010-x-544.jpg',
          delevery_time: '15 min ~ 20 min'
        },
        {
          url: '',
          title: 'KFC Gzira',
          description: "Finger lickin' good.",
          image: 'https://imageproxy.wolt.com/venue/5f9812bfdc6e1970d31c866a/0cd2c572-1f78-11eb-8ed9-c6a78ec5cb8a_wolt_banner_strips.jpg',
          delevery_time: '15 min ~ 25 min'
        },
        {
          url: '',
          title: "J'Oli Sandwich and Salad",
          description: 'Delicious healthy food',
          image: 'https://imageproxy.wolt.com/venue/5e6fa61d14bcaedc41e84673/1855e6ca-a1f3-11ea-bdd8-0a5864764224_9_daryl_cauchi_dsc_7535.jpg',
          delevery_time: '20 min ~ 30 min'
        },
        {
          url: '',
          title: "Moo's Kebab Gzira",
          description: 'Turkish delicacies!',
          image: 'https://imageproxy.wolt.com/venue/5e7c615ef14d33ada8c0860c/0055942a-bf5e-11ea-883a-223c443d7624_118_daryl_cauchi_9328.jpg',
          delevery_time: '21 ~ 30 min'
        },
        {
          url: '',
          title: 'Pad Thai Kitchen',
          description: 'Previously Good Thaimes at Ju',
          image: 'https://imageproxy.wolt.com/venue/5ed1251a79f6b34a1399f7e3/fbe4be7e-d335-11eb-a9c4-fe525f04ec15_pad_thai_kitchen_2.jpg',
          delevery_time: '21 ~ 30 min'
        },
        {
          url: '',
          title: "Moo's Kebab Gzira",
          description: 'Turkish delicacies!',
          image: 'https://imageproxy.wolt.com/venue/5e7c615ef14d33ada8c0860c/0055942a-bf5e-11ea-883a-223c443d7624_118_daryl_cauchi_9328.jpg',
          delevery_time: '21 ~ 30 min'
        }
      ],
      btnLink: [
        {
          link: '1',
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
      ]
    }
  }

}
</script>

<style>

</style>

<template>
  <v-row no-gutters class="my-4">
    <v-col cols="auto">
      <v-btn text>Malta ></v-btn>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="auto">
      <v-row no-gutters justify="center">
        <v-col v-for="item in btnLink" :key="item.link" cols="auto" class="mx-1">
          <v-btn text class="rounded-xl" :to="item.link" active-class="background blue darken-1 white--text"> <v-icon left> {{ item.icon }}</v-icon>{{ item.title }}</v-btn>
        </v-col>
      </v-row>
    </v-col>
        <v-spacer></v-spacer>
  <v-col cols="auto">
      <v-btn text>Malta ></v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      btnLink: [
        {
          link: '1',
          title: 'Discovery',
          icon: 'mdi-power-socket-it'
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

<template>
  <div>
    <template>
      <v-card class="mx-auto" max-width="100%">
        <v-img
          :src="element.image"
          :lazy-src="require('../../assets/loader.jpg')"
          height="200px"
        ></v-img>
        <v-row align="center" :gutters="[10, 10]" justify="space-between">
          <v-col cols="auto">
            <v-card-title class="overflow-hidden"> {{element.title }} </v-card-title>
            <v-card-subtitle
              ><span> {{ element.description}} </span>
            </v-card-subtitle>
          </v-col>
          <v-col cols="auto">
            <v-sheet color="blue lighten-2" class="px-2 py-2 rounded-lg text-body-2 mx-2">
              {{ element.delevery_time }}
            </v-sheet>
          </v-col>
        </v-row>
        <v-card-actions>
            <v-row>
                <v-col cols="12" class="py-0">
                    <v-divider style="  border-top: 0.0625rem dashed rgba(32, 33, 37, 0.12)"></v-divider>
                </v-col>
                <v-col class="text--primary">
                    <v-icon left>mdi-bike</v-icon> 23 000 <small>uzs</small>
                </v-col>
            </v-row>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  props: ['element'],
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
</style>

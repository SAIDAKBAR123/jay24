<template>
  <div>
    <template>
      <v-card class="mx-auto" max-width="100%">
        <div class="img-hover-zoom">
        <v-img
          :src="element.image"
          class="imgs"
          :lazy-src="require('../../assets/loader.jpg')"
          height="200px"
        ></v-img>
        </div>
        <v-row align="center" :gutters="[10, 10]" justify="space-between">
          <v-col cols="auto">
            <v-card-title class="overflow-hidden"> {{element.title }} </v-card-title>
            <v-card-subtitle
              ><span> {{ element.description }} </span>
            </v-card-subtitle>
          </v-col>
          <v-col cols="auto">
            <v-sheet color="blue lighten-4" class="px-2 py-2 rounded-lg text-body-2 mx-2 blue--text">
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
                     <v-rating
                      :value="element.rating"
                      disabled
                      background-color="orange lighten-3"
                      color="orange"
                      dense
                    ></v-rating>
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
<style scoped>
/* [1] The container */
.img-hover-zoom {
  cursor: pointer;
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom .imgs {
  transition: transform .5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover .imgs {
  transform: scale(1.10);
}
</style>

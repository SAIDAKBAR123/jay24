<template>
  <v-dialog class="rounded-10" v-model="dialog3" max-width="500px">
        <v-card v-for="product in products" :key="product">
          <v-card-title class="pa-0">
            <span>
              <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="100%" max-width="100%"
                src="https://picsum.photos/id/11/500/300"></v-img>
            </span>
            <div text @click="dialog3 = false"
              class="cancel-btn rounded-circle d-flex justify-center align-center grey lighten-3 v-btn--absolute"
              style="width: 44px !important; height: 44px">
              <span class="display-1">&times;</span>
            </div>
            <v-spacer></v-spacer>
            <v-card-text class="d-flex flex-column">
              <h2 class="text-h4 font-weight-bold mb-4">{{ product.name }}</h2>
              <span class="blue--text font-weight-bold mb-8">KZT {{product.price}}</span>
              <span>Тесто на выбор</span>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
  props: ['dialog3'],
  watch: {
    dialog3: function (newValue, oldValue) {

    }
  }
}
</script>

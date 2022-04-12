<template>
   <div class="dialog" @click="toggleDialog" ref="wrapper">
     <v-card
    class="mx-auto my-12 rounded-lg"
    max-width="550"
  >
    <v-img
      height="300"
      :src="product.image"
    ></v-img>

    <v-card-title class="font-weight-bold text-h4">{{ product.name }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <p class="blue--text font-weight-bold mr-4">{{ product.price }} сум</p>
        <div class="primary py-1 px-4 rounded-lg white--text">
          Popular
        </div>
      </v-row>

      <div class="mt-8">Jackburger, graffifries og valgfri box 0,33 Cola eller Cola uten sukker.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="white" class="primary py-6 px-12 rounded-lg" style="text-transform: unset; letter-spacing: 1px;">
         Добавить в корзину
      </v-btn>
    </v-card-actions>
  </v-card>
   </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    toggleDialog (e) {
      if (e.target === this.$refs.wrapper) {
        this.$emit('toggle-dialog')
        console.log(this.product)
      }
    }
  }
}
</script>

<style scoped>
.dialog {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}
</style>

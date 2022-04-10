<template>
   <div class="dialog" @click="toggleDialog" ref="wrapper">
     <v-card
    :loading="loading"
    class="mx-auto my-12 rounded-lg"
    max-width="550"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title class="font-weight-bold text-h4">Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <p class="blue--text font-weight-bold mr-4">NOK 219.00</p>
        <div class="primary py-1 px-4 rounded-lg white--text">
          Popular
        </div>
      </v-row>

      <div class="mt-8">Jackburger, graffifries og valgfri box 0,33 Cola eller Cola uten sukker.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
   </div>
</template>

<script>
export default {
  props: ['dialog'],
  watch: {
    dialog: function (newValue, oldValue) {
      console.log('111', newValue, oldValue)
    }
  },
  methods: {
    toggleDialog (e) {
      if (e.target === this.$refs.wrapper) {
        this.$emit('toggle-dialog')
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

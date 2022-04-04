<template>
  <v-app-bar app color="white" height="60" flat elevate-on-scroll elevation="6">
    <v-container class="py-0 fill-height" fluid>
      <v-row justify="space-between" align="center">
        <v-col cols="auto">
          <img height="auto" width="130" :src="logo" alt="asd" srcset="" />
        </v-col>
        <v-col cols="4" class="ml-16">
          <v-text-field
            dense
            full-width
            flat
            hide-details
            placeholder="Search"
            prepend-inner-icon="mdi-find-replace"
            class="border-none rounded-md"
            :rounded="false"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-row no-gutters>
            <v-col cols="auto">
              <v-btn text class="textFormat" color="grey darken-2" style="">Log in</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn outlined color="grey darken-2" class="textFormat">Sign up</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-menu allow-overflow offset-y max-width="400px" nudge-bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    :ripple="false"
                    text
                    color="grey darken-2"
                    class="textFormat"
                    >English <v-icon right> mdi-chevron-down </v-icon></v-btn
                  >
                </template>
                <v-sheet rounded class="mr-4" color="white" width="400px" height="400px">

                </v-sheet>
              </v-menu>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import logo from '../../assets/deliveryegy.svg'
export default {
  data () {
    return {
      logo
    }
  }
}
</script>

<style scoped lang="scss">
$text-field-outlined-fieldset-border-width: 0.2px;
.textFormat {
  text-transform: none !important;
}
.v-btn::before {
  background-color: transparent;
}
</style>

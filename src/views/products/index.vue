<template>
  <div class="single-product">
    <div class="wrapper">
      <div class="liner"></div>
      <v-parallax dark src="https://cdn.pixabay.com/photo/2019/07/29/05/52/burger-4369973_960_720.jpg">
        <v-row>
          <v-col cols="12">
            <v-container>
              <div class="content">
                <div class="top d-flex">
                  <p class="mr-md-16">The average delivery time is 20–40 min</p>
                  <p>Open today: 11.00–23.00</p>
                </div>
                <div class="bottom">
                  <h1 class="text-h4 font-weight-thin mb-4 title">
                    BurgerMan Sentrum
                  </h1>
                  <p class="subtitle">Utforsk det italienske kjøkkenet.</p>
                  <div class="order">
                    <p>MIN. ORDER: 150.00</p>
                  </div>
                </div>
              </div>
              <div class="single-product__status white lighten-5 d-none justify-space-between">
                <div class="d-flex aside-left">
                  <div class="mr-10 number d-flex align-center">
                    <span class="mr-2">9.9</span>
                    <p>Out of 10</p>
                  </div>
                  <div>
                    <v-btn outlined class="ma-2 black--text">
                      <v-icon left>mdi-heart</v-icon>
                      Favorite
                    </v-btn>
                  </div>
                </div>
                <div class="aside-right">
                  <div class="d-flex align-center input">
                    <v-icon>mdi-magnify</v-icon>
                    <input type="text" placeholder="Search">
                  </div>
                </div>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-parallax>

      <v-container fluid>
        <div class="products d-flex justify-space-between">
          <v-row no-gutters>
            <v-col cols="6" md="2">
              <v-card class="pa-2" tile>
                <div class="aside-left">
                  <ul>
                    <li>
                      <a href="#" class="active">Burger</a>
                    </li>
                    <li>
                      <a href="#">Burger</a>
                    </li>
                    <li>
                      <a href="#">Burger</a>
                    </li>
                    <li>
                      <a href="#">Burger</a>
                    </li>
                  </ul>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="7">
              <v-card class="pa-2">
                <div class="aside-center">
                  <div>
                    <h2>NAPKINS AND CUTLERY</h2>
                  </div>
                  <ul class="products__list">
                    <li class="d-flex justify-space-between">
                      <div>
                        <h2 class="title font-weight-bold">Burgers</h2>
                        <p class="font-weight-regular py-3">- 150 grams of fresh ground Beef from Solberg Pettersen.</p>
                        <span class="font-weight-medium text-uppercase blue--text">NOk 184.00</span>
                      </div>
                      <v-img class="rounded-lg" lazy-src="https://picsum.photos/id/11/10/6" max-height="185" max-width="219"
                        src="https://picsum.photos/id/11/500/300"></v-img>
                    </li>
                  </ul>
                </div>
              </v-card>
            </v-col>
            <v-col cols="6" md="3">
              <v-card class="pa-2">
                <div class="aside-right">
                  <h3>Restaurant information</h3>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
  .container {
    position: relative;
    z-index: 3 !important;
  }
</style>

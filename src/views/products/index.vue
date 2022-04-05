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

      <section>
        <v-container fluid>
          <div class="products d-flex justify-space-between">
            <v-row no-gutters>
              <v-col cols="6" md="2">
                <v-card class="pa-2" tile>
                  <div class="aside-left">
                    <ul>
                      <li>
                        <a href="#" class="active line-animation">Burger</a>
                      </li>
                      <li>
                        <a href="#" class="line-animation">Burger</a>
                      </li>
                      <li>
                        <a href="#" class="line-animation">Burger</a>
                      </li>
                      <li>
                        <a href="#" class="line-animation">Burger</a>
                      </li>
                    </ul>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="7">
                <v-card class="pa-2">
                  <div class="aside-center">
                    <div>
                      <h2 class="font-weight-bold">NAPKINS AND CUTLERY</h2>
                    </div>
                    <ul class="products__list">
                      <li v-for="(item, index)  in 10" :key="index" class="d-flex justify-space-between"
                        @click="dialog3 = !dialog3">
                        <div>
                          <h2 class="title font-weight-bold">Burgers</h2>
                          <p class="font-weight-regular py-3">- 150 grams of fresh ground Beef from Solberg Pettersen.
                          </p>
                          <span class="font-weight-medium text-uppercase blue--text">NOk 184.00</span>
                        </div>
                        <v-img class="rounded-lg" lazy-src="https://picsum.photos/id/11/10/6" max-height="185"
                          max-width="219" src="https://picsum.photos/id/11/500/300"></v-img>
                      </li>
                    </ul>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="6" md="3">
                <v-card class="pa-2">
                  <div class="aside-right">
                    <h3 class="font-weight-bold">Restaurant information</h3>
                    <div class="address d-flex flex-column space-top1 mt-6">
                      <h5 class="py-1 font-weight-black">Address</h5>
                      <span class="py-1 text text">Skippergata 6A</span>
                      <span class="py-1 subtext">9008 Tromsø</span>
                      <a href="#" class="text-decoration-none font-weight-black blue--text mt-3">See map</a>
                    </div>
                    <div class="mt-8">
                      <h5>Opening times</h5>
                      <div class="tab">
                        <v-card>
                          <v-tabs v-model="tab" dark>
                            <v-tab v-for="item in items" :key="item.tab">
                              {{ item.tab }}
                            </v-tab>
                          </v-tabs>

                          <v-tabs-items v-model="tab">
                            <v-tab-item v-for="item in items" :key="item.tab">
                              <v-card flat>
                                <v-card-text>
                                  <p class="text">{{ item.day }}</p>
                                  <span class="subtext">{{item.time}}</span>
                                </v-card-text>
                              </v-card>
                            </v-tab-item>
                          </v-tabs-items>
                        </v-card>
                      </div>
                      <p class="text mt-6">
                        If you have allergies or other dietary restrictions, please contact the restaurant. The
                        restaurant will provide food-specific information upon request.
                      </p>
                      <a href="#" class="font-weight-bold blue--text">+4794096129</a>
                      <a href="#" class="font-weight-bold blue--text mt-6 d-block" size="14">See more information</a>
                      <div class="mt-6">
                        <h5>Categories</h5>
                        <ul class="d-flex pa-0">
                          <li>
                            <a href="#" class="blue--text font-weight-bold mr-2 text-decoration-none">American</a>
                          </li>
                          <li>
                            <a href="#" class="blue--text font-weight-bold mr-2 text-decoration-none">Dessert</a>
                          </li>
                          <li>
                            <a href="#" class="blue--text font-weight-bold mr-2 text-decoration-none">Burger</a>
                          </li>
                          <li>
                            <a href="#" class="blue--text font-weight-bold mr-2 text-decoration-none">BBQ</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <v-dialog v-model="dialog3" max-width="500px">
            <v-card>
              <v-card-title>
                <span>Dialog 3</span>
                <v-spacer></v-spacer>
                <v-menu bottom left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i" @click="() => {}">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-card-title>
              <v-card-actions>
                <v-btn color="primary" text @click="dialog3 = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-container>
      </section>
      <footer class="products__footer mt-16 pt-10">
        <v-container fluid>
          <div>
            <img @click="$router.push('/')" height="auto" width="130" :src="logo" alt="asd" srcset="" />
          </div>
          <v-row class="mb-6" no-gutters>
            <v-col sm="2" md="3">
              <v-card class="pa-2" tile>
                <h4>Download the app</h4>
              </v-card>
            </v-col>
            <v-col sm="5" offset-sm="2" md="4" offset-md="0">
              <v-card class="pa-2" tile>
                <h4 class="mb-5">Let's do this together</h4>
                <ul>
                  <li>
                    <router-link to="#">For curiers</router-link>
                  </li>
                  <li>
                    <router-link to="#">For curiers</router-link>
                  </li>
                  <li>
                    <router-link to="#">For curiers</router-link>
                  </li>
                  <li>
                    <router-link to="#">For curiers</router-link>
                  </li>
                </ul>
              </v-card>
            </v-col>
            <v-col sm="5" offset-sm="2" md="3" offset-md="0">
              <v-card class="pa-2" tile>
                <h4 class="mb-5">Wolt links</h4>
                <ul>
                  <li>
                    <router-link to="#">For curiers</router-link>
                  </li>
                  <li>
                    <router-link to="#">For curiers</router-link>
                  </li>
                  <li>
                    <router-link to="#">For curiers</router-link>
                  </li>
                  <li>
                    <router-link to="#">For curiers</router-link>
                  </li>
                </ul>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mb-6 bottom" align="center" no-gutters>
            <v-col sm="2" md="3">
              <v-card class="pa-2" tile>
                <span class="inf">©️ Wolt 2014–2022</span>
              </v-card>
            </v-col>
            <v-col sm="5" offset-sm="2" md="4" offset-md="0">
              <v-card class="pa-2" tile>
                <ul>
                  <li>
                    <router-link to="#">Accessibility statement</router-link>
                  </li>
                  <li>
                    <router-link to="#">Accessibility statement</router-link>
                  </li>
                  <li>
                    <router-link to="#">Accessibility statement</router-link>
                  </li>
                </ul>
              </v-card>
            </v-col>
            <v-col sm="5" offset-sm="2" md="3" offset-md="0">
              <v-card tile>
                <ul class="socials">
                  <li>
                    <router-link to="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill="#023462" />
                      </svg>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill="#023462" />
                      </svg>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill="#023462" />
                      </svg>
                    </router-link>
                  </li>
                </ul>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </footer>
    </div>
  </div>
</template>
<script>
import logo from '../../assets/deliveryegy.svg'
export default {
  data () {
    return {
      dialog3: false,
      logo,
      text: 'hello',
      items: [{
        tab: 'tab1',
        content: 'tab 1 content',
        day: 'Modday-Friday',
        time: '10.00-21.00'
      },
      {
        tab: 'tab2',
        content: 'tab 2 content',
        day: 'Sunday',
        time: '10.00-20.00'
      }
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    z-index: 3 !important;
  }
</style>

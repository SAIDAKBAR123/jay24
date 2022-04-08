<template>
  <section>
    <v-container fluid>
      <div class="products d-flex justify-space-between">
        <v-row gutters="20">
          <v-col cols="6" md="2">
            <v-card class="pa-2 menu-fixed" tile>
              <div class="aside-left">
                <ul>
                  <li v-for="block in 5" :key="block">
                    <a href="#">
                      Burger {{ block }}
                    </a>
                  </li>
                </ul>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="7">
            <v-card class="pa-2">
              <div class="aside-center">
                <div class="mb-16">
                  <div>
                    <h2 class="font-weight-bold">NAPKINS AND CUTLERY</h2>
                  </div>
                  <ul class="products__list">
                    <li v-for="product in products" :key="product.id" class="d-flex justify-space-between"
                      @click="openModal">
                      <div>
                        <h2 class="title font-weight-bold">{{product.name}}</h2>
                        <p class="font-weight-regular py-3">
                          {{ product.text }}
                        </p>
                        <span class="font-weight-medium text-uppercase blue--text">NOk {{ product.price }}</span>
                      </div>
                      <v-img class="rounded-lg" lazy-src="https://picsum.photos/id/11/10/6" max-height="185"
                        max-width="219" src="https://picsum.photos/id/11/500/300"></v-img>
                    </li>
                  </ul>
                </div>
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
                              <span class="subtext">{{ item.time }}</span>
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
    </v-container>
  </section>
</template>

<script>
import './style.scss'
export default {
  props: ['products']
}
</script>

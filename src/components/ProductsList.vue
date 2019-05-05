<template>
  <!-- code to display 1 product  -->
  <v-card class="shadow">
    <!-- display product title -->
    <v-card-title class="font-weight-bold subheading">
      {{ product.title }}
    </v-card-title>
    <!-- display product image -->
    <v-img :src="product.img"></v-img>
    <v-divider dark/>
    
    <v-layout row @click="show = !show">
      <!-- product price -->
      <v-flex xs10>
        <v-card-title class="font-weight-bold subheading">{{ product.price | currencyFmt }}</v-card-title>
      </v-flex>
      <v-flex xs2 class="mr-3">
        <!-- arrow icon to open the description -->
        <v-btn icon >
          <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <!-- custom slide transition while opening description -->
    <v-slide-y-transition>
      <!-- renders product description -->
      <v-card-text v-show="show"
        >{{ product.description }}</v-card-text>
    </v-slide-y-transition>
    <!-- if product is out of stock, hide 'add to card' button 
      and render Red Warning message  -->
    <v-card-text v-show="product.stock < 1"
      class="white--text error-message">Out of Stock</v-card-text>
    <!-- add to cart button -->
    <v-btn
      color="#079408"
      v-show="product.stock > 0"
      class="font-weight-bold"
      flat
      @click="addToCart(product)">
      add to cart
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'ProductsList',
  data () {
    return {
      // aids in controlling the state of the description
      show: false
    }
  },
  methods: {
    // adds a product to cart and reduces the products stock
    addToCart (product) {
      this.$store.commit('addToCart', product)
      this.$store.commit('reduceStock', product)
    }
  },
  props: {
    // product object received from Parent (HomePage.vue)
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
/* font color */
  .fonty {
    color: #079408 !important;
  }
  /* out of stock background color */
  .error-message {
    background-color: #ff5252 !important;
  }
</style>

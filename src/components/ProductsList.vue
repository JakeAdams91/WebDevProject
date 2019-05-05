<template>
  <v-card class="shadow">
    <v-card-title class="font-weight-bold subheading">
      {{ product.title }}

    </v-card-title>

    <v-img :src="product.img"></v-img>
    <v-divider dark/>
    <v-layout row @click="show = !show">
      <v-flex xs10>
        <v-card-title class="font-weight-bold subheading">{{ product.price | currencyFmt }}</v-card-title>
      </v-flex>
      <v-flex xs2 class="mr-3">
        <v-btn icon >
          <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-slide-y-transition>
      <v-card-text v-show="show"
        >{{ product.description }}</v-card-text>
    </v-slide-y-transition>
    <v-card-text v-show="product.stock < 1"
      class="white--text error-message">Out of Stock</v-card-text>
      <!-- flat -->
      <!-- class="font-weight-bold" -->
    <v-btn
      color="#079408"
      v-show="product.stock > 0"
      class="font-weight-bold"
      flat
      @click="addToCart(product)">
      add to cart
      <!-- icon <v-icon>add_shopping_cart</v-icon> -->
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'ProductsList',
  data () {
    return {
      show: false
    }
  },
  methods: {
    addToCart (product) {
      this.$store.commit('addToCart', product)
      this.$store.commit('reduceStock', product)
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  .fonty {
    color: #079408 !important;
  }
  .error-message {
    background-color: #ff5252 !important;
  }
</style>

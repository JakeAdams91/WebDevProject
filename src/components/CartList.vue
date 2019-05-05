<template>
  <v-card class="shadow">
    <v-card-title class="font-weight-black">
      {{ product.title }}
    </v-card-title>
    <v-img :src="product.img"></v-img>
    <v-divider dark/>
    <v-layout row>
      <v-flex xs6>
        <v-card-title class="font-weight-bold subheading">{{ product.price | currencyFmt }}</v-card-title>
      </v-flex>
      <v-flex xs6 class="mr-3">
        <v-card-title class="font-weight-bold subheading">Qty: {{ product.qty }}</v-card-title>
      </v-flex>
    </v-layout>
    <v-btn
      color="error"
      class="font-weight-bold"
      flat
      @click="removeCartItem(product)">
      remove
    </v-btn>
    <!-- <v-slide-y-transition>
      <v-card-text v-show="show"
        class="font-weight-black">{{ product.description }}</v-card-text>
    </v-slide-y-transition> -->
    <!-- <v-btn
      v-show="product.stock > 0"
      flat
      class="fonty"
      @click="addToCart(product)">
      Add To Cart
    </v-btn> -->
  </v-card>
</template>

<script>
export default {
  name: 'CartList',
  methods: {
    removeCartItem (product) {
      this.$store.commit('removeCartItem', product)
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
  
</style>
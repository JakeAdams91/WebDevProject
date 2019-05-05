<template>
  <!-- display 1 item -->
  <v-card class="shadow">
    <!-- product title -->
    <v-card-title class="font-weight-black">
      {{ product.title }}
    </v-card-title>
    <!-- product image -->
    <v-img v-if="this.$vuetify.breakpoint.xs" :src="product.img" width="" height=""></v-img>
    <v-img v-if="this.$vuetify.breakpoint.smOnly" :src="product.img" width="" height="200"></v-img>
    <v-img v-if="this.$vuetify.breakpoint.mdOnly" :src="product.img" width="" height="225"></v-img>
    <v-img v-if="this.$vuetify.breakpoint.lgAndUp" :src="product.img" width="" height="250"></v-img>
    <v-divider dark/>
    <!-- display price and amount bought on same line -->
    <v-layout row>
      <v-flex xs6>
        <v-card-title class="font-weight-bold subheading">{{ product.price | currencyFmt }}</v-card-title>
      </v-flex>
      <v-flex xs6 class="mr-3">
        <v-card-title class="font-weight-bold subheading">Qty: {{ product.qty }}</v-card-title>
      </v-flex>
    </v-layout>
    <!-- remove from cart button -->
    <v-btn
      color="error"
      class="font-weight-bold"
      flat
      @click="removeCartItem(product)">
      remove
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'CartList',
  methods: {
    // removes item from cart, if more than 1 item decrements the quantity
    removeCartItem (product) {
      this.$store.commit('removeCartItem', product)
    }
  },
  props: {
    // receives the product to be displayed from Parent (ShoppingCart.vue)
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>

<template>
  <v-app id="app">
    <tool-bar />
    <side-bar />
    <v-content>
      <home-page />
      <shopping-cart></shopping-cart>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import SideBar from './components/SideBar'
import HomePage from './components/HomePage.vue'
import ShoppingCart from './components/ShoppingCart.vue'
export default {
  name: 'app',
  computed: {
    getProducts () {
      return this.$store.getters.getProducts
    },
    getCart () {
      return this.$store.getters.getCart
    },
    getCategories () {
      return this.$store.getters.categories
    },
    getDealsOfDay () {
      return this.$store.getters.dealsOfDay
    },
    getProductsByCategory () {
      return this.$store.getters.productsByCategory
    },
    SelectedProducts () {
      return this.$store.getters.selectedProducts
    }
  },
  components: {
    ToolBar,
    HomePage,
    ShoppingCart,
    SideBar
  }
}
</script>

<style>

</style>

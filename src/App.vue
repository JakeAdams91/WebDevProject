<template>
  <v-app id="app">
    <tool-bar />
      <side-bar v-if="this.$vuetify.breakpoint.smAndUp" />
    <v-content id="padfix">
      <home-page v-if="!showCart" />
      <shopping-cart v-if="showCart"/>
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
    showCart () {
      return this.$store.getters.toggleCart
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
  #app {
    background-color: #079408 !important;
  }
  /* Small screens remove padding and the side-bar */
  @media only screen and (max-width: 600px) {
    #padfix {
      background-color: #079408 !important;
      margin-top: 112px !important;
    }
  }
  /* all other screen sizes display side-bar */
  @media only screen and (min-width: 600px) {
    #padfix {
      background-color: #079408 !important;
      padding-left: 150px !important;
    }
  }
  .position {
    position: sticky !important;
  }
</style>

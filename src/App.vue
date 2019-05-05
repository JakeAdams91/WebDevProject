<template>
<!-- vuetify wrapper -->
  <v-app id="app">
    <!-- toolbar (header) -->
    <tool-bar />
    <!-- side navigation -->
    <side-bar v-if="this.$vuetify.breakpoint.smAndUp" />
    <!-- main-content div -->
    <v-content id="padfix">
      <!-- home-page -->
      <home-page v-if="!showCart" />
      <!-- shopping-cart -->
      <shopping-cart v-if="showCart"/>
    </v-content>
  </v-app>
</template>

<script>
// import necessary children
import ToolBar from './components/ToolBar.vue'
import SideBar from './components/SideBar'
import HomePage from './components/HomePage.vue'
import ShoppingCart from './components/ShoppingCart.vue'
export default {
  name: 'app',
  computed: {
    // returns whether or not user is viewing cart
    showCart () {
      return this.$store.getters.toggleCart
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

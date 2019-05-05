<template>
  <v-toolbar
    extended
    class="header">
    <!-- Logo -->
    <img class="headerpic" width="300" height="100" :src="require('../assets/congoIII.png')" />
    <!-- shopping cart icon -->
    <v-spacer v-if="this.$vuetify.breakpoint.smAndUp"></v-spacer>
      <v-btn v-if="this.$vuetify.breakpoint.smAndUp" class="fonty" @click="toggleCart" flat icon>
        <v-icon>shopping_cart</v-icon>
      </v-btn>
    <!-- small screen html compresses side
      bar into a hamburger icon and positions them -->
    <template
      v-if="this.$vuetify.breakpoint.xsOnly"
      v-slot:extension>
      <v-spacer></v-spacer>
      <v-btn class="fonty" @click="toggleCart" flat icon>
        <v-icon>shopping_cart</v-icon>
      </v-btn>
      
      <v-menu
        offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            icon
            class="fonty smallscr">
            <v-icon>menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            @click="setCategory(null)">
            <v-list-tile-title>Random Deals</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="category in categories"
            :key="category"
            @click="setCategory(category)">
              <v-list-tile-title>{{ category }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </template>
 </v-toolbar>
</template>

<script>
export default {
  name: 'ToolBar',
  computed: {
    // returns list of all categories
    categories () {
      return this.$store.getters.categories
    },
    // returns whether the user is viewing cart or not
    showCart () {
      return this.$store.getters.toggleCart
    }
  },
  methods: {
    // turns the cart display on and off
    toggleCart () {
      window.scrollTo(0,0)
      this.$store.commit('toggleCart', null)
    },
    // when user selects a category to browse.
    setCategory (category) {
      window.scrollTo(0,0)
      this.$store.commit('setSelectedCategory', category)
      this.$store.commit('toggleCart', false)
    }
  }
}
</script>

<style>
  /*
  smart phones and down
  center logo, and give it fixed position
  */
  @media only screen and (max-width: 600px) {
    .header {
      z-index: 10;
      position: fixed !important;
    }
    .headerpic {
      display: block;
      margin-top: 55px;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
  /* 
  medium screens, these styles correct mid-size issues
  such as the header being under-sized
  */
  @media only screen and (min-width: 600px) {
    .header {
      z-index: 10;
      height: 121px !important;
    }
    .headerpic {
      width: 300px !important;
      height: 100px !important;
      display: block;
      margin-top: 45px !important;
      margin-left: 15px !important;
    }
  }
  /*
  large size // desktop screens
  */
  @media only screen and (min-width: 960px) {
    .header {
      z-index: 10;
    }
    .headerpic {
      width: 300px !important;
      height: 100px !important;
      display: block;
      margin-top: 45px !important;
      margin-left: 15px !important;
    }
  }
</style>


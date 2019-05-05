<template>
  <v-toolbar
    extended
    class="header">
    <img class="headerpic" width="300" height="100" :src="require('../assets/congoIII.png')" />

    <v-spacer v-if="this.$vuetify.breakpoint.smAndUp"></v-spacer>
      <v-btn v-if="this.$vuetify.breakpoint.smAndUp" class="fonty" @click="toggleCart" flat icon>
        <v-icon>shopping_cart</v-icon>
      </v-btn>
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
    categories () {
      return this.$store.getters.categories
    }
  },
  methods: {
    toggleCart () {
      this.$store.commit('toggleCart', null)
    },
    setCategory (category) {
      this.$store.commit('setSelectedCategory', category)
      this.$store.commit('toggleCart', false)
    }
  }
}
</script>

<style>
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
    .liststyle:hover {
      background-color: yellow !important;
    }
  }
  @media only screen and (min-width: 600px) {
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


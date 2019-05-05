<template>
<!-- navigation drawer -->
  <v-navigation-drawer
    app
    fixed
    clipped
    class="marginalize"
    permanent
  >
  <!-- hidden tree -->
  <v-img class="position" :src="require('../assets/palmIII.png')" height="121px" width="150px"></v-img>
  <!-- buttons for selecting the categories to browse -->
  <v-btn class="font-weight-bold subheading fix-layout" flat @click="setCategory(null)">Random Deals</v-btn>
  <v-btn class="font-weight-bold subheading" flat v-for="category in categories" :key="category" @click="setCategory(category)"> {{ category }} </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideBar',
  computed: {
    // returns all shopping categories
    categories () {
      return this.$store.getters.categories
    }
  },
  methods: {
    // when user selects category, this function sets it
    setCategory (category) {
      window.scrollTo(0,0)
      this.$store.commit('setSelectedCategory', category)
      this.$store.commit('toggleCart', false)
    }
  }
}
</script>

<style>
/* center the Random Deals button */
  #app > div > aside > button.font-weight-bold.subheading.fix-layout.v-btn.v-btn--flat.theme--light {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  /* styles for the navigation drawer */
  .marginalize {
    z-index: 5;
    box-shadow:  7px 0 5px -5px black !important;
    padding-left: 0px !important;
    /* margin-top: 121px !important; */
    height: 100% !important;
    width: 150px !important;
  }
  /* make tree logo stick where its at */
  .position {
    position: sticky !important;
  }
</style>

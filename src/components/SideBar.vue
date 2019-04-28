<template>
  <v-navigation-drawer
    app
    fixed
    clipped
    class="marginalize"
    permanent
  >
   <v-btn color="#079408" flat @click="setCategory(null)">Random Deals</v-btn>
    <v-btn color="#079408" flat v-for="category in categories" :key="category" @click="setCategory(category)"> {{ category }} </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideBar',
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  },
  methods: {
    setCategory (category) {
      this.$store.commit('setSelectedCategory', category)
    }
  }
}
</script>

<style>
  .marginalize {
    /* 0px 2px 5px black */
    z-index: 3;
    box-shadow:  7px 0 5px -5px black !important;
    padding-left: 0px !important;
    margin-top: 121px !important;
    width: 150px !important;
  }
</style>

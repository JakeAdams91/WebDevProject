<template>
  <!-- <div>
    <v-img class="position" :src="require('../assets/palmII.svg')" height="121px" width="150px"></v-img> -->
  
  <v-navigation-drawer
    app
    fixed
    clipped
    class="marginalize"
    permanent
  >
  <v-img class="position" :src="require('../assets/palmIII.png')" height="121px" width="150px"></v-img>
   <v-btn color="#079408" flat @click="setCategory(null)">Random Deals</v-btn>
    <v-btn color="#079408" flat v-for="category in categories" :key="category" @click="setCategory(category)"> {{ category }} </v-btn>
  </v-navigation-drawer>
  <!-- </div> -->
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
  .margys {
    margin-top: 121px !important;
  }
  .marginalize {
    z-index: 10;
    box-shadow:  7px 0 5px -5px black !important;
    padding-left: 0px !important;
    /* margin-top: 121px !important; */
    height: 100% !important;
    width: 150px !important;
  }
  .position {
    position: sticky !important;
  }
</style>

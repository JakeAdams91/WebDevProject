<template>
  <div>
    <v-container grid-list-md>
      <v-layout>
        <v-flex md3 sm6 xs12 v-for="(column, i) in gridColumns" :key="i">
          <v-layout column>
            <v-flex v-for="(element, index) in column" :key="index">
              <product-list
                :product="element"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ProductsList from './ProductsList.vue'
export default {
  name: 'HomePage',
  computed: {
    dealsOfDay () {
      return this.$store.getters.dealsOfDay
    },
    selectedProducts () {
      return this.$store.getters.selectedProducts
    },
    gridColumns () {
      let i = 0
      let j = 0
      let columns
      if (this.$vuetify.breakpoint.xs) {
        columns = []
        columns.push(this.getCheatSheet)
        return columns       
      } else if (this.$vuetify.breakpoint.sm) {
        columns = [[], []]
        while (i < this.getCheatSheet.length) {
          columns[j].push(this.getCheatSheet[i])
          i += 1
          j += 1
          if (j === columns.length) {
            j = 0
          }
        }
        return columns 
      } else if (this.$vuetify.breakpoint.mdAndUp) {
        columns = [[], [], [], []]
        while (i < this.getCheatSheet.length) {
          columns[j].push(this.getCheatSheet[i])
          i += 1
          j += 1
          if (j === columns.length) {
            j = 0
          }
        }
        return columns
      }
    }
  },
  compoents: {
    ProductsList
  }
}
</script>

<style>
  
</style>
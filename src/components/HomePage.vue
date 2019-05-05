<template>
  <div>
    <!-- create css grid -->
    <v-container grid-list-md>
      <v-layout>
        <!-- for loop over Grid Columns function (create columns) -->
        <v-flex md3 sm6 xs12 v-for="(column, i) in gridColumns" :key="i">
          <v-layout column>
            <!-- for loop over the products, placing them in their columns -->
            <v-flex v-for="(element, index) in column" :key="index">
              <!-- insert the ProductList.vue page, and pass it a product -->
              <products-list
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
    // gets Random Deals of the day
    dealsOfDay () {
      return this.$store.getters.dealsOfDay
    },
    // returns the products from the user selected category
    selectedProducts () {
      return this.$store.getters.selectedProducts
    },
    gridColumns () {
      // If selected Category
      if (this.selectedProducts.length > 0) {
        let i = 0
      let j = 0
      let columns
      if (this.$vuetify.breakpoint.xs) {
        columns = []
        columns.push(this.selectedProducts)
        return columns       
      } else if (this.$vuetify.breakpoint.sm) {
        columns = [[], []]
        while (i < this.selectedProducts.length) {
          columns[j].push(this.selectedProducts[i])
          i += 1
          j += 1
          if (j === columns.length) {
            j = 0
          }
        }
        return columns 
      } else if (this.$vuetify.breakpoint.mdAndUp) {
        columns = [[], [], [], []]
        while (i < this.selectedProducts.length) {
          columns[j].push(this.selectedProducts[i])
          i += 1
          j += 1
          if (j === columns.length) {
            j = 0
          }
        }
        return columns
        }
      }
      // If displaying Random Deals.
      else {
        let i = 0
        let j = 0
        let columns
        if (this.$vuetify.breakpoint.xs) {
          columns = []
          columns.push(this.dealsOfDay)
          return columns       
        } else if (this.$vuetify.breakpoint.sm) {
          columns = [[], []]
          while (i < this.dealsOfDay.length) {
            columns[j].push(this.dealsOfDay[i])
            i += 1
            j += 1
            if (j === columns.length) {
              j = 0
            }
          }
          return columns 
        } else if (this.$vuetify.breakpoint.mdAndUp) {
          columns = [[], [], [], []]
          while (i < this.dealsOfDay.length) {
            columns[j].push(this.dealsOfDay[i])
            i += 1
            j += 1
            if (j === columns.length) {
              j = 0
            }
          }
          return columns
        }
      }
    }
  },
  components: {
    ProductsList
  }
}
</script>

<style>
  
</style>
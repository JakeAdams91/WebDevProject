<template>
  <div>
    <!-- create grid  -->
    <v-container grid-list-md>
      <v-layout>
        <!-- for loop over Grid Columns function (create columns) -->
        <v-flex md3 sm6 xs12 v-for="(column, i) in gridColumns" :key="i">
          <v-layout column>
            <!-- for loop over the items in shopping cart, placing them in their columns -->
            <v-flex v-for="(element, index) in column" :key="index">
              <!-- insert the CartList.vue page, and pass it a product -->
              <cart-list
                :product="element"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- end of Grid -->
    <!-- create a card to display total price in shopping cart -->
    <v-card class="fix-to-bottom">
      <v-card-title 
        v-if="getCartPrice > 0"
        class="font-weight-bold subheading">total: {{ getCartPrice | currencyFmt }}</v-card-title>
    </v-card>
    <!-- displays a message and a return button if user does not have anything in their cart -->
    <div v-if="getCart.length <= 0"
      class="text-xs-center">
      <h1 class="white--text">Your shopping cart is empty, please order something</h1>
      <v-btn color="white" class="font-weight-bold subheading" @click="toggleCart">Return to Shopping</v-btn>
    </div>
  </div>
</template>

<script>
// import CartList.vue so I can work with it.
import CartList from './CartList'
export default {
  name: 'ShoppingCart',
  computed: {
    // returns the sum of all items in the shopping cart, by price
    getCartPrice () {
      return this.$store.getters.getCartPrice
    },
    // returns all items in the shopping cart
    getCart () {
      return this.$store.getters.getCart
    },
    // this function creates columns to display the items
    // the columns are responsive based on screen size,
    // desktop = 4 columns
    // tablet / mid-size = 2 columns
    // smart phone = 1 column
    gridColumns () {
    let i = 0
    let j = 0
    let columns
    if (this.$vuetify.breakpoint.xs) {
      columns = []
      columns.push(this.getCart)
      return columns
    } else if (this.$vuetify.breakpoint.sm) {
      columns = [[], []]
      while (i < this.getCart.length) {
        columns[j].push(this.getCart[i])
        i += 1
        j += 1
        if (j === columns.length) {
          j = 0
        }
      }
      return columns
      // if large screen create array with 4 arrays (multidimensional array)
    } else if (this.$vuetify.breakpoint.mdAndUp) {
      columns = [[], [], [], []]
      // while less than cart.length
      while (i < this.getCart.length) {
        // push 1 item in each column
        columns[j].push(this.getCart[i])
        i += 1
        j += 1
        // if at last column, reset to 0 index and begin-
        //-pushing items again
        if (j === columns.length) {
          j = 0
        }
      }
      // return columns w/ products placed
      // to be iterated over and displayed on screen
      return columns
      }
    }
  },
  methods: {
    // turns the cart on / off.
    toggleCart () {
      this.$store.commit('toggleCart', false)
    } 
  },
  components: {
    CartList
  }
}
</script>

<style>
  /* gives total cost card a absolute position */
  .fix-to-bottom {
    position: absolute !important;
  }
</style>

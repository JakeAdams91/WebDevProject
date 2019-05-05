<template>
  <div>
    <v-container grid-list-md>
      <v-layout>
        <v-flex md3 sm6 xs12 v-for="(column, i) in gridColumns" :key="i">
          <v-layout column>
            <v-flex v-for="(element, index) in column" :key="index">
              <cart-list
                :product="element"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <div v-if="getCart.length <= 0"
      class="text-xs-center">
      <h1 class="white--text">Your shopping cart is empty, please order something</h1>
      <v-btn color="white" class="font-weight-bold subheading" @click="toggleCart">Return to Shopping</v-btn>
    </div>
  </div>
</template>

<script>
import CartList from './CartList'
export default {
  name: 'ShoppingCart',
  computed: {
    getCart () {
      return this.$store.getters.getCart
    },
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
    } else if (this.$vuetify.breakpoint.mdAndUp) {
      columns = [[], [], [], []]
      while (i < this.getCart.length) {
        columns[j].push(this.getCart[i])
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
  methods: {
    toggleCart () {
      this.$store.commit('toggleCart', false)
    } 
  },
  filters: {
    percentFmt (number) {
      let percent = number * 100
      let percentStr = `${percent}%`
      return percentStr
    }
  },
  components: {
    CartList
  }
}
</script>

<style>
  .centered {
    text-align: center;
  }
</style>

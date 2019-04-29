<template>
  <div>
    <v-card>
      <v-card-title class="white--text">
        {{ product.category }}
      </v-card-title>
      <v-divider dark/>
      <v-layout row @click="show = !show">
        <v-flex xs10>
          <v-card-title class="white--text font-weight-bold">{{ product.example }}</v-card-title>
        </v-flex>
        <v-flex xs2 class="mr-3">
          <v-btn icon >
            <v-icon class="white--text">{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-slide-y-transition>
        <v-card-text v-show="show"
          class="white--text">{{ product.purpose }}</v-card-text>
      </v-slide-y-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  data () {
    return {
      show: false
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  
</style>

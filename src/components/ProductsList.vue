<template>
  <div>
    <v-card>
      <v-card-title class="fonty">
        {{ product.title }}
      </v-card-title>
      <v-img :src="product.img"></v-img>
      <v-divider dark/>
      <v-layout row @click="show = !show">
        <v-flex xs10>
          <v-card-title class="fonty font-weight-bold">{{ product.price }}</v-card-title>
        </v-flex>
        <v-flex xs2 class="mr-3">
          <v-btn icon >
            <v-icon class="fonty">{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-slide-y-transition>
        <v-card-text v-show="show"
          class="fonty">{{ product.description }}</v-card-text>
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
  .fonty {
    color: #079408 !important;
  }
</style>

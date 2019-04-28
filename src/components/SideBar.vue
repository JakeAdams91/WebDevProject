<template>
  <v-navigation-drawer
    app
    fixed
    clipped
    stateless
    class="elevation-3"
    dark
  >
    <v-list>
      <v-list-tile @click="route('Home')">
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="route('Installation')">
        <v-list-tile-content>
          <v-list-tile-title>Installation</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="route('Cheat-Sheet')">
        <v-list-tile-content>
          <v-list-tile-title>Cheat Sheet</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    route (path) {
      if(path === 'Home') {
        this.$store.commit('setPath', 'Home')
      } else if(path === 'Installation') {
        this.$store.commit('setPath', 'Installation Guide')
      } else {
        this.$store.commit('setPath', 'Cheat-Sheet')
      }
      this.$store.commit('toggleNavigationDisplay')
    }
  }
}
</script>
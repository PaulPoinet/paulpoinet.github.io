<template>
  <v-footer
  :elevation="24"
    color="grey lighten-3 px-6 py-3"
    height="auto"
    min-height="30"
  >
    <v-row :justify="$vuetify.breakpoint.mdAndUp ? 'space-between' : 'center'">
    <v-card-text >
    <a class="grey--text text--darken-2">
    Copyright © 2013-{{ currentyear }} Paul Poinet
    </a>
    </v-card-text>
    </v-row>
  </v-footer>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      currentyear: new Date().getFullYear(),
    }),


  }
</script>

<style lang="sass" scoped>
  .v-footer a
    text-decoration: none
</style>

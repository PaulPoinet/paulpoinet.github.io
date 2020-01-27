<template>
  <v-app>
    <core-toolbar />

    <v-fade-transition mode="out-in">
      <main v-bind="attrs">
        <core-jumbotron />

        <router-view />
      </main>
    </v-fade-transition>

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreFooter: () => import('@/components/core/Footer'),
      CoreJumbotron: () => import('@/components/core/Jumbotron'),
      CoreToolbar: () => import('@/components/core/Toolbar')
    },

    computed: {
      attrs () {
        return {
          key: this.$route.path,
          style: {
            minHeight: 'calc(100vh - ' + this.$vuetify.application.top + 'px'
          }
        }
      }
    }
  }
</script>

<style lang="sass">
  
  
  
  section
    padding-top: 32px
    padding-bottom: 64px
    @media screen and (max-width: 640px)
      padding-top: 16px
      padding-bottom: 16px
  .theme--dark.v-list-item
    color: #FFFFFF

</style>

<style>

  .map {
      -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
          -ms-filter: grayscale(100%);
          -o-filter: grayscale(100%);
              filter: grayscale(100%);
  }

</style>

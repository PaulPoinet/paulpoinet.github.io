<template>
  <v-app-bar
    v-scroll="onScroll"
    app
    elevate-on-scroll
    :color="!isScrolling ? 'transparent' : 'grey lighten-3'"
  >
              <!-- <v-chip outlined class="mr-2">
                Computational Design
              </v-chip>
              <v-chip outlined class="mr-2">
                Digital Workflows
              </v-chip >
              <v-chip outlined class="mr-2">
                Architecture
              </v-chip>
              <v-chip outlined class="mr-2">
                AEC
              </v-chip class="mr-2">                        -->

    <!-- <v-img
      class="shrink"
      max-width="60%"
      src="/static/alpha-creative-logo.png"
    /> -->
    


    <v-spacer />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        class="text-capitalize subtitle-1 mx-1"
        text
      >
        <span v-text="item.text" />
      </v-btn>
    </template>
    <v-menu v-else>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-card
        
        
      >
        <v-list color="transparent">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false,
      items: [
        {
          to: '/',
          text: 'Home'
        },
        {
          to: '/about-me',
          text: 'CV'
        },
        {
          to: '/works',
          text: 'Works'
        },
        {
          to: '/publications',
          text: 'Publications'
        },
        {
          to: '/contact-me',
          text: 'Contact'
        }
      ]
    }),

    methods: {
      ...mapMutations(['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 20
      }
    }
  }
</script>
